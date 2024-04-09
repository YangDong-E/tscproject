import { useContext, useEffect } from "react";
import { Store } from "../Store";
import { Link, useParams } from "react-router-dom";
import {
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../hooks/orderHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export default function OrderPage() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;

  const {
    data: order,
    isLoading,
    error,
    refetch,
  } = useGetOrderDetailsQuery(orderId!);

  // paypal 연동

  const { mutateAsync: payOrder, isLoading: loadingPay } =
    usePayOrderMutation();

  // Paypal 테스트용
  const testPayHandler = async () => {
    await payOrder({ orderId: orderId! });
    refetch();
    toast.success("Order is paid");
  };

  const [{ isPending, isRejected }, paypalDispatch] = usePayPalScriptReducer();

  const { data: paypalConfig } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (paypalConfig && paypalConfig.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypalConfig!.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({
          type: "setLoadingStatus",
          value: SCRIPT_LOADING_STATE.PENDING,
        });
      };
      loadPaypalScript();
    }
  }, [paypalConfig]);

  const paypalbuttonTransactionProps: PayPalButtonsComponentProps = {
    style: { layout: "vertical" },
    createOrder(data, actions) {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                value: order!.totalPrice.toString(),
              },
            },
          ],
        })
        .then((orderID: string) => {
          return orderID;
        });
    },
    onApprove(data, actions) {
      return actions.order!.capture().then(async (details) => {
        try {
          await payOrder({ orderId: orderId!, ...details });
          refetch();
          toast.success("Order is paid sucessfully");
        } catch (err) {
          toast.error(getError(err as ApiError));
        }
      });
    },
    onError: (err) => {
      toast.error(getError(err as ApiError));
    },
  };

  return isLoading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !order ? (
    <MessageBox variant="danger">주문 내역이 없습니다.</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>주문 완료</title>
      </Helmet>
      <h1 className="my-3">주문완료 {orderId}</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>배송 정보</Card.Title>
              <Card.Text>
                <strong>이름:</strong> {order!.shippingAddress.fullName} <br />
                <strong>배송지: </strong> {order.shippingAddress.address},
                {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                ,{order.shippingAddress.country}
              </Card.Text>
              {order.isDelivered ? (
                <MessageBox variant="success">
                  배송완료 {order.deliveredAt}
                </MessageBox>
              ) : (
                <MessageBox variant="warning">배송 준비 중</MessageBox>
              )}
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>결제 방법</Card.Title>
              <Card.Text>
                <strong>결제 수단:</strong> {order.paymentMethod}
              </Card.Text>
              {order.isPaid ? (
                <MessageBox variant="success">
                  결제 완료 {order.paidAt}
                </MessageBox>
              ) : (
                <MessageBox variant="warning">결제 대기 중</MessageBox>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>제품</Card.Title>
              <ListGroup variant="flush">
                {order.orderItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className="align-items-center">
                      <Col md={6}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded thumbnail"
                        ></img>{" "}
                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}>
                        <span>{item.quantity} 개</span>
                      </Col>
                      <Col md={3}>{item.price} 원</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>주문 정보</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>제품 가격</Col>
                    <Col>{order.itemsPrice.toFixed(2)} 원</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>배송비</Col>
                    <Col>{order.shippingPrice.toFixed(2)}원</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>세금</Col>
                    <Col>{order.taxPrice.toFixed(2)} 원</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> 총 가격</strong>
                    </Col>
                    <Col>
                      <strong>{order.totalPrice.toFixed(2)} 원</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {!order.isPaid && (
                  <ListGroup.Item>
                    {isPending ? (
                      <LoadingBox />
                    ) : isRejected ? (
                      <MessageBox variant="danger">
                        Error in connecting to PayPal
                      </MessageBox>
                    ) : (
                      <div>
                        <PayPalButtons
                          {...paypalbuttonTransactionProps}
                        ></PayPalButtons>
                        <Button onClick={testPayHandler}>Test Pay</Button>
                      </div>
                    )}
                    {loadingPay && <LoadingBox></LoadingBox>}
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
