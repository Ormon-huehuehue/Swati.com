import React from 'react'
import CheckoutButton from './CheckoutButton'

const BundleBar = () => {
  return (
    <div className= 'fixed bottom-0 w-full py-5 bg-bundlebar'>
      <div className='flex justify between px-10 w-full'>
        <p>haha</p>
        <CheckoutButton/>
      </div>
    </div>
  )
}

export default BundleBar