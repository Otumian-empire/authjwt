const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT || 3000

const randToken = '123asqwqwsadwwekdjfsdkj_3'
const refreshTokens = {}
const SECRET = process.env.SECRET || 'as1WEFGJ)(vb_'

app.use(express.urlencoded({extenteded: false}))

app.post('/login', (req, res, next) => {
    let { username, password } = req.body

    user = {
        'username':  username,
        'role': 'admin'
    }

    let token = jwt.sign(user, SECRET, { expiresIn: 3000})
})

app.listen(port, () => console.log(`Listening to port ${port}`))
