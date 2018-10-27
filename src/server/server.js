import express from "express"
import { router } from "../routes/index"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())

app.use("/", router)

const port = 3000
app.listen(port, () => console.log(`App listening on port ${port}!`))
