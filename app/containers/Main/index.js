import React from 'react'
import PropTypes from 'prop-types'

import { Layout, Menu, Icon, Result, Button } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Footer, Sider } = Layout


import style from './style.scss'
import MiniLogo from 'assets/img/mini-logo.svg'

class Things extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.any
  };

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {}

  render() {
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <span className={style.logo}>
          <Icon component={MiniLogo} title="Ciência Café" />
          </span>
        </Header>
        <main className={style.content}>
        {this.props.children}
        </main>
        <Footer className={style.footer}>
          criado por <a href="https://twitter.com/gnuns" target="_blank" rel="noopener noreferrer">@gnuns</a>
        </Footer>
      </Layout>
    )
  }
}

export default Things
