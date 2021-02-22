import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getApi, deleteApi } from '../Api'
class Todos extends Component {
  state = {
    todos: [],
    loading: true,
  }
  componentDidMount() {
    getApi('/todos').then((res) => {
      let todos = res.reduce(function (res, item) {
        ;(res[item['userId']] = res[item['userId']] || []).push(item)
        return res
      }, {})
      this.setState({ todos: Object.values(todos), loading: false })
    })
  }
  deleteRow = (id) => {
    const { todos } = this.state
    deleteApi(`/todos/${id}`).then((res) => {})
    this.setState({ todos: todos.filter((todo) => todo[0].userId !== id) })
  }
  render() {
    const { todos, loading } = this.state
    return (
      <div className='container mt-2'>
        <h1 className='display-4'>List of Todos </h1>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div className='gridTable'>
            <table className='table table-dark table-striped'>
              <thead>
                <tr>
                  <th scope='col' style={{ cursor: 'pointer' }}>
                    SL
                  </th>
                  <th scope='col' style={{ cursor: 'pointer' }}>
                    Todos Count
                  </th>
                  <th scope='col' style={{ cursor: 'pointer' }}>
                    User ID
                  </th>

                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todoArr, i) => (
                  <tr key={i}>
                    <th scope='row'>{i + 1}</th>
                    <td>{todoArr.length}</td>
                    <td>{todoArr[0].userId}</td>

                    <td>
                      <button
                        onClick={() => this.deleteRow(todoArr[0].userId)}
                        className='btn btn-danger btn-lg'
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/todos/${todoArr[0].userId}`}
                        className='btn btn-primary btn-lg'
                      >
                        View Todo
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='row cards'>
              {todos.map((todoArr, i) => (
                <div className='col-sm-1 col-md-4 mt-1 center' key={i}>
                  <div className='card'>
                    <div className='card-body'>
                      <h5 className='card-title'>
                        User ID {todoArr[0].userId}
                      </h5>
                      <h6 className='card-subtitle mb-2 text-muted'>
                        No OF Todos {todoArr.length}
                      </h6>

                      <a
                        className='card-link text-danger'
                        onClick={() => this.deleteRow(todoArr[0].userId)}
                      >
                        Delete
                      </a>
                      <Link
                        className='card-link'
                        to={`/todos/${todoArr[0].userId}`}
                      >
                        View Todo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Todos
