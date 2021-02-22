import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getApi } from '../Api'
import Loading from './Loading'

function Todo({ match: { params } }) {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getApi(`/todos?userId=${params.id}`).then((res) => setTodos(res))
  }, [])

  return (
    <div className='container mt-4'>
      <Link to='/todos'> &#8592; Go to Todos</Link>
      <div className='row'>
        <div className='row'>
          {params.id && todos && todos.length ? (
            todos.map((todo) => (
              <div className='col-sm-1 col-md-4 mt-4' key={todo.id}>
                <div
                  className={`card text-white mb-3 ${
                    todo.completed ? 'bg-success' : 'bg-danger'
                  }`}
                >
                  <div className='card-header'>
                    {todo.completed ? 'Completed' : 'Not completed'}
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'>{todo.title}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              {' '}
              <h1>No Todos Yet wait a while</h1>
              <Loading />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
