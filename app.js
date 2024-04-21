const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();
const { connectMongoDb } = require('./connection');
const { logRequest } = require('./middlewares/logrequest');
const compression = require('compression');
const helmet = require('helmet');
const authRouter = require('./routes/authRoutes');
const { verifyToken } = require('./middlewares/authMiddleware');


//Connection to mongo database.
connectMongoDb().then(() => {
  console.log('Mongo Db is Connected..');
});


//middleware setups
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logRequest());
app.use(helmet());
app.use(compression());


// auth router setup
app.use('/auth', authRouter);

//setting up the token verification middleware and routers of other modules
app.use(verifyToken);
app.use('/user', userRouter);

//global error handler
// app.use(errorHandler);

//listening to port of sever for any changes.
app.listen(process.env.PORT, () => {
  console.log(`Server is listening to ${process.env.PORT}`);
});
