import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import {Address, Restaurant} from './model/restaurant'
import BestMenu from './BestMenu';

let data:Restaurant = {
  name: "YDE 식당",
  category: "K-Food",
  address:{
    city: "icheon-si",
    detail: "somewhere",
    zipCode: 2342415
  },
  menu:[{name:"bibimbap",price: 12000, category:"RICE"}, {name:"japchae",price: 11000,category:"noodle"}, {name: "bulgogi",price: 18000,category:"beef"}]
}

const App:React.FC= () => {
  const [myRestaurant,setMyRestaurant] = useState<Restaurant>(data) // useState를 타입스크립트에서 사용할 때 <>라는 제네릭 문법사용하여 타입 지정
  const changeAddress = (address:Address) => {
    setMyRestaurant({...myRestaurant,address:address})
  }
  const showBestMenuName =  (name:string) =>{
    return name
  }
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}/>
      <BestMenu name="국밥" category="밥" showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
