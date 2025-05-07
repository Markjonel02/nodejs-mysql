const express = require('express');
const router = express.Router();



const Createservice  = require('../services/Create')
const Retrieveservice  = require('../services/Create')
const Updateservice  = require('../services/Create')
const Deleteservice  = require('../services/Create')


router.post('/create',async(req,res)=>{
   const {username,password} = req.body

   await Createservice;
   const results = await Createservice(username,password)

  if (results) {
    res.status(200).send({message:"created successfully!",status:results})
    
  } else {
     res.status(500).send({message:"Error creating account!",status:results})
  }
})

router.get('/retrieve',async(req,res)=>{
   const {username,password} = req.body


   const arr = []

   arr.push(username)
   arr.push(password)


   const results = await Retrieveservice(arr)

  if (results) {
    res.status(200).send({message:" Retrieve successfully!",status:results})
    
  } else {
     res.status(500).send({message:"Error retrieving account!",status:results})
  }
})

module.exports = router