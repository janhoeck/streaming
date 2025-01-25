import express from 'express'
import watchtimeRoute from './routes/watchtimeRoute'

const PORT = process.env.PORT || 3001

const application = express()
application.use(watchtimeRoute)
application.listen(PORT, () => {
    console.log(
        'streamelements-modejs-server started successfully and is listening on Port',
        PORT
    )
})
