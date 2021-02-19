const data = require('./data')

const resolvers = {
    Query: {
        allCars() {
            return data.cars
        }
    }
}

module.exports = resolvers