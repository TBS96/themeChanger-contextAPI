import React from 'react'

const Card = () => {
  return (
    <div className='w-full p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href="/">
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className='rounded-xl grayscale dark:grayscale-0 duration-500' />
        </a>
        <div className='px-5 pb-5 mt-5'>
            <a href="/">
                <h2 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>Shoes!</h2>
                <p className='text-lg tracking-tight text-gray-900 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquam.</p>
            </a>
        </div>
        <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900 dark:text-white'>INR 18,999</span>
            <a href="/" className='bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus-visible:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Buy Now</a>
        </div>
    </div>
  )
}

export default Card