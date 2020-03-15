import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Grid} from '@material-ui/core'

const Navbar = ({handleClick, isLoggedIn}) => (
  <Grid
    id="navbar"
    container
    justify="flex-end"
    alignItems="center"
    spacing={2}
  >
    <Grid item>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <Fragment>
          <Link to="/profile">My Charts</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </Fragment>
      ) : (
        <Fragment>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </Fragment>
      )}
    </Grid>
  </Grid>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
