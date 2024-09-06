import React from 'react'

const Todo = ({id,title,description,mongoId,complete, deletetodo,completetodo}) => {
  return (
    
         <tr className="flex px-5 w-full gap-12">
              <td className="flex  py-3 ">{id+1}</td>
              <td className="flex px-6 py-3 ">{title}</td>
              <td className="flex px-6 py-3 ">{description}</td>
              <td className="flex px-6 py-3 ">{complete ?"complated":"pending"}</td>
              <td className="flex px-6 py-3 gap-2  ">
                <div><button onClick={()=>deletetodo(mongoId)} className="text-white w-[70px] bg-red-600 h-[30px]">Delete</button></div>
                <button onClick={()=>completetodo(mongoId)} className="text-white-600 w-[70px] bg-green-500 h-[30px] ">Done</button>
              </td>
            </tr>
  )
}

export default Todo