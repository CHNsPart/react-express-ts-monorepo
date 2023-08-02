import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import favicon from "serve-favicon";
import path from 'path';

const app: Application = express()
app.use(cors())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.json({ message: 'Hello earth!' })
})

const PORT: number = Number(process.env.PORT) || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on Port: ${PORT}`)
})