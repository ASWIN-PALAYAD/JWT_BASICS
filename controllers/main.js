const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');

const login = async (req,res) => {
    const {username,password} = req.body;

    if(!username || !password){
        throw new BadRequestError('please provide a valid email and password')
    }

    //for demo
    const id = new Date().getDate();

    //try to keep payload small, better experirnece for user
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}

const dashboard = async (req,res) => {

        const {id,username} = req.user
        const luckyNumber  = Math.floor(Math.random()*100);
        res.status(200).json({msg:`hello, ${username}`,secret:`here is your lucky number is ${luckyNumber}`});
    
}


module.exports = {
    login,
    dashboard
}