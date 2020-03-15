import posed, {PoseGroup} from 'react-pose'
import React from 'react'

const Box = posed.div({
  small: {
    width: 30,
    height: 85,
    backgroundColor: ({c}) => c
  },
  big: {
    width: 30,
    height: 150,
    backgroundColor: ({c}) => c
  }
})

class Example6 extends React.Component {
  state = {
    size: 'big',
    color: 'rgba(69, 103, 178, 1)'
  }

  componentDidMount() {
    setInterval(
      () =>
        this.setState(state => ({
          size: state.size === 'small' ? 'big' : 'small'
        })),
      1700
    )
    setInterval(
      () =>
        this.setState(state => ({
          color:
            state.color === 'rgba(69, 103, 178, 1)'
              ? '#ededed'
              : 'rgba(69, 103, 178, 1)'
        })),
      1200
    )
  }

  render() {
    return <Box pose={this.state.size} c={this.state.color} className="box" />
  }
}

export default Example6
