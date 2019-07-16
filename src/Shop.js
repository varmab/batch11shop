import React, { Component } from 'react'
import './Shop.css'
import Catalog from './Catalog';
import Cart from './Cart';
import Checkout from './Checkout';

class Shop extends Component{
    constructor(){
        super();

        var myItems=[
            {
                id:1,
                name:"Shirt",
                price:100
            },
            {
                id:2,
                name:"Pant",
                price:100
            },
            {
                id:3,
                name:"Short",
                price:100
            }
        ]

        this.state={
            items:myItems,
            cartItems:[],
            orderTotal:0
        }
    }

    addItemToCart=(item)=>{
        console.log(item);
        this.setState({
            cartItems:[
                ...this.state.cartItems,
                item
            ]
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce(function(total,cartItem){
                    return total+cartItem.price;
                },0)
            })
        })
    }

    removeItemFromCart=(item)=>{
        console.log(item);
        this.setState({
            cartItems:this.state.cartItems.filter((cartItem)=>{
                return cartItem.id!=item.id
            })
        },()=>{
            this.setState({
                orderTotal:this.state.cartItems.reduce(function(total,cartItem){
                    return total+cartItem.price;
                },0)
            })
        })
    }

    render(){
        return(
            <div className="row">
                <h1>Shop</h1>
                <div className="column">
                    <Catalog items={this.state.items} addItemToCart={this.addItemToCart}/>
                </div>
                <div className="column">
                    <Cart items={this.state.cartItems} removeItemFromCart={this.removeItemFromCart}/>
                    <Checkout orderTotal={this.state.orderTotal}/>
                </div>
            </div>
        )
    }
}

export default Shop;