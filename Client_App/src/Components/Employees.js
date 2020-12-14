import { useQuery, gql } from '@apollo/client';
const GetEmployees = gql`
  query GetAllEmployees {
    Employees{
      id,
      name,
      age,
      salary,
      position
    }
    }
`;
function Employees() {
    const { loading, error, data } = useQuery(GetEmployees);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const { Employees } = data;
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
                Employees.map(emp => {
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
        </div>
    )
}
export default Employees;