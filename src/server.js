import express from 'express';
import 'dotenv/config';

const port = process.env.PORT || 3333;
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Page OK' })
});

server.listen(port, () => {
    console.log(`Server is runing on port: ${port}`)
})
