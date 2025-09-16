const User  = require('../models/user')

 exports.createUser = (req,res) => {
   try {
    const {name,email} = req.body
     User.create(name,email, (err,result) => {
            if(err) return res.status(500).json({err:err})
                return res.status(200).json({
             id : result.insertId,
             name,
             email
            })
    })
   } catch (error) {
     return res.status(500).json({
        success:false,
        message: 'INternal server error'
     })
   }
}