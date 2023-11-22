import React from 'react'
import OneReport from './oneReport.jsx'

const AllReportes = ({ reportss, setView, setSelected }) => {
  return (
    <div className='reports'>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Reporter id</th>
            <th scope="col">Reported id</th>
            <th scope="col">date</th>
          </tr>
        </thead>
        <tbody>
          {reportss.map((oneReport) => {
            return <OneReport oneReport={oneReport} setView={setView} setSelected={setSelected} />

          })
          }

        </tbody>
      </table>
    </div>
  )
}

export default AllReportes