import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card'

export const BookDetails = () => {
    const navigate = useNavigate();
  return (
      <div className='container md-4'>
      <Card>

    <div>BookDetails</div>
      </Card>
      <button onClick={
        () => {navigate("/books")}
      }>Go Back</button>
      </div>
      
  )
}
