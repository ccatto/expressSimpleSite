import express from 'express';
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
const port = process.env.PORT || 5656;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

// app.listen(5656, () => {
//     console.log('http://localhost:5656')
// })

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index')
})

