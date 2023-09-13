// This is the form component to display the users/students
import { Heading, Button, Input, Flex } from "@chakra-ui/react";
import { useState } from "react";

function Form({onAddStudent}){
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')

    // Functions to handle changes in Names
    function handleFNameChange(e){
        setFName(e.target.value)
    }

    function handleLNameChange(e){
        setLName(e.target.value)
    }

    function handleStudentSubmit(e){
        e.preventDefault();
        let newStudentObj = {
            firstName: fName,
            lastName: lName,
        }

        fetch('http://localhost:8000/students', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newStudentObj)
        })
        .then(r=>r.json())
        .then(data => onAddStudent(data))
        .catch(e=>console.log(e))

        alert(
            "Student Added Successfully!"
        )
    }
    return(
        <form onSubmit={handleStudentSubmit}>
            <Flex flexDirection={'column'} width={'50vh'} justifyContent={'center'} alignItems={'center'}>
                <Heading size={'xl'}>Add A Student</Heading>
                <Input variant={'filled'} placeholder="Enter First Name" margin={'2'} onChange={handleFNameChange} required/>
                <Input variant={'filled'} placeholder="Enter Last Name" margin={'2'} onChange={handleLNameChange} required />
                <Button colorScheme="blue" variant={'outline'} type="submit" margin={'2'} width={'40%'} cursor={'pointer'}>Add Student</Button>

            </Flex>
        </form>
    )
}

export default Form;