import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ altMsg, altType }) =>
  altMsg ? (
    <div
      className={`position-absolute top-0 start-50 translate-middle-x text-white  bg-${altType} mb-3`}
    >
      <div className='card-header'>Alert</div>
      <div className='card-body'>
        <h5 className='card-title'>{altMsg}</h5>
      </div>
    </div>
  ) : null

Alert.propTypes = {}
const mapStateToProps = (state) => ({
  altMsg: state.altMsg,
  altType: state.altType,
  altId: state.altId,
})

export default connect(mapStateToProps)(Alert)
