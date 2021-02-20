import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GridTable from './GridTable'
import { deleteApi } from '../Api'

class Dashboard extends Component {
  state = {
    data: [],
    loading: true,
    sortOrd: {
      id: true,
      name: true,
      phone: true,
      username: true,
      email: true,
    },
    searchColumn: 'name',
    searchValue: '',
    dataFetching: true,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.dataFetching && !props.loading && props.mockData !== null)
      return {
        ...state,
        data: props.mockData,
        loading: props.loading,
        dataFetching: false,
      }
    else
      return {
        ...state,
      }
  }

  componentDidMount() {
    //in case if ur need to call any api, you can call and set the data
    this.setState({
      data: this.props.mockData,
      loading: this.props.mockData ? false : true,
    })
  }

  handleSort = (columnKey) => {
    let updatedData = []
    const { sortOrd, data } = this.state
    if (columnKey === 'id') {
      updatedData = data.sort(function (a, b) {
        if (!sortOrd[columnKey]) {
          return b.id - a.id
        } else {
          return a.id - b.id
        }
      })
    } else {
      updatedData = data.sort((a, b) => {
        if (!sortOrd[columnKey]) {
          return b[columnKey].localeCompare(a[columnKey])
        } else {
          return a[columnKey].localeCompare(b[columnKey])
        }
      })
    }

    this.setState(
      {
        loading: true,
      },
      () => {
        this.setState({
          loading: false,
          data: updatedData,
          sortOrd: {
            ...sortOrd,
            [columnKey]: !sortOrd[columnKey],
          },
        })
      }
    )
  }

  handleDeleteRow = (id) => {
    let updatedData = []
    const { data } = this.state
    deleteApi(`/users/${id}`).then((res) => {})
    updatedData = data.filter((dt) => dt.id !== id)
    this.setState(
      {
        loading: true,
      },
      () => {
        this.setState({
          loading: false,
          data: updatedData,
        })
      }
    )
  }

  handleSearch = (e) => {
    const { searchColumn } = this.state
    const { mockData } = this.props
    this.setState({
      searchValue: e.target.value,
      data: mockData.filter((dt) =>
        dt[searchColumn].toLowerCase().includes(e.target.value.toLowerCase())
      ),
    })
  }

  handleSelect = (e) => {
    const { mockData } = this.props
    const { searchValue } = this.state
    this.setState({
      searchColumn: e.target.value,
      data: mockData.filter((dt) =>
        dt[e.target.value].toLowerCase().includes(searchValue.toLowerCase())
      ),
    })
  }

  render() {
    const { data, loading, searchValue } = this.state
    return (
      <div className='container mt-2'>
        <h1 className='display-4'>List of Users</h1>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <>
            <div className='d-flex flex-row-reverse bd-highlight mb-2 mt-2'>
              <div
                className='form-group'
                style={{ width: '14em', float: 'right' }}
              >
                <input
                  className='form-control form-control-md '
                  id='searchID'
                  type='text'
                  value={searchValue}
                  placeholder='Search'
                  onChange={this.handleSearch}
                />
              </div>
              <select
                className='form-select'
                aria-label='Default select example'
                style={{ width: '11em', float: 'right' }}
                onChange={this.handleSelect}
              >
                <option defaultValue='name'>name</option>
                <option value='phone'>Phone</option>
                <option value='username'>User name</option>
                <option value='email'>Email</option>
                <option value='website'>Website</option>
              </select>
            </div>
            <GridTable
              data={data}
              loading={loading}
              sort={this.handleSort}
              deleteRow={this.handleDeleteRow}
            />
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  mockData: state.mockData,
  loading: state.loading,
})

export default connect(mapStateToProps)(Dashboard)
