import React from 'react'
import GlobalStyle from '@styles/GlobalStyle'

interface Props {
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
        <GlobalStyle />
        <div>
            {children}
        </div>
    </>
  )
}

export default Layout