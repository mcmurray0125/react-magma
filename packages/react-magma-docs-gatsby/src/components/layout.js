import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageTransition from 'gatsby-plugin-page-transitions'
import { StaticQuery, graphql } from 'gatsby'
import MainNav from './main-nav'
import styled, { injectGlobal } from 'styled-components'
import { MDXProvider } from '@mdx-js/tag'
import { Button, Heading, Icon, ICONS, Input, magma } from 'react-magma-dom'
import { IconContainer } from './iconContainer'
import { IconListContainer } from './iconListContainer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { convertTextToId } from '../utils'

import Header from './header'

import './app.css'
import './layout.css'
import './syntax.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://use.typekit.net/rwr6vzk.css');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  & body {
    color: ${magma.primary01};
  	font-family: ${magma.bodyFont};
  	font-style: normal;
  	font-weight: 400;
  	font-size: 15px;
  	line-height: 22px;
  }

  a {
    color: ${magma.primary02};
    cursor: pointer;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${magma.secondary01};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${magma.primary02};
    font-family: ${magma.headingFont};
    font-weight: 500;
    line-height: 1.1;
    margin: 20px 0 10px;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 23px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 18px;
  }
`

const Content = styled.article`
  grid-area: content;

  h1 {
    margin-top: 0;
  }
`

const Main = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'nav header'
    'nav content';
`

const PreContainer = styled.div`
  display: grid;
  max-width: 100%;
  overflow: scroll;
`

const PreComponent = ({ className, ...props }) =>
  props.children.props.props &&
  props.children.props.props.className === 'language-.jsx' ? (
    <LiveProvider
      mountStylesheet={false}
      code={props.children.props.children}
      scope={{
        Button,
        Heading,
        Icon,
        ICONS,
        IconContainer,
        IconListContainer,
        Input,
      }}
    >
      <PreContainer>
        <LiveEditor tabIndex="-1" />
      </PreContainer>
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <pre {...props} />
  )

const Table = props => <table {...props} />

const SectionHeading = props => (
  <h2 id={convertTextToId(props.children)}>{props.children}</h2>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Main>
          <MainNav />
          <Header siteTitle={data.site.siteMetadata.title} />
          <PageTransition>
            <Content>
              <MDXProvider
                components={{
                  pre: PreComponent,
                  table: Table,
                  h2: SectionHeading,
                }}
              >
                {children}
              </MDXProvider>
            </Content>
          </PageTransition>
        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout