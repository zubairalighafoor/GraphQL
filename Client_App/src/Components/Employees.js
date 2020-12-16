import { useQuery, gql, useMutation } from '@apollo/client';
const GET_EMPLOYEES = gql`
  query GetAllEmployees {
    employees{
      id,
      name,
      age,
      salary,
      position
    }
    }
`;
const ADD_EMPLOYEE = gql`
  mutation AddEmployee($id: Int!,$name: String!, $age: Int!, $salary: Float!, $position: String!) {
    addEmployee(
        input : {id:$id,name:$name,age:$age,salary:$salary,position:$position}
        ) {
      id
      name
    }
  }
`;
function Employees() {
    const { loading, error, data } = useQuery(GET_EMPLOYEES);
    const [addEmp] = useMutation(ADD_EMPLOYEE);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { employees } = data;
    return (
        <div>
            <table border="2px" width="600">
                <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Position</th>
                </tr>
                {
                    employees.map(emp => {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.position}</td>
                            </tr>)
                    })
                }
            </table>
            <button onClick={() =>
                addEmp({
                    variables: {
                        id: 5, name: "Aqifa", age: 23, salary:1000,position:"Internee"
                    },
                    refetchQueries: [{ query: GET_EMPLOYEES }]

                })
            }>
                Add Employee</button>
        </div>
    )
}
export default Employees;