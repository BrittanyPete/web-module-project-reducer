import React, { useReducer } from 'react';
import { applyNumber, changeOperation, clearDisplay, addToMemory, applyMemory, clearMemory } from './../actions';
import reducer, {initialState} from './../reducers';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  // const handleAddOne = () => {
  //   dispatch(addOne());
  // }

  const handleNumberClick = (number) => {
    // console.log('click happened')
    dispatch(applyNumber(number));
  }
  const handleOperationClick = (operator) => {
    dispatch(changeOperation(operator));
  }

  const handleClearClick = () => {
    dispatch(clearDisplay());
  }

  const handleAddMemory = () => {
    dispatch(addToMemory());
  }

  const handleUseMemory = (number) => {
    dispatch(applyMemory(number));
  }

  const handleClearMemory = () => {
    dispatch(clearMemory());
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleAddMemory} value={"M+"}/>
              <CalcButton onClick={() => handleUseMemory(state.memory)} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() =>handleNumberClick(1)} value={1}/>
              <CalcButton onClick={() =>handleNumberClick(2)} value={2}/>
              <CalcButton onClick={() =>handleNumberClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() =>handleNumberClick(4)} value={4}/>
              <CalcButton onClick={() =>handleNumberClick(5)} value={5}/>
              <CalcButton onClick={() =>handleNumberClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() =>handleNumberClick(7)} value={7}/>
              <CalcButton onClick={() =>handleNumberClick(8)} value={8}/>
              <CalcButton onClick={() =>handleNumberClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() =>handleOperationClick('+')} value={"+"}/>
              <CalcButton onClick={() =>handleOperationClick('*')} value={"*"}/>
              <CalcButton onClick={() =>handleOperationClick('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClearClick} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
