import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
    
    return (
        <div className='bg-red-600 text-center text-3xl p-4 rounded-4xl ml-6 mr-6 '>User :{id} </div>
 
    )
}

export default User
