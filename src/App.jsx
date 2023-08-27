import { useState } from 'react'
import './App.css'
import BtnQuote from './components/BtnQuote.jsx'
import Quote from './components/Quote'
import phrases from "./utils/phrases.json"
import getRandomelementarr from './utils/getRandomelementarr'

function App() {
  
 const phraseRandom = getRandomelementarr(phrases)
 const numberRandom = getRandomelementarr([1,2,3,4])
 
 const [quote, setQuote] = useState(getRandomelementarr (phrases))
 const [numberBg, setNumberBg] = useState(numberRandom)
 const bgstyle={
  backgroundImage:`url(/fondo${numberBg}.jpg)`
 }


  return (
    <div className='container' style={bgstyle}>
      <h1 className='container__title'>galleta de la fortuna</h1>
      <Quote phrase={quote}/>
      
      <BtnQuote 
      setQuote={setQuote}
      phrases={phrases}
      setNumberBg={setNumberBg}
      />
    </div>
  )
}

export default App
