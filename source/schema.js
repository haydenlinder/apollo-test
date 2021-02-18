const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        allCars: [Car!]!
    }

    "An owner's car"
    type Car {
        id: ID!
        owner: Owner!
        make: String!
        model: String!
        "Per the requirements in the README, 
        the year is a String"
        year: String! 
        vin: String!
    }
`

module.exports = typeDefs