import './Employee.css'

import {useParams} from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'



 
const Employee = () => {
  const { id } = useParams()
  const { mode } = useTheme()

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [employee, setEmployee] = useState(null)
  
  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('Employees').doc(id).get().then(doc => {
      if (doc.exists) {
        setIsPending(false)
        setEmployee(doc.data())
      } else {
        setIsPending(false)
        setError(`Could not find that employee`)
      }
    })

  }, [id])

  return (
    <div className={`employee ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading</p>}
      {employee && (
        <>
        <h2 className='page-title'>{employee.name}</h2>
        <p>{employee.position}</p>
        <p>{employee.department}</p>
        <p>{employee.emailAddress}</p>
        <p>{employee.employeeInsuranceNumber}</p>
        <p className='notes'>{employee.notes}</p>
        </>
      )}
    </div>
  )
}

export default Employee