import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const doSomething = (req: express.Request, res: express.Response) => {
	return res.send('hello')
}

export const getExamples = (req: express.Request, res: express.Response) => {
	return prisma.example.findMany().then(examples => res.json(examples)).catch(e => res.json(e))
}

export const setExample = (req: express.Request, res: express.Response) => {
	const { example } = req.body
	return prisma.example.create({
		data: {
			name: example.name
		}
	}).then(result => res.json(result)).catch(e => res.json(e))
}