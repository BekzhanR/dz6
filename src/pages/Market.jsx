import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productaction} from "../store/product.js";
import classes from "../app.module.sass";

const Market = () => {
    const marketProducts=useSelector(state => state.product.product)
    const dispatch=useDispatch()
    const handleClick=(select)=>{
        dispatch(productaction.addBusket(select))
    }
    return (
        <div className={classes.product}>
            {marketProducts.map((item)=>(
                <div className={classes.info} key={item._id}>
                    <h2>{item.name}</h2>
                    <h3>{item.price}</h3>
                    <img src={item.picture} alt="#"/>
                    <p>{item.description}</p>
                    <p>{item.category}</p>
                    <button className={classes.btn} onClick={()=>handleClick(item)}>BUY</button>
                </div>
            ))}
        </div>
    );
};

export default Market;