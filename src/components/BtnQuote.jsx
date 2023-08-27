import getRandomelementarr from "../utils/getRandomelementarr"


const buttom = ({setQuote, phrases, setNumberBg}) => {
  
  const handleRandomPhrase=() => {
   setQuote(getRandomelementarr(phrases))
   setNumberBg(getRandomelementarr([1,2,3,4]))
  }
  
    return (
    <button className='container__btn' onClick={handleRandomPhrase}> Other Phrase </button>
  )
}

export default buttom