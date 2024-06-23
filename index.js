import express from "express"
import TaskRouter from "./routes/task.route.js"

const app = express()

app.use(express.json());
//app.use(cors())

app.use("/", TaskRouter)

app.listen(7777, () => {
    console.log("app itd itp is working")
})

