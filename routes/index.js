const { graphqlHTTP } = require('express-graphql');
const userResolver = require('../resolvers/userResolver');
const userSchema = require('../schemas/userSchema');

const router = require('express').Router();

router.get('/',(req,res)=>{

    res.json({status:1})
})

router.use('/users',graphqlHTTP({
     schema: userSchema,
    rootValue: userResolver,
    graphiql: true,
}))

module.exports = router