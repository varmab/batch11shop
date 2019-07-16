import React, { Component } from 'react'

class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            item:props.item,
            isCart:props.isCart
        }
    }

    onAdd=()=>{
        this.props.addItemToCart(this.state.item)
    }

    onRemove=()=>{
        this.props.removeItemFromCart(this.state.item)
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.item.name}</h1>
                <p>Price:{this.state.item.price}</p>
                {
                    (this.state.isCart==true) ? (<button onClick={this.onRemove}>Remove</button>) : (<button onClick={this.onAdd}>Add To Cart</button>)
                }
                
            </React.Fragment>
        )
    }
}

export default Item;