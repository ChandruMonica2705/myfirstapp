function App() {
 const users=[{
  name:"Monica",
  Age:32},
  {name:"poova",
age:30},{
  name:"Menaka",age:27},{
    name:"chandru",age:42}
  ]
  return <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody id="table-body">
        {users.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
            </tr>
          ))}
          
</tbody>
      </table>
      </>
    }
  

  export default App
