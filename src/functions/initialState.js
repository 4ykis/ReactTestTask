/**
 * Created by roman on 03.09.2017.
 */

const data = [{
    id: 1,
    type: "phone",
    name: "iPhone 5",
    price: "$400",
    rating: 3.8
}, {
    id: 2,
    type: "phone",
    name: "Nokia Lumia 1320",
    price: "$130",
    rating: 2.1
},{
    id: 3,
    type: "phone",
    name: "Lenovo IdeaPad Z507",
    price: "$145",
    rating: 5
},{
    id: 4,
    type: "tablet",
    name: "Apple MacBook Pro 13 Early 2012",
    price: "$59",
    rating: 4.5
},{
    id: 5,
    type: "notebook",
    name: "Lenovo G50-4",
    price: "$29",
    rating: 3.5
},{
    id: 6,
    type: "tablet",
    name: "Apple MacBook Pro 15 Early 2012",
    price: "$129",
    rating: 4
},{
    id: 7,
    type: "notebook",
    name: "Lenovo G71",
    price: "$130",
    rating: 2.1
},{
    id: 8,
    type: "notebook",
    name: "ASUS X200L",
    price: "$130",
    rating: 2.1
}];

function initialState(data){
    return {
        items:data,
        sorting:{
            type:'ASC',
            param:'id'
        },
        filterArr:[]
    }
}

export default initialState(data)