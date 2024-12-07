import React from 'react'

function ErrorMessage({msg}) {
  console.log('msg'.msg);
  if(!msg) return null 
  return <p className='error-msg'>{msg}</p>
}

export default ErrorMessage