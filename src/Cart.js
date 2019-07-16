import React, { Component } from 'react'
import Item from './Item';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state={
            items:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            items:newProps.items
        })
    }

    removeItemFromCart=(item)=>{
        console.log(item)
        this.props.removeItemFromCart(item);
    }

    render(){
        return(
            <React.Fragment>
            <h1>Cart</h1>
            {
                this.state.items.map((item)=>{
                    return <Item key={item.id} isCart={true} item={item} removeItemFromCart={this.removeItemFromCart}/>
                })
            }
            </React.Fragment>
        )
    }
}

export default Cart;