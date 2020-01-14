import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider } from 'antd'

import MainContainer from '~/containers/Main'
import Video from './Video'
import style from './style.scss'

const { Title, Paragraph, Text } = Typography

const TextParagraph = props => {
  return (
    <Paragraph className={style.paragraph}>
      <div
        dangerouslySetInnerHTML={{
          __html: props.text.replace(/\n/gm, '<br />')
        }}
      />
    </Paragraph>
  )
}
TextParagraph.propTypes = {
  text: PropTypes.string
}

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
    console.log(style)
    return (
      <MainContainer>
        <Video />
        <Typography className={style.postText}>
          <Title>"Quem irá nos salvar?" | 058</Title>
          <TextParagraph
            text={`
            Uma breve discussão sobre o foco na personalidade e como muitas vezes distrai da busca por construção e soluções coletivas. Tem um beirinha de uma reflexão eleitoral também no vídeo.

            (A capa do vídeo é de intuito cômico)

            Carta do Marx: <a href="#">https://marxists.catbull.com/archive/marx/works/1877/letters/77_11_10.htm</a>

            Sobre Weber e tipos de autoridade: <a href="#">https://jus.com.br/artigos/25863/os-tres-tipos-de-dominacao-legitima-de-max-weber</a>

            Obrigada à galera que apoia no <a href="#">apoia.se/teseonze</a>`}
          />
        </Typography>
        {/* testando: {projectID} {postID} */}
      </MainContainer>
      // <div>
      // {this.props.id && `Requested thing id: ${this.props.id}`}
      //   <br />
      //   <span>{this.state.isLoading && 'Loading data...'}</span>
      //   <br />

      // </div>
    )
  }
}

export default Things
