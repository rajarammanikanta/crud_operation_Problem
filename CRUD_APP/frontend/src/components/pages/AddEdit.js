import React, { useState,useEffect} from 'react';
import { useHistory, useLocation ,useParams} from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios'
import './AddEdit.css';


const initialState = {
  profile_url: '',
  name: '',
  email: '',
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const{profile_url,name,email}=initialState

 const history=useHistory(); 

 const {id}=useParams(); 

 useEffect(()=>{
    if(id){
        getSingleUser(id)
    }
 },[id])

const getSingleUser=async(id)=>{
    const response=await axios.get(`http://localhost:4000/user/${id}`);
    if(response.status===200){
      setState({...response.data[0]})
    }

 }

  const addUser=async(data)=>{
    const response=await axios.post("http://localhost:4000/user",data); 
    if(response.status===200){
        toast.success("sucessfully added details");

    }
  }
  const updateUser=async(data,id)=>{
    const response=await axios.put(`http://localhost:4000/user/${id}`,data); 
    if(response.status===200){
        toast.success(response.data);

    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if(!profile_url || !name || !email){
        toast.error("Please provide value into each input field");
    }
    else{
       if(!id){
        addUser(state);
       }
       else{
        updateUser(state,id);
       }
    }

   
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value }); 
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{ margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center' }}
        onSubmit={handleSubmit}
      >
        <div className='label-input-container'>
          <label htmlFor="profile">Profile url</label>
          <input
            type="text"
            id="profile"
            name="profile_url" // Add name attribute
            placeholder="Enter Profile Url.."
            onChange={handleInputChange}
            value={state.profile_url}
          />
        </div>
        <div className='label-input-container'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name" // Add name attribute
            placeholder="Enter Name.."
            onChange={handleInputChange}
            value={state.name}
          />
        </div>
        <div className='label-input-container'>
          <label htmlFor="email">Email Id</label>
          <input
            type="email"
            id="email"
            name="email" // Add name attribute
            placeholder="Enter Email Id.."
            onChange={handleInputChange}
            value={state.email}
          />
        </div>
        <input type="submit" value={id ? "Update": "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
