import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
function GridTable({ data, loading, sort, deleteRow }) {
  return loading ? (
    <Loading />
  ) : data && data.length ? (
    <div className='gridTable'>
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
      <div className='row cards'>
        {data.map((dt) => (
          <div className='col-sm-1 col-md-4 mt-1 ' key={dt.id}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{dt.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{dt.phone}</h6>
                <h6 className='card-subtitle mb-2 text-muted'>{dt.email}</h6>
                <p className='card-text'>{dt.website}</p>
                <a
                  className='card-link text-danger'
                  onClick={() => deleteRow(dt.id)}
                >
                  Delete
                </a>
                <Link className='card-link' to={`/dashboard/${dt.id}`}>
                  View Posts
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>NO Data </h1>
  )
}

export default GridTable
