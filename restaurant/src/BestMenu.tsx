import React from 'react'
import { Menu } from './model/restaurant'

// interface의 extends 사용법
// price가 필요하지않아 Omit을 사용하여 Menu에서 제외 시킴
interface OwnProps extends Omit<Menu,'price'> {
    showBestMenuName(name:string):string
}

// type의 extends 사용법
// type OwnProps = Menu & {
//     showBestMenuName(name:string):string
// }

const BestMenu:React.FC<OwnProps> = ({name,category,showBestMenuName}) => {
  return (
    <div>{name}</div>
  )
}

export default BestMenu