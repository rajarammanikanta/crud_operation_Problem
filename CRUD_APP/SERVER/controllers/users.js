import {v4 as uuid} from 'uuid' 

let users=[];


export const getUsers=(req,res)=>{
    res.send(users);

};

export const createUser=(req,res)=>{
    let user=req.body; 

    users.push({...user,id: uuid()}); 
    res.send("User Added Successfully");
};

export const getUser=(req,res)=>{
    const singleUser=users.filter((user)=>user.id===req.params.id); 
    res.send(singleUser);
}

export const deleteUser=(req,res)=>{
    const deleteUse=users.filter((user)=>user.id!==req.params.id); 
    res.send("User Deleted Successfully!");

}

export const updateUser=(req,res)=>{
    const user=users.find((user)=>user.id===req.params.id); 

    user.name=req.body.name;
    user.number=req.body.number;
    user.mail=req.body.mail;
    res.send("User Updated Successfully");
}