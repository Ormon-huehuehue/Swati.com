import React from 'react'

const Discount = ({items, discount} : {items : number, discount : number}) => {
  return (
    <div className= 'flex-col'>
        <h1 className= ' text-xl font-bold '>{items}+ items</h1>
        <div className= ' flex w-full justify-between item-center h-auto text-seagreen gap-1.5'>
            <p className= '  text-[3vw] font-extrabold'>{discount}</p>
            <div className= ' flex flex-col items-center justify-center'>
                <span className= 'font-extrabold text-2xl'>%</span>
                <span className= 'text-[10px] font-bold'>OFF</span>
            </div>

        </div>
    </div>
  )
}

export default Discount