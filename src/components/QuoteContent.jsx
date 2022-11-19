import React from 'react'


const QuoteContent = ({change}) => {

  return (
    <>
      <p className='card__quote'>{change.quote}</p>
      <h1 className='card__author'>{change.author}</h1>
    </>
  )
}

export default QuoteContent