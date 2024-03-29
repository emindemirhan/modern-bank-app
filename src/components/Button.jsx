import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins rounded-xl font-medium text-[18px] text-primary ${styles}`} >Get Started</button>
  )
}

export default Button