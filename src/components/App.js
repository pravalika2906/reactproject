import { useEffect, useState } from 'react';
import Form from './Form';
import Table from './Table';
import { ChakraProvider, Flex } from '@chakra-ui/react';

function App() {
  // Fetching the students
  const [students, setStudents] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/students')
    .then(r=>r.json())
    .then(data => setStudents(data))
    .catch(e=>console.log(e))
  }, [])

  function handleAddStudent(studentObj){
    setStudents([...students, studentObj])
  }


  return (
    <ChakraProvider>
      <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Form onAddStudent={handleAddStudent} />
        <Table students={students} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
