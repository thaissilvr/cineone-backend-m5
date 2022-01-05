const app = require('../app')
const port = process.env.PORT || 3002

app.listen(port, ()=>{
    console.log(`Server is running here: http://localhost:${port}/`)
})
