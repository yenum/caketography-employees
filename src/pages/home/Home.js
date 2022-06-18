import EmployeeList from "../../components/EmployeeList"
import { projectFirestore } from "../../firebase/config"
import { useEffect, useState } from "react"

import './Home.css'

const Home = () => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    const unsub = projectFirestore.collection('Employees').onSnapshot(snapshot => {
      if (snapshot.empty) {
        setError('No employee info to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        setIsPending(false)
      }
    }, err => {
      setError(err.message)
      setIsPending(false)
    })

     return () => unsub()
  }, [])
  
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <EmployeeList employees={data}/>}
    </div>
  )
}

export default Home