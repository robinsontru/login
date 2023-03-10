const jwt = require ('jsonwebtoken')
const bcryptjs = require ('bcryptjs')
const conexion = require ('../databases/db.js')
const {promisify} = require('util')


///porsedimiento parta registro 
exports.register = async (req,res)=>{
  try {
    const name=  req.body.name
    const user=  req.body.user
    const pass=  req.body.pass 
    let passHas =await bcryptjs.hash(pass,8)
    conexion.query('insert into users set?')
  } catch (error) {
    console.log(error);    
  }


}

exports.nuevo =async(req,res)=>{

}