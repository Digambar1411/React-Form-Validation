import React from 'react'

function ErrorMessage({msg}) {
  console.log('msg'.msg);
  return (
    msg.length >0 && <p className='error-msg'> {msg} </p>
  )
}

export default ErrorMessage