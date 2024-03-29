const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
require("dotenv").config();

// Connect to database
connectDB();

const app = express();

app.use(cors());

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user/', require('./routes/userRoutes'));
app.use('/api/company/', require('./routes/companyRoutes'));
app.use('/api/portfolio/', require('./routes/portfolioRoutes'));
app.use('/api/aboutMe/', require('./routes/aboutMeRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
