import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'

interface IProps {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = ({children}) => {
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