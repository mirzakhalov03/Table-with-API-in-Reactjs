import './App.css'
import Card from './assets/components/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            setData(response.data)
            console.log(response.data)
          })
  }, [])

  return (
    <div className='body'>
                  <table>
                    <thead>
                        <tr style={{width: "200px"}}>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Current Company</th>
                        </tr>
                    </thead>
                  </table>
      {
            data.map(product => {
                return (
                  <>
                  
                  <Card key={product.id} name={product.name} username={product.username} email={product.email} street={product.address.street} city={product.address.city} company={product.company.name} phone={product.phone}/>
                  </>
                )
            })
        }
      
    </div>
  )
}

export default App
