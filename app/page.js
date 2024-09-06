'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import axios from 'axios'; // Import axios
import Todo from "./component/Todo";

export default function Home() {
  const [formdata, setFormData] = useState({
    title: "",
    description: "",
  });
const [tododata,setTodoData]=useState([]);
const feachtodo= async ()=>{
  const response = await axios("/api")
  setTodoData(response.data.todos)
}
const deletetodo = async (mongoId)=>{
const response = await axios.delete('/api',{
  params:{
    mongoId:mongoId
  }
})
toast.success(response.data.msg);
feachtodo();
}
const completetodo = async (id)=>{
  const response = await axios.put('/api',{},{
    params:{
      mongoId:id
    }
  })
  toast.success(response.data.msg);
  feachtodo();
  }
useEffect(()=>{
  feachtodo();
   },[])

const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
  };
 
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post('/api', formdata);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      })
      await feachtodo();
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };

  return (
    <>
      <ToastContainer theme='dark' />
      <form onSubmit={onSubmitHandler} className="flex max-w-[600px] mt-24 items-start flex-col gap-2 w-[80%] px-2 mx-auto">
        <input 
          value={formdata.title} 
          onChange={onChangeHandler} 
          type="text" 
          name="title" 
          placeholder="Enter the title" 
          className="py-3 px-2 border-2 w-full" 
        />
        <textarea 
          value={formdata.description} 
          onChange={onChangeHandler} 
          name="description" 
          placeholder="Enter the description" 
          className="py-3 px-2 w-full border-2"
        ></textarea>
        <button type="submit" className="py-3 bg-green-600 px-11 text-white">Submit</button>
      </form>

      <div className="mx-auto mt-24 w-[700px] bg-green-100">
        <table>
          <thead>
            <tr className="flex px-5 w-full gap-12">
              <th className="  py-3">Id</th>
              <th className=" px-6 py-3">Title</th>
              <th className=" px-6 py-3">Description</th>
              <th className=" px-6 py-3">Status</th>
              <th className=" px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
        {tododata.map((item,index)=>{
          return <Todo key={index} id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id} deletetodo={deletetodo} completetodo={completetodo}/>
        })}
          </tbody>
        </table>
      </div>
    </>
  );
}

