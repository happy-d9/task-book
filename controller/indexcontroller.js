var user = require('../model/indexmodel');
var book = require('../model/bookmodel');
const bcrypt = require('bcrypt');
const storage = require('node-persist');
storage.init( /* options ... */);


exports.register = async(req,res)=>{
    try {
        var data = await user.create(req.body);
        res.status(200).json({
        status:"add user succesfully",
        data
    } )}catch (error) {
        res.status(404).json({
            error
        })
    }
    
}
exports.login = async(req,res)=>{
   
    var data =await user.find({"email":req.body.email});
    await storage.init( /* options ... */ );
    var id=await storage.getItem('userId')
 
    if(id == undefined)
    {
        if(data.length == 1)
        {
           
                await storage.init( /* options ... */ );
                await storage.setItem('userId',data[0].id) 
                await storage.setItem('role',data[0].role) 
                
                res.status(200).json({
                    status:"login successfull",
                    data
                })
        }
        else{
            res.status(200).json({
                status:"check your email and password"
            })
        }
    }
    else{
        res.status(200).json({
            status:"already login"
        })
    }

}

exports.logout = async (req,res)=>{
    await storage.init( /* options ... */ );
    var id = await storage.clear();

    res.status(200).json({
        status:"logout"
    })
}

exports.get_data = async (req, res) => {

    try {
        var data = await user.find();

        res.status(200).json({
            status:"view all user detail",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: error
        })
    }
}
exports.update = async (req, res) => {
    var id = req.params.id;
    var data = await user.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        status: "success",
        data
    })
}