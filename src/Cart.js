import React, { useEffect, useState } from 'react';

function Cart(props) {


    const [cartItems, setCartItems] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);


    useEffect(() => {
        setCartItems(props.cartProducts);

        console.log("cart items : ", cartItems);

        let total = 0;

        for(let i = 0; cartItems.length > i; i++) {
            total = total + cartItems[i].price;
        }

        setTotalAmount(total);
    }, [cartItems]);

    // props.data.map((product) => {
    //     return (
    //         total = total + product.data.price
    //     )

    // })

    let removeCartItem = (removeItem) => {
        //console.log("remove item : ", removeItem);
        for(let i = 0; cartItems.length > i; i++) {
            // console.log(cartItems[i], cartItems[i].id, removeItem.id);
            if(cartItems[i].id == removeItem.id) {
                // console.log("Loop Entry");
                setTotalAmount(totalAmount - cartItems[i].price);
                cartItems.splice(i, 1);

                console.log(cartItems);
                break;
            }
        }
     }

    // console.log(props)
    return (
        <div className='Box'>
            {
                cartItems.map((cartItem) => {
                    return (
                        <div key={cartItem.id}>
                            <div className='cart' >
                                <div className="card" style={{ width: "18rem", margin: "2%" }} >
                                    <img src={cartItem.img} className="card-img-top" alt="..." style={{ height: "400px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{cartItem.itemname}</h5>
                                        <p className="card-text">{cartItem.weight}</p>
                                        <p className="card-text">{cartItem.price}</p>
                                        <button className="btn btn-primary" onClick={() => removeCartItem(cartItem)}>Remove</button>

                                    </div>
                                </div>


                            </div>
                        </div>


                    )
                })
            }
            <p> Total cart value is : {totalAmount}</p>
        </div>
    )
}

export default Cart;
