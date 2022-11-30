import { useState } from "react";
import Home from "../components/Home";

function HomeContainer() {
  const [title, setTitle] = useState("Dynamic title");
  const [ isOpen, setIsOpen] = useState(false);
  const [ students, setStudents] = useState([
  ])

  
  const onHandleInputChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  }
 return <Home title={title} onHandleInputChange={onHandleInputChange} students={students} isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default HomeContainer;