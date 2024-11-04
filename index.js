const express = require('express');
const app = express();
require('dotenv').config();
const cvRoutes = require('./routes/cv');

app.use(express.json());
app.use('/api/cv',cvRoutes);

app.get('/',(req,res)=>{
    res.redirect('api/cv');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`Sunucu ${PORT} portunu dinliyor.`)})