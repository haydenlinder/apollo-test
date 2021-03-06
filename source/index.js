const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({
    port: process.env.PORT
}).then(({ url }) => {
    console.log(`Listening on ${url}`)
})