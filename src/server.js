const express  = require('express');
const bodyParser = require('body-parser');

const app  = express();
const port  = 3000


/* middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/* routes */

const accountRoutes = require('./routes/UserAccounts')
app.use('/User',accountRoutes);

app.listen(port,()=>{
    console.log(`Listen on port:${port}`);
    
})

