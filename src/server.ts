import express from "express";
import {mysqlConnection} from '../src/database'

const app = express()

console.log('--')

app.listen(3000, () => {
    console.log(`Server is running on port ${}`)
})