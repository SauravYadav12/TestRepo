const express = require('express');
const EMP = require('../model/employee');
exports.getHome = (req,res) =>{
    res.status(200).json({
        status:"Success",
        message:"Home page"
    });
}

exports.createEmployee = async(req,res)=>{
    const department_Id = ["TECH01","TECH02","TECH03"];
    const department_name = ["T1","T2", "T3"];
    let deptID = false
    let Email = true;
    let first_name = true;


    try {
        if(req.body.department_Id){
            department_Id.forEach(id => {
                if(req.body.department_Id === id){
                    deptID = true;
                }
            });

            console.log("DeptId",deptID)

        }
        
        if(req.body.first_name === ''){
            first_name = false;
            console.log("first_name",first_name);
        } 
        
        if(req.body.email_address){
            Email = req.body.email_address.includes('@');
            console.log("Email",Email);
        }
        
         if(deptID && Email && first_name){
            console.log("All validated");

            const saveEmp = await EMP.create(req.body);
            console.log(saveEmp);
            res.status(200).json({
                status:"Success",
                message: saveEmp
            })
         }
        
        
        
    } catch (error) {
        res.status(400).json({
            status:"Fails",
            message: error
        })
    }
   

}   

exports.filterEmployee = async(req,res) => {
    console.log(req.query);
    // filtering on the basis of firstname
    const allEmployee = await EMP.find({first_name:req.query.first_name});
    
    res.status(200).json({
        status:"Success",
        data: allEmployee
    })
}