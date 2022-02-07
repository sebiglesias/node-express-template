import express from "express"
import {doSomething, getExamples, setExample} from "../controllers/exampleController"

const exampleRouter = express.Router()

const exampleRoute = (req: express.Request, res: express.Response) => {
	return doSomething(req, res)
}

const getExamplesFromDB = (req: express.Request, res: express.Response) => {
	return getExamples(req, res)
}

const setExampleInDB = (req: express.Request, res: express.Response) => {
	return setExample(req, res)
}

exampleRouter.get('/example', exampleRoute)

exampleRouter.get('/examples', getExamplesFromDB)
exampleRouter.post('/example', setExampleInDB)

export default exampleRouter