const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')

const server = new ApolloServer({ typeDefs, mocks: true })

server.listen({
    port: process.env.PORT
}).then(({ url }) => {
    console.log(`Listening on ${url}`)
})