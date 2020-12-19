import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import QuantityEditor from './QuantityEditor';
import currencyFormatter from "currency-formatter";


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    useEffect(() => {
            dispatch({type: 'PRODUCT', id})
    }, [id])
    return (
        <div className="container">
            <div className="row">

                <div className="col-6">
                    <img className="img-fluid" src={product.imgUrl} alt=""/>
                </div>
                <div className="col-6">
                    <h1>{product.title}</h1>
                    <p>
              {currencyFormatter.format(product.price, { code: 'INR' })}
            </p>
                    <QuantityEditor />
                    <button>Add To Cart</button>
                </div>
            </div>
            
        </div>
    )
}

export default Detail
