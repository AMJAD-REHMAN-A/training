import Header from "../../CommonComp/Header";

function Home({ title, onHandleInputChange, students, setIsOpen, isOpen }) {
  return (<>
    <Header title={title} />
    <input value={title} name="title-name" onChange={(e) => onHandleInputChange(e)}></input>
    <button onClick={() => setIsOpen(!isOpen)}>On/OFF</button>
    {!!students.length ? 
    <table>
      <thead><tr><th>Name</th>
      <th>Age</th></tr></thead>
        {students?.length ? students?.map((item, i) => (
          <tr key={`students` + i}>
        <td>{item?.name || "------"} - {i}</td>
        <td>{item?.age}</td>
        </tr>
        )): <h1>no result</h1>}
    </table> : <h3>empty</h3>}
    <p>para 1</p></>)
}

export default Home;