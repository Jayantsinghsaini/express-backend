import express from 'express'
import cors from 'cors'
const app = express()
const port  =  3000

app.use(cors())
app.use(express.text())
app.get('/about',(req,res) => {
    res.send('<h1>Hello World from about</h1><br><h2>From Backend(server.js)</h2>')
})
app.get('/home',(req,res) => {
    res.send('<h1>Hello World from home</h1><br><h2>From Backend(server.js)</h2>')
})
app.listen(port,() => {
    console.log(`app is listening at http://localhost:${port}`);
})




