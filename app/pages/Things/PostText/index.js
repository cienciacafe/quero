import PropTypes from 'prop-types'
import { Typography } from 'antd'
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

const PostText = ({ children }) => {
  return (
    <div className={style.container}>
      <Typography className={style.postText}>
      {children}
      </Typography>
    </div>
  )
}
PostText.propTypes = {
  children: PropTypes.any
}

const TextTitle = ({ children }) => {
  return (
    <Title className={style.title}>
      {children}
    </Title>
  )
}
TextTitle.propTypes = {
  children: PropTypes.any
}

PostText.Paragraph = TextParagraph
PostText.Title = TextTitle
PostText.Text = Text

export default PostText
