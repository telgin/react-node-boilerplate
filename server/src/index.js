import express from 'express';
import moment from 'moment';

const app = express();

app.use(express.json());

app.use(express.static('public'))

app.get('/date', async (req, res) => {
    // do stuff

    res.send(moment().toISOString());
});

console.log('Server started.')
app.listen(8080);