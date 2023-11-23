import React from 'react'

const OneReport = ({oneReport,setSelected,setView}) => {
    const dateObject = new Date(oneReport.createdAt.toDate());
     const fromated   = dateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
      
    return (
        <tr onClick={()=>{setSelected(oneReport);setView("details")}}>
            <th >{oneReport.id}</th>
            <td >{oneReport.reporter}</td>
            <td>{oneReport.reported}</td>
            <td>{fromated}</td>
        </tr>
    )
}

export default OneReport