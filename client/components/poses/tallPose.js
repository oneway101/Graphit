import posed, {PoseGroup} from 'react-pose'
import React from 'react'

const Box = posed.div({
  small: {
    width: 30,
    height: 95,
    backgroundColor: ({c}) => c
  },
  big: {
    width: 30,
    height: 195,
    backgroundColor: ({c}) => c
  }
})

class Example3 extends React.Component {
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
      1750
    )
    setInterval(
      () =>
        this.setState(state => ({
          color: state.color === '#ededed' ? 'rgba(69, 103, 178, 1)' : '#ededed'
        })),
      1950
    )
  }

  render() {
    return <Box pose={this.state.size} c={this.state.color} className="box" />
  }
}

export default Example3
