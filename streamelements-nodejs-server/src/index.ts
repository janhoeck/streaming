import express from 'express'
import watchtimeRoute from './routes/watchtimeRoute'

const PORT = 3000

const application = express()
application.use(watchtimeRoute)
application.listen(PORT, () => {
    console.log(
        'streamelements-modejs-server started successfully and is listening on Port',
        PORT
    )
})
