const covid = require('@ishaanohri/covid19')
const express = require('express')
const cors = require('cors');

const app = express()
const port = 8000
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send('Welcome to Corify')
})

app.get('/stats', (req,res) => {
    const func = async() => {
        const result = await covid.getAllStats()

        result.forEach((value) => {
            delete value.seriousCritical
            delete value.totalCasesPerMillionPop
            delete value.totalDeathsPerMillionPop
        })

        const obj = {
            result
        }

        res.send(obj)
    }

    func()
})

app.get('/stats/world', (req,res) => {
    const func = async() => {
        const result = await covid.getWorldStats()

        const obj = {
            result
        }

        res.send(obj)
    }

    func()
})

app.get('/time', (req,res) => {
    const func = async() => {
        const result = await covid.getUpdateTime()

        const obj = {
            result
        }

        res.send(obj)
    }

    func()
})

app.listen(port, ()=>{
    console.log('Listening on port',port)
})