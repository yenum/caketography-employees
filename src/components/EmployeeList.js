
import './EmployeeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import TrashCan from '../assets/delete.svg'
import { projectFirestore } from '../firebase/config'


const EmployeeList = ({ employees }) => {

  const { mode } = useTheme()

  if (employees.length === 0) {
    return <div className='error'>No employees found</div>
  }

   const handleClick =(id) => {
      projectFirestore.collection('Employees').doc(id).delete()
    }

    
  return (
    <div className='employee-list'>
        {employees.map(employee => (
            <div key={employee.id} className={`card ${mode}`}>
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
                <Link to={`employees/${employee.id}`}> Get Details</Link>
                <img
                className='delete'
                src={TrashCan}
                onClick={() => handleClick(employee.id)}/>
            </div>   
      ))}
        
        
    </div>
  )
}

export default EmployeeList