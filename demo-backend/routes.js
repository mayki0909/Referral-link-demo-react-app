const express = require('express')
const router = express.Router()
const userTemplate = require('./models/UserModel.js')

router.post('/user', (request,response) => {
    const newUser = new userTemplate({
        username: request.body.username,
        email: request.body.email,
        referral: request.body.referral
    })
    newUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
    })

    router.get('/user', async (request,response) => {

        const id = request.query.id
        const username = request.query.username
        const email = request.query.email

        const users = await getUsersByParams(id,username,email)
        response.json(users)  

    })

    router.get('/userRefs', async (request,response) => {
        const id = request.query.id
        const users = await getUserRef(id)
        response.json(users)
    })

    async function getUsersByParams(id,username,email){
        try {
            if(username != undefined ){
                return await userTemplate.find({username: `${username}`})
            }
            if(email != undefined ){
                return await userTemplate.find({ email: `${email}` })        
            }
            if(id != undefined ){
                return await userTemplate.find({ _id:`${id}` })
            }

            return await userTemplate.find()
        } catch (error) {
            console.log(error)
        }

    }
    async function getUserRef(ref){
        try {
            return await userTemplate.find({referral: `${ref}`})
        } catch (error) {
            console.log(error)
        }

    }

    module.exports = router