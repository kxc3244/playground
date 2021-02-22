import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './exercise_4.css';

function Exercise_4() {
       return (
          <div>
            <div className="App">
                <div style={{margin: '20px'}}>
                    <strong>Current Status :</strong>
                     Started...
                </div>

                <div className="clock-container">
                    <button type="button" className="button1">Start</button>
                    <button type="button" className="button1">Reset</button>
                    <div className="buttons">
                        Speed:  
                        <button type="button" className="button2">0.5px</button>
                        <button type="button" className="button2">5px</button>
                        <button type="button" className="button2">10px</button>
                    </div>                   
                </div>
                <h2>Events</h2>
                <div className="events-container">
                    <div className="cardContainer">
                        <div className="cardtitle">Replay Clock</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Event</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Name</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Price 1</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Share 1</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 1</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Price 2</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Share 2</div>
                    </div>
                    <div className="cardContainer">
                        <div className="cardtitle">Exchange 2</div>
                    </div>
                </div>

                <div>
                    <h2>Order Book</h2>
                    <div className="ask-bid-container">
                        <div>
                            <h3>Bids</h3>
                            <div className="table-everything">
                            <table>
                                    <thead>
                                    <tr>
                                        <th>Age</th>
                                        <th>Exchange</th>
                                        <th>Shares</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Q</td>
                                        <td>300</td>
                                        <td>257.6</td>
                                    </tr>
                                    </tbody>
                                    </table>
                            </div>
                        </div>

                        <div>
                            <h3>Asks</h3>
                            <div className="table-everything">
                            <table>
                                    <thead>
                                    <tr>
                                        <th>Price</th>
                                        <th>Shares</th>
                                        <th>Exchange</th>
                                        <th>Age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    <tr>
                                        <td>267.8</td>
                                        <td>900</td>
                                        <td>M</td>
                                        <td>2.6</td>
                                    </tr>
                                    
                                    </tbody>
                                    </table>
                            </div>
                        </div>
                    
                    </div>
                </div>


            </div>
          </div>
       );
    
  }
  export default Exercise_4;