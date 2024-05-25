// import React, { useState } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext';
// const PlaceOrder = () => {
//   const {getTotalCartAmount}= useState(StoreContext);
//   return (
//      <form action="" className="place-order">
//         <div className="place-order-left">
//           <p className="title">Delivery Information</p>
//           <div className="multi-fields">
//              <input type="text" placeholder='First name' />
//              <input type="text" placeholder='last name'/>
//           </div>
//           <input type="email" placeholder='Email' />
//           <input type="text" placeholder='street'/>
//           <div className="multi-fields">
//             <input type="text" placeholder='City' />
//             <input type="text" placeholder='Adress'/>
//           </div>
//           <div className="multi-fields">
//             <input type="text" placeholder='Zip code' />
//                <input type="text" placeholder='Optional'/>
//           </div>
//           <input type="text" placeholder='Phone no'/>
//         </div>
//           <div className="place-order-right">
          
//           <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
              
//             </div>
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount()===0?0:2}</p>
              
//             </div>
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${ getTotalCartAmount()===0?0:  getTotalCartAmount()+2}</b>
//             </div>
          
//           </div>
//           <button >PROCEED TO CHECKOUT</button>
//         </div>
 

//           </div>
//      </form>
//   )
// }

// export default PlaceOrder
import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivary Information</p>
        <div className="multi-fields">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address'/>
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
              
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
              
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${ getTotalCartAmount()===0?0: getTotalCartAmount()+2}</b>
            </div>
          
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
