const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:4000', // Allow only this origin
  };
app.use(cors(corsOptions))
app.use(express.json())

let arr = [
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
    console.log('GET api called');
    return res.json(arr)
})

app.delete('/:index', (req, res) => {
    console.log('DELETE api called');
    const index = req.params.index;
    arr = arr.filter((obj, ind) => (ind != index))
    return res.json(arr)
})

app.post('/', (req, res) => {
    console.log('POST api called');
    const body = req.body;
    console.log(body)
    arr.push(body)
    return res.json(arr)
})

app.put('/:index', (req, res) => {
    console.log('UPDATE api called');
    const index = req.params.index;
    const body = req.body;
    arr[index] = body;
    return res.json(arr)

})
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
