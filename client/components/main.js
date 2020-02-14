import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Upload from './upload'
import Columns from './columns'
import {Grid} from '@material-ui/core'
import {columns} from '../store/data'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item sm={11}>
          {this.props.uploadedFile === null ? <Upload /> : <Columns />}
        </Grid>
      </Grid>
    )
  }
}

const mapState = state => ({
  uploadedFile: state.upload.file
})

// const mapDispatch = dispatch => ({
//   handleSubmit: file => dispatch(gotUploadFile(file))
// })

export default connect(mapState)(Main)
