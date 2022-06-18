import './Create.css'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

const Create = () => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [department, setDepartment] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [employeeInsuranceNumber, setEmployeeInsuranceNumber] = useState("")
  const [notes, setNotes] = useState("")

  const history = useHistory()

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = {name, position, department, emailAddress, employeeInsuranceNumber, notes}

    try {
      await projectFirestore.collection('Employees').add(doc)
      history.push('/')
    } catch(err) {
      console.log(err)
    }
  }

  
  return (
    <div className='create'>
      <h3 className='page-title'>Add New Employee</h3>

      <form onSubmit={handleSubmit}>

        <label>
          <span> Employee Name:</span>
          <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required/>
        </label>

        <label>
          <span> Employee Position:</span>
          <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required/>
        </label>

        <label>
          <span> Employee Department:</span>
          <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required/>
        </label>

        <label>
          <span> Employee Email Address:</span>
          <input
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required/>
        </label>

        <label>
          <span> Employee Insurance Number:</span>
          <input
          type="text"
          value={employeeInsuranceNumber}
          onChange={(e) => setEmployeeInsuranceNumber(e.target.value)}
          required/>
        </label>

        <label>
          <span> Employee Notes:</span>
          <textarea
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required/>
         
        </label>

        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Create