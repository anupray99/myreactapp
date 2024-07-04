const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:4000', // Allow only this origin
  };
app.use(cors(corsOptions))
app.use(express.json())

const arr = [
    {
        name: "Ram",
        roll: 100
    },
    {
        name: "Shyam",
        roll: 200
    },
]

app.get('/', (req, res) => {
    return res.json(arr)
})

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body)
    arr.push(body)
    return res.json(arr)
})
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
