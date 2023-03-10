const express =require('express')
const router =express.Router()
const authControllers =require('../constrollers/authControllers.js')

//rutas para las vistas
router.get('/',(req,res)=>{
    // conexion()
    res.render('index')
})


router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/register',(req,res)=>{
    res.render('register')
})
authControllers.register

//rutas para las metodos de controlador
router.post('/register',authControllers.register)
module.exports=router
