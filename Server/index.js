const { ApolloServer, gql } = require('apollo-server');
let employees = [
    {
        "id":1,
        "name":'Zubair',
        "age":25,
        "salary":25000,
        "position":'Web Developer'
    },
    {
        "id":2,
        "name":'Umair',
        "age":21,
        "salary":30000,
        "position":'SEO'
    },
    {
        "id":3,
        "name":'Sumair',
        "age":20,
        "salary":20000,
        "position":'Graphic Designer'
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
  input EmpInput {
    id:Int
    name: String
    age: Int
    salary: Float
    position: String
  }

  type Query {
    employees: [Employee]
  }
  type Mutation {
    addEmployee(input: EmpInput): Employee
  }
`;
const resolvers = {
    Query: {
      employees: () => employees,
    },
    Mutation: {
      addEmployee: (e, { input }) => {
        employees.push(
          {
            id: input.id,
            name: input.name,
            age: input.age,
            salary: input.salary,
            position: input.position
          }
        )
        return {
            id: input.id,
            name: input.name,
            age: input.age,
            salary: input.salary,
            position: input.position
        }
      }
    }
  };

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
