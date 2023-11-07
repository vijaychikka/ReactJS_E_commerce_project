import React from 'react'
import Carousel from './Carousel';

function Card(props) {
  return (
    <div>
      <Carousel />

      <div className='Box'>
        {props.data.map((product, index) => {
          return (
            <div className='cart' key={index} >
              <div className="card" style={{ width: "18rem", margin: "2%" }} >
                <img src={product.img} className="card-img-top" alt="..." style={{ height: "400px" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.itemname}</h5>
                  <p className="card-text">{product.weight}</p>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary" onClick={() => props.handleCartData(product)}  >Add to Cart</button>
                </div>
              </div>


            </div>
          )
        })}

      </div>

    </div>
  )
}
export default Card;
