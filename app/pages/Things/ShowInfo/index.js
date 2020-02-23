import PropTypes from 'prop-types'
import { Typography } from 'antd'
import style from './style.scss'

const { Title } = Typography

const TagList = ({ tags }) => {
  // TODO: Adicionar link para a página de pesquisa com a tag
  return (
    <ul className={style.tagList}>
      {tags.map((tagName, index) => (
        <li key={`showinfo-tag-${index}`}>
          <a href={`#${tagName}`}>
          {tagName}
          </a>
        </li>
      ))}
    </ul>
  )
}
TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

const ShowInfo = ({ name, description, avatarURL, tags }) => {
  // TODO: Adicionar link para o canal no avatar e no título
  return (
    <div className={style.container}>
      <div className={style.box}>
        <picture className={style.avatar}>
          <img src={avatarURL} alt={`logo ${name}`} title={`logo ${name}`} />
        </picture>
        <div className={style.info}>
          <Title className={style.name}>
            {name}
          </Title>
          <Typography className={style.description}>
          {description}
          </Typography>
          <TagList tags={tags} />
        </div>
      </div>

    </div>
  )
}
ShowInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  avatarURL: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default ShowInfo
