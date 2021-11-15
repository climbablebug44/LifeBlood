const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;


mongoose.connect(process.env.MONGO_ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connected to mongodb.");
    })
    .catch((err) => {
        console.log("Error connecting to mongodb.");
        console.error(err);
    })


app.use(express.json());
app.use(express.urlencoded({extended: false }));

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});
