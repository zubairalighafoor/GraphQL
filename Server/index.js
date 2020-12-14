const { ApolloServer, gql } = require('apollo-server');
const Employees = [
    {
        id:1,
        name:'Zubair',
        age:25,
        salary:25000,
        position:'Web Developer'
    },
    {
        id:2,
        name:'Umair',
        age:21,
        salary:30000,
        position:'SEO'
    },
    {
        id:3,
        name:'Sumair',
        age:20,
        salary:20000,
        position:'Graphic Designer'
    },
  ];

const typeDefs = gql`
  type Employee {
    id:Int
    name: String
    age: Int
    salary: Float
    position: String
  }

  type Query {
    Employees: [Employee]
  }
`;
const resolvers = {
    Query: {
      Employees: () => Employees,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
