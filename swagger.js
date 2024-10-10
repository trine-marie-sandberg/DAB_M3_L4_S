const swaggerAutogen = require('swagger-autogen')()
const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    definitions: {
        //👇Schemas are defined here.
        Hotel: {
            $Name: "Street Hotel",
            $Location: "Chicago",
        },
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./bin/www')
})