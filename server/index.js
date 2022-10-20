const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js")
const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));