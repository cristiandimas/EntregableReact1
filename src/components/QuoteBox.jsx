import React from 'react'
import Button from './Button'
import QuoteContent from './QuoteContent'




const QuoteBox = ({change, obj, colorRandom }) => {

  const objStyle = {
    color : colorRandom
  }

  const styleBtn = {
    backgroundColor : colorRandom
  }
  return (
    <article className='card' style={objStyle} >
      <i   className= " card__icon fa-solid fa-quote-left"></i>
      <QuoteContent 
      change = {change}/>
      <Button 
        styleBtn={styleBtn}
        obj={obj}
      />
    </article>
  )
}

export default QuoteBox