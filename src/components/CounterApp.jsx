import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="flex justify-center items-center top-1/2 left-1/2 absolute translate-x-[-50%] translate-y-[-50%]">
                <button className='mx-4 px-3 py-2 bg-black text-white hover:bg-gray-700 rounded-md' onClick={() => setCount(count + 1)}>Increment</button>
                <h1 className='px-6 border-2 border-black rounded-md py-2 m-5'>{count}</h1>
                <button className='mx-4 px-3 py-2 bg-black text-white hover:bg-gray-700 rounded-md' onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>Decrement</button>
            </div>
        </>)
}

export default CounterApp