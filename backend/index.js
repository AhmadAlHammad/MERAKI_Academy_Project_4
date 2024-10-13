const express = require("express");
// const bcrypt = require("bcrypt");

const app = express();
const cors = require("cors");
require("dotenv").config();
const DB = require("./models/DB")

const PORT =5000;

app.use(cors());
app.use(express.json());
const registerRouter = require('./routes/user');
const roleRouter = require('./routes/role')
 const accessoriesRouter = require('./routes/accessories');
 
 const laptopRouter = require('./routes/laptop')
const tvRouter =require('./routes/tv')
 const mobileRouter = require('./routes/mobile')
 const tabletRouter =require('./routes/tablet')
 const AllRouter = require("./routes/All")
//user Router
app.use('/users',registerRouter)

app.use('/All',AllRouter)
//role Router
app.use('/role' , roleRouter)
//accessories router
app.use('/accessories',accessoriesRouter)
//laptop router
app.use('/laptop',laptopRouter)
//mobile router
app.use('/mobile',mobileRouter)
//tablet router
app.use('/tablet',tabletRouter)
//Tv router
app.use('/tv',tvRouter)
// app.use('/tvs',tvRouter)
// app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
