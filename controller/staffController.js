const Staff = require("../model/staffModel")


exports.staffRegister = async(req, res) =>{
    let staff =  new Staff({
        name:req.body.name,
        email:req.body.email,
        password: req.body.password,
        dob:req.body.dob,

    })
    console.log(staff)
    staff = await staff.save();
    if(!staff){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(staff);
}


exports.viewStaff = async(req,res) =>{

    const staff = await Staff.find()
    if(!staff){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(staff)
}

