import React,{useState,useEffect}from 'react'
import {useParams,Link} from 'react-router-dom' 
import axios from "axios"
import Header from './Header'
import './view.css' 


const View=()=>{
    const[user,setUser]=useState(null)
    const{id}=useParams();

    useEffect(()=>{
        if(id){
            getSingleUser(id)
        }
     },[id])
    
    const getSingleUser=async(id)=>{
        const response=await axios.get(`http://localhost:4000/user/${id}`);
        if(response.status===200){
          setUser({...response.data[0]})
        }
    
     }

    return(
        <>
        <Header/>
        <div style={{marginTop: "150px"}}>
          <div className='card-header'>
            <p>User Profile Details</p>
          </div>
          <div className='container'>
            <strong>ID:</strong>
            <span>{user && user.id}</span>
            <br/>
            <br/>
            <strong>Profile:</strong>
            <span><img src={user && user.profile_url} alt="profile"/></span>
            <br/>
            <br/>
            <strong>Name:</strong>
            <span>{ user && user.name}</span>
            <br/>
            <br/>
            <strong>Email ID:</strong>
            <span> {user && user.email}</span>
            <br/>
            <br/>
            <Link to="/">
               <button className='btn btn-edit'>Go Back</button>  
            </Link>
          </div>
        </div>
        </>
       
    )
}

export default View