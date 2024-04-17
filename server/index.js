const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Server is live');
});

app.listen(PORT, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {console.log("DB")});
    console.log(`Server is running on port ${PORT}`);
});