import React from 'react';
import './App.css';
import './index.css'

function App() {
  return (
    <div className="App">
    <div className="bg-promo borders" >
      <form action="/" method="GET" className="main-search borders">
       <h2>Бронируйте уникальное жилье и Впечатления</h2>
        <div className="field">
        <label htmlFor ="Where">Where</label>
        <input type="text" id="Where"/>
        </div>
        <div className="field-group">
          <div className="field">
            <label htmlFor ="from"></label>
            <input type="date" id="from"/>
          </div>
          <div className="field">
            <label htmlFor ="to"></label>
            <input type="date" id="to"/>
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label htmlFor ="from"></label>
            <select id="adults">
                <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>

            </select>
          </div>
          <div className="field">
            <label htmlFor ="to"></label>
            <select id="child">
            <option value="1">1</option>
            <option value="2">2</option>
            </select>
          </div>
          <button className="button">Search</button>
        </div>
      </form>
    </div>
    </div>


  );
}

export default App;
