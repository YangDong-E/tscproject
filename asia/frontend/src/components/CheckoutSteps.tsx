import { Col, Row } from "react-bootstrap";

export default function CheckoutSteps(props: {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
}) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? "active" : ""}>로그인</Col>
      <Col className={props.step2 ? "active" : ""}>배송주문</Col>
      <Col className={props.step3 ? "active" : ""}>결제하기</Col>
      <Col className={props.step4 ? "active" : ""}>주문상세</Col>
    </Row>
  );
}
