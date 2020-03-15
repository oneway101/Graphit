import posed, {PoseGroup} from 'react-pose'
import React from 'react'

const Box = posed.div({
  small: {
    width: 30,
    height: 40,
    backgroundColor: ({c}) => c
  },
  big: {
    width: 30,
    height: 145,
    backgroundColor: ({c}) => c
  }
})

class Example extends React.Component {
  state = {
    size: 'big',
    color: '#ededed'
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState(state => ({
          size: state.size === 'small' ? 'big' : 'small'
        })),
      1200
    )
    setInterval(
      () =>
        this.setState(state => ({
          color:
            state.color === '#ededed' ? 'rgba(138, 185, 255, 1)' : '#ededed'
        })),
      2320
    )
  }

  render() {
    return <Box pose={this.state.size} c={this.state.color} className="box" />
  }
}

export default Example
