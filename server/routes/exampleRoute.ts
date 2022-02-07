import express from "express"
import {doSomething} from "../controllers/exampleController"

const exampleRouter = express.Router()

const exampleRoute = (req: express.Request, res: express.Response) => {
	return doSomething(req, res)
}

exampleRouter.get('/example', exampleRoute)

export default exampleRouter