import React from 'react'
import PropTypes from 'prop-types'

import API from '~/modules/API'

class Things extends React.Component {
  static propTypes = {
    match: PropTypes.object
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      isLoading: false,
      things: []
    }

    console.log(this.props)
  }

  componentDidMount () {
    this.getData()
  }

  getData = async () => {
    this.setState({ isLoading: true })

    const response = await API.getThings()

    if (response.data) {
      this.setState({
        things: response.data
      })
    }

    this.setState({ isLoading: false })
  }

  render () {
    const projectID = this.props.match?.params?.projectID
    return (
      <div>
        {projectID && `Requested thing id: ${projectID}`}
        <br />
        <span>{this.state.isLoading && 'Loading data...'}</span>
        <br />
        {JSON.stringify(this.state.things)}
      </div>
    )
  }
}

export default Things
