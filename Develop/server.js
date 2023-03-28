const express = require("express")
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//route
app.get('.', (req, res) => {
  res.sendFile(path.join(_dirname,'public','index.html'))
})

app.get('/notes', (req,res) =>
res.sendFile(path.join(_dirname, '/public/notes.html'))
)

app.listen(process.env.PORT || 3000)