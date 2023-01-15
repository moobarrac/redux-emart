import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from "../redux/action";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3">
              <div className="container py-4">
                <button
                  className="btn-close float-end"
                  aria-label="Close"
                  onClick={() =>
                    dispatch({ type: REMOVE_ITEM, payload: item })
                  }
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      width="180px"
                      height="200px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{item.title}</h3>
                    <p className="lead fw-bold">${item.price}</p>
                    <div className="col">
                      <button className="btn btn-dark" onClick={() =>  dispatch({type: DECREASE_ITEM, payload: item})}><i className="fa fa-caret-left"></i></button>
                      <span className="lead fw-bolder m-2">Qty: {item.qty}</span>
                      <button className="btn btn-dark" onClick={() => dispatch({type: ADD_ITEM, payload: item})}><i className="fa fa-caret-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="px-4 my-5 rounded-3 bg-light">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
