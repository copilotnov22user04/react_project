import React from 'react'

const StockRow = (props) => {
  return (

    //dispaly stock data using card
    <div className='col-md-4 py-3'>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.ticker}</h5>
          <p className="card-text">{props.price}</p>
          {/* //show change in green if >0 else red */}
          <p className="card-text" style={{ color: props.change > 0 ? "green" : "red" }}>Change : {props.change}</p>

          <p className="card-text">Change : {props.change}</p>
          <p className="card-text">Day High : {props.dayHigh}</p>
          <p className="card-text">Day Low : {props.dayLow}</p>
        </div>
      </div>
    </div>


  )
}

export default StockRow
