import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'

const Layout = ({children}) => {
  return (
    <>
        <GlobalStyle />
        <div>
            layout
            {children}
        </div>
    </>
  )
}

export default Layout