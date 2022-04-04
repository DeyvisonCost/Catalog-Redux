import React, {useCallback} from "react";
import {IProduct} from '../store/modules/cart/types'
import {addProductToCart} from '../store/modules/cart/actions'
import {useDispatch} from'react-redux'

interface CatalogItemProps {
    product: IProduct
    
    
}


 const CatalogItem   = ({product}: CatalogItemProps) => {
   
    const dispatch = useDispatch()
   
    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCart(product));
      }, [dispatch, product]);
  
    return (
    <>
      <div>
          <article>
          <strong>{product.title}</strong> {"  -  "}
          <span>{product.price}</span> {"  "}
          <button type="button" onClick={handleAddProductToCart}>
            Pay
          </button>
        </article>
      </div>
    </>
  );
};

export default CatalogItem