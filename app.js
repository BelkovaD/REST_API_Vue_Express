const express = require ('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

let CONTACTS = [ //Импровизированная база данных
    {id: v4(), name: 'Didirididi', value: '+79999999999', marked: false}
]

app.use(express.json())

app.get('/api/contacts', (req, res) => { //GET
    setTimeout(()=> {res.status(200).json(CONTACTS)}, 1000)
})

app.post('/api/contacts', (req, res) => { //POST
    const contact = {...req.body, id:v4(), marked: false}
    CONTACTS.push(contact)
    res.status(201).json(contact)

}) 

app.use(express.static(path.resolve(__dirname,'client'))) //папка client является статическая

app.get('*',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'client','index.html'))
})

app.listen(3000,()=>console.log('Server has been started on 3000 port...'))




