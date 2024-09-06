import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className=" flex py-7 flex-wrap justify-around " >
      <h1 className="text-lg text-blue-600 font-bold">Todo list</h1>
      <ul className="flex text-m gap-[40px]">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    </div>
  )
}

export default Navbar