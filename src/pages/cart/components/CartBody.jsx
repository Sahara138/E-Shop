import React from "react";
import ProductCarts from "./ProductCarts";
import { useSelector } from "react-redux";

const CartBody = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce((accumulator, currentValue)=>
    accumulator + (currentValue.price * currentValue.qty),0)
  console.log(subTotal)
  
  return (
    <>
      <div>
        <div className="px-[56px] py-[32px] rounded-lg bg-white02">
          <div className="grid grid-cols-[2.5fr_1fr_1fr_1.5fr] gap-x-4 ntitems-center">
            <div>
              <h6 className="font-montserrat font-bold text-base uppercase">
                Product
              </h6>
            </div>
            <div>
              <h6 className="font-montserrat font-bold text-base uppercase">
                Price
              </h6>
            </div>
            <div>
              <h6 className="font-montserrat font-bold text-base uppercase">
                QTY
              </h6>
            </div>
            <div>
              <h6 className="font-montserrat font-bold text-base uppercase">
                Total
              </h6>
            </div>
          </div>
        </div>
        {
            cartItems.length === 0
            ?
            <div className="font-montserrat font-medium text-[20px] mt-12 text-center">No Product Carts Found</div>
            :
            cartItems.map((cart) => (
                <ProductCarts
                    key={cart.id}
                    id={cart.id}
                    image={cart.image}
                    pName={cart.pName}
                    pCategory={cart.pCategory}
                    variants={cart.variants}
                    price={cart.price}
                    qty={cart.qty}
                />
            ))
        }
                      <div className="mt-[20px]">{subTotal}</div>


      </div>
        
        
        
        
        
    </>
  );
};

export default CartBody;
