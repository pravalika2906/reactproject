// Displaying the students in a table
import { useState } from "react";
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function StudentsTable({ students }) {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const studentRows = students.map((student) => (
    <Tr key={student.id}>
      <Td>{student.firstName}</Td>
      <Td>{student.lastName}</Td>
    </Tr>
  ));

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  };

  return (
    <>
      <Button
        variant={"solid"}
        colorScheme="blue"
        margin={"1rem"}
        onClick={toggleTableVisibility}
      >
        {isTableVisible ? "Hide Students" : "Show Students"}
      </Button>
      {isTableVisible && (
        <TableContainer width={"50%"}>
          <Table variant={"striped"}>
            <TableCaption>Students</TableCaption>
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
              </Tr>
            </Thead>
            <Tbody>{studentRows}</Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default StudentsTable;
