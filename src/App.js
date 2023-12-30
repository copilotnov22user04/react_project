import logo from './logo.svg';
import './App.css';
import StackRow from './StockRow/StockRow';
import React,{useEffect,useState} from 'react';
import {getStockData} from './apicall/stockapi';


function App() {
  const[stocks,setstocks]=useState([])

  useEffect(()=>{
    getStockData().then((data)=>{
      setstocks(data)
    });
  },[]);
  return (
    <div className="container">
     
   
      
<div className='row'>
      {stocks.map((stock)=>{
        return(
          <StackRow key={stock.symbol} stock={stock}
          dayHigh={stock.dayHigh}
          dayLow={stock.dayLow}
          change={stock.change}
          ticker={stock.symbol}
          price={stock.price}
          />
        )
      })
    }
    </div>
      
    </div>
  );
}

export default App;
