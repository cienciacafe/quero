import React from 'react'
import PropTypes from 'prop-types'


import MainContainer from '~/containers/Main'
import Video from './Video'
import PostText from './PostText'



class Things extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  constructor(props, context) {
    super(props, context)

    this.state = {
      isLoading: false,
      things: []
    }

    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    this.setState({ isLoading: true })
    this.setState({ isLoading: false })
  }

  render() {
    const projectID = this.props.match?.params?.projectID
    const postID = this.props.match?.params?.postID

    return (
      <MainContainer>
        <Video />
        <PostText>
          <PostText.Title>"Quem irá nos salvar?" | 058</PostText.Title>
          <PostText.Paragraph
            text={`
            Uma breve discussão sobre o foco na personalidade e como muitas vezes distrai da busca por construção e soluções coletivas. Tem um beirinha de uma reflexão eleitoral também no vídeo.

            (A capa do vídeo é de intuito cômico)

            Carta do Marx: <a href="#">https://marxists.catbull.com/archive/marx/works/1877/letters/77_11_10.htm</a>

            Sobre Weber e tipos de autoridade: <a href="#">https://jus.com.br/artigos/25863/os-tres-tipos-de-dominacao-legitima-de-max-weber</a>

            Obrigada à galera que apoia no <a href="#">apoia.se/teseonze</a>`}
          />
        </PostText>
        {/* testando: {projectID} {postID} */}
      </MainContainer>
    )
  }
}

export default Things
