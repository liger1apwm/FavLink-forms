import React from 'react'
import '../styles/TableHeader.css'
import '../styles/TableBody.css'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead className='table-header'>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr className='table-body' key={index}>
        <td>{row.name}</td>
        <td>
          <a href={row.URL}>{row.URL}</a>
        </td>
        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  return(
    <table>
            <TableHeader />
            <TableBody linkData={props.linkData} removeLink={props.removeLink} />
    </table>)
  
}

export default Table
