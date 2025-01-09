import { ReactNode } from 'react'
import { Layout } from '../antd'

const { Header, Footer, Sider, Content } = Layout

interface Props {
  outlet: ReactNode
  header: ReactNode
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
}

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  height: '100vh',
}
export const BaseLayout = ({ outlet, header }: Props) => {
  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>{header}</Header>
        <Content style={contentStyle}>{outlet}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  )
}
