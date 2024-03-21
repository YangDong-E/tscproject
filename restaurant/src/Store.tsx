import React from 'react'
import {Address, Restaurant} from './model/restaurant'


// props의 타입 따로 만들기
// OwnProps 이름은 여기서만 사용하는 타입이다 라는 이름이기 때문에 다른 뜻은 없다.
interface OwnProps{
    info: Restaurant,
    changeAddress(address:Address):void // :뒤에는 return의 타입을 적어야되는데 return 타입이 없을땐 void를 적어준다.
}


const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>{info.name}</div>
  )
}

export default Store