import React from 'react';
import './FormComponent.css';

const FormComponent = () => {
  return (
    <div className="container">
      <div className="header">Baton</div>
      <div className="subtitle">Post-Trade • Redefined</div>
      <div className="tab-container">
        <button className="tab active">FX</button>
        <button className="tab">Single Sided Cashflows</button>
      </div>
      <div className="main">
        <div className="sidebar">
          <button className="sidebar-item active">CASHFLOW COUNT</button>
          <button className="sidebar-item">COUNTER PARTY</button>
          <button className="sidebar-item">PRODUCT TYPE</button>
          <button className="sidebar-item">CURRENCY</button>
          <button className="sidebar-item">TIMINGS</button>
          <button className="sidebar-item">SECONDARY CURRENCY</button>
          <button className="sidebar-item">PRIORITY FLAG</button>
        </div>
        <div className="form-content">
          <div className="form-group">
            <label>NUMBER OF CASHFLOWS:</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>VALID TRADE DATES:</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>TRADING PARTY:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>TRADING PARTY %:</label>
            <input type="number" defaultValue="50" />
          </div>
          <button className="generate-button">GENERATE</button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;