const express = require("express");
const userRouter = require("./routes/user");
const app = express();
const {connectMongoDb} = require("./connection");
const {logRequest} = require("./middlewares/logrequest");
const compression = require("compression");
const helmet = require("helmet");



//Connection to mongo database.
connectMongoDb().then(()=>{
    console.log("Mongo Db is Connected..");
});

//middleware setups
app.use(express.urlencoded({extended:true}));
app.use(logRequest());
app.use(helmet());
app.use(compression());

//router setup
app.use("/user",userRouter);

//listening to port of sever for any changes.
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to ${process.env.PORT}`);
})