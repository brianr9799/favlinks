import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = ({linkData,removeLink}) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  
  const rows = linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>
          {row.name}
        </td>
        <td>
          <a href={row.URL}>
            {row.URL}
          </a>
        </td>
        <td>
          <button onClick={() => removeLink(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = ({linkData,removeLink}) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return <table>
            <TableHeader />
            <TableBody linkData = {linkData} removeLink = {removeLink}/>
          </table>        
  }
}

export default Table
