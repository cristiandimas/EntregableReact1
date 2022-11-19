import React from 'react'



const Button = ({styleBtn, obj}) => {


  return (
    <button className='card__btn' onClick={obj} style={styleBtn} >&gt;</button>
  )
}

export default Button