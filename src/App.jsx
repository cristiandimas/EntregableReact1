import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json'
import colors from "./json/colors.json";



function App() {


  const ram = arr => {
      const r = Math.floor(Math.random()*arr.length);     
       return arr[r] 
  }    

  const [change, setChange] = useState(ram(quotes))
  const [colorRandom, setcolorRandom] = useState(ram(colors))

  const obj = () =>{   
    setChange(ram(quotes))
    setcolorRandom(ram(colors))
   }

   const objStyle = {
    backgroundColor: colorRandom
   }

  return (
    <div className="App"  style={objStyle}>
     <QuoteBox  
     change={change}
     obj={obj}
     colorRandom = {colorRandom}
     />           
    </div>
  )
}

export default App