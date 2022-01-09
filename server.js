const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'juliolopez',
      password : '',
      database : 'smart-brain'
    }
  });


db.select('*').from('users').then(data => {
   
}) 

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req,res)=> {
    res.send(database.users);
});

// Signin
app.post('/signin', (req, res)=> {signin.handleSignin(req,res,db,bcrypt)});

// Register
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)});

//Profile 
app.get('/profile/:id', (res,req)=> {profile.handleProfile(req,res,db)});

//  Image
app.put('/image', (req,res)=> {image.handleImage(req,res, db)});



app.listen(3000, ()=> {
    console.log('app is running on port 3000')
});