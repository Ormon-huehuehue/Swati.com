import React from 'react'

const Discount = ({items, discount} : {items : number, discount : number}) => {
  return (
    <div className= 'flex-col'>
        <h1 className= 'texo-[2.5vw] md:text-[2vw] font-medium font-montserrat'>{items}+ items</h1>
        <div className= ' flex w-full justify-center item-center h-auto text-seagreen gap-1.5'>
            <p className= '  text-[3vw] font-bold font-montserrat'>{discount}</p>
            <div className= ' flex flex-col items-center justify-center gap-0'>
                <span className= 'font-extrabold text-[1.5vw] font-montserrat'>%</span>
                <span className= 'text-[2vw] md:text-[0.8vw] font-extrabold font-palanquin'>OFF</span>
            </div>

        </div>
    </div>
  )
}

export default Discount