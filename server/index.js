const express = require('express')
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));