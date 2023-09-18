// Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import { toast } from 'react-toastify';
import Header  from './Header';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/users");
    if (response.status === 200) {
      setData(response.data);
    }
  }

  const onDeleteUser=async(id)=>{
    if(window.confirm("are you sure that you want to delete"))
    {
        const response= await axios.delete(`http://localhost:4000/user/${id}`);
        if(response.status===200){
            toast.success(response.data);
            getUsers();
        }
    }
  }



  return (
    <>
         <Header/>
         <div className="container">
   
   <table className='styled-table'>
     <thead>
       <tr>
         <th>No.</th>
         <th>Profile</th>
         <th>Name</th>
         <th>Email</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {data && data.map((item, index) => (
         <tr key={index}>
           <th scope="row">{index + 1}</th>
           <td><img src={item.profile_url} alt={`Profile for ${item.name}`} /></td>
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td>
             <Link to={`update/${item.id}`} className='btn btn-edit'>Edit</Link>
             <button className='btn btn-delete' onClick={()=>onDeleteUser(item.id)}>Delete</button>
             <Link to={`view/${item.id}`} className='btn btn-view'>View</Link>
           </td>
         </tr>
       ))}
      
     </tbody>
   </table>
 </div>
    </>
  
  );
}

export default Home;
