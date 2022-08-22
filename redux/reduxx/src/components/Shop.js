/*import React from "react";
import { useDispatch } from "react-redux";
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  
  return( <div>
    <h2>Deposite/withdraw</h2>
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    Update Balance
    <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
  </div>)
};*/
//  longprocess

// ----------------------------------------------------------------------------------------------

/*import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from './state/index'

const Shop = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  
  return( <div>
    <h2>Deposite/withdraw</h2>
    <button className="btn btn-primary mx-2" onClick={()=>(actions.withdrawMoney(100))}>-</button>
    Update Balance
    <button className="btn btn-primary mx-2" onClick={()=>(actions.depositMoney(100))}>+</button>
  </div>)
};*/
//  long process
// --------------------------------------------------------------------------------------------------------

import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../state/index';

import {useSelector} from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)   //for balance
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  
  return( <div>
    <h2>Deposite/withdraw</h2>
    <button className="btn btn-primary mx-2" onClick={()=>(withdrawMoney(100))}>-</button>
    Update Balance ({balance})
    <button className="btn btn-primary mx-2" onClick={()=>(depositMoney(100))}>+</button>
  </div>)
};

export default Shop;


// short way
// npm i redux react-redux redux-thunk