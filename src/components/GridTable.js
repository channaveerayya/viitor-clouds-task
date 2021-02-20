import React from 'react'
import { Link } from 'react-router-dom'
function GridTable({ data, loading, sort, deleteRow }) {
  return loading ? (
    <h2>Loading</h2>
  ) : data && data.length ? (
    <div style={{ height: '70vh', overflowY: 'auto' }}>
      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('id')}
            >
              ID &#8595;&#8593;
            </th>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('name')}
            >
              Name &#8595;&#8593;
            </th>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('phone')}
            >
              Phone &#8595;&#8593;
            </th>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('website')}
            >
              Website &#8595;&#8593;
            </th>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('email')}
            >
              Email &#8595;&#8593;
            </th>
            <th
              scope='col'
              style={{ cursor: 'pointer' }}
              onClick={(e) => sort('username')}
            >
              username &#8595;&#8593;
            </th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => (
            <tr key={dt.id}>
              <th scope='row'>{dt.id}</th>
              <td>{dt.name}</td>
              <td>{dt.phone}</td>
              <td>{dt.website}</td>
              <td>{dt.email}</td>
              <td>{dt.username}</td>
              <td>
                <button
                  onClick={() => deleteRow(dt.id)}
                  className='btn btn-danger btn-lg'
                >
                  {' '}
                  Delete
                </button>
              </td>
              <td>
                <Link
                  to={`/dashboard/${dt.id}`}
                  className='btn btn-primary btn-lg'
                >
                  {' '}
                  View Posts
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>NO Data </h1>
  )
}

export default GridTable
