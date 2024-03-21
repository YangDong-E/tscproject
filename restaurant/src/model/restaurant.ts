// 레스토랑 관련 타입 지정

// let data = {
//     name: "YDE 식당",
//     category: "K-Food",
//     address:{
//       city: "icheon-si",
//       detail: "somewhere",
//       zipCode: 2342415
//     },
//     menu:[{name:"bibimbap",price: 12000, category:"RICE"}, {name:"japchae",price: 11000,category:"noodle"}, {name: "bulgogi",price: 18000,category:"beef"}]
//   }


// 아래 방법처럼 객체안의 객체 또한 타입으로 지정하여 다른 곳에서도 따로 사용 가능하게 만들 수 있다.
// 아래 코드와 동일함 (좀 더 간결하고 재사용이 편함)

// export type Restaurant = {
//     name: string;
//     category: string;
//     address: {
//         city: string;
//         detail: string;
//         zipCode:Number;
//     };
//     menu:{
//         name:string;
//         price:number;
//         category: string;
//     }[]
// }

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu:Menu[]
}
export type Address = {
    city: string;
        detail: string;
        zipCode:number;
}

export type Menu = {
    name:string;
        price:number;
        category: string;
}

// Omit<타입이름, 빼고싶은 데이터>를 사용하여 새로운 타입을 간단하게 만들 수 있다.
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// Pick<타입이름, 가져오고싶은 데이터>를 사용하여 새로운 타입을 간단하게 만들 수 있다.
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>


// API call 의 응답 값도 타입을 지정할 수 있다.
// <T>를 사용하여 무슨 타입인진 모르지만 타입을 사용하기 때문에 제네릭<>를 사용하여 T를 입력해준다.
export type ApiResponse<T> ={
    data:T[],
    totalPage:number,
    page:number
}

export type ResturantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
