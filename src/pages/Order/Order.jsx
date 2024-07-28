import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

function Order() {
  const context = useContext(myContext)
  
  const {name,rollno} = context
  
   

  return (
    <Layout>
      Order
      <h1>
        Name: {name}
      </h1>
      <h1>
        Rollno: {rollno}
      </h1>
    </Layout>
  )
}

export default Order