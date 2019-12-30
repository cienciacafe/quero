import React from 'react'
import PropTypes from 'prop-types'

import MainContainer from '~/containers/Main'

class Home extends React.Component {
  static propTypes = {
    id: PropTypes.string
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      isLoading: false,
      things: []
    }

    this.getData = this.getData.bind(this)
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    this.setState({ isLoading: true })
    this.setState({ isLoading: false })
  }

  render () {
    return (
      <MainContainer></MainContainer>
      // <div>
      //   {this.props.id && `Requested thing id: ${this.props.id}`}
      //   <br />
      //   <span>{this.state.isLoading && 'Loading data...'}</span>
      //   <br />

      // </div>
    )
  }
}

export default Home
