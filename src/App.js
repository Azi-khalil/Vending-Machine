import data from './Data'
import './App.css';
import { useState } from 'react';

function App() {

  const [total, setTotal] = useState(0)
  const [item, setItem] = useState(0)
  const [insert, setInsert] = useState(0)
  const [change, setChange] = useState(0)
  const [message, setMessage] = useState('')



const changeHandler = (e) => {
   setMessage('')
   setItem(e.target.value)
}

const moneyHandler = (num) => {
  setInsert(insert + num)
  setMessage('')
}
const clearMoney = () => {
  setTotal(0)
  setInsert(0)
  setChange(0)
  setMessage('')
}
 


function enterItem()  {
 data.forEach((snack) => {
  if (snack.id === parseInt(item) && snack.available === true ){
    setTotal(total + snack.price)
    setMessage('')
    setMessage('Insert Money Please')
  }

  if(snack.available === false){
   setMessage('This Snack is Unavailable')
   setTotal(0)
  } 
    })  
    
}


function payMoney() {
  if (insert === total){
    setTimeout(() => {
      clearMoney()
      setMessage('Enjoy Your Snack!')
    }, 2000);
  }else if (insert > total){
    setChange(insert - total)
    setMessage('Please Take your Change')
    setTimeout(() => {
        clearMoney()
        setMessage('Enjoy Your Snack!')
        setItem('')
      }, 2000);
  } else if (insert < total) {
    setMessage('Please Complete the Sum')
  }
  setTimeout(() => {
    setItem(0)
  }, 1000)
}


  return (
    <div className='super'>
      <div className="con1">
        <span>{message}</span>
        <h3>Total Price is ${total}</h3>
        <h3>Money Inserted ${insert}</h3>
        <h3>Change Availabe ${change}</h3>
        <input 
        type='number'
        onChange ={changeHandler}
        placeholder='Insert Number of Snack Here'/>
        <button onClick={() => enterItem()}>Enter</button>  
      </div>
       
      <div className='con2'>
      <h6>Insert Money (only in USD)</h6>

        <button onClick={() => moneyHandler(20)}>$20</button>
        <button onClick={() => moneyHandler(50)}>$50</button>
        <button onClick={() => moneyHandler(1)}>$1</button>
        <button onClick={() => moneyHandler(0.20)}>20c</button>
        <button onClick={() => moneyHandler(0.10)}>10c</button>
        <button onClick={() => clearMoney()}>Clear All</button>
        <button onClick={() => payMoney()}>Pay</button>

      </div>

      <div className='con3'>
      <table>
       <tbody>
          <tr>
            <td>#1 <br /> Snickers</td>
            <td>#2 <br /> Mars</td>
            <td>#3 <br /> Milky</td>
            <td>#4 <br /> M&M</td>
            <td>#5 <br /> Layz</td>
          </tr>
          <tr>
            <td>#6 <br /> Crackers</td>
            <td>#7 <br /> Walkers</td>
            <td>#8 <br /> Minnies</td>
            <td>#9 <br /> Lion</td>
            <td>#10 <br /> Ruby</td>
          </tr>
          <tr>
            <td>#11 <br /> Mixups</td>
            <td>#12 <br />Walkers</td>
            <td>#13 <br />Max</td>
            <td>#14 <br />Pops</td>
            <td>#15 <br />Munch</td>
          </tr>
          <tr>
            <td>#16 <br />Icons</td>
            <td>#17 <br />Snaps</td>
            <td>#18 <br />Waffles</td>
            <td>#19 <br />Chops</td>
            <td>#20 <br />Weelies</td>
          </tr>
          <tr>
            <td>#21 <br />Snax</td>
            <td>#22 <br />Meez</td>
            <td>#23 <br />Lees</td>
            <td>#24 <br />Coon</td>
            <td>#25 <br />Jeager</td>
          </tr>
        </tbody>
    </table>
      </div>
    </div>
  );
}

export default App;
