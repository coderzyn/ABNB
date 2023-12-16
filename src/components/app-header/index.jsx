import React, { memo } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual } from 'react-redux'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { useState, useRef } from 'react'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)

  const {headerConfig} = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const {isFixed, topAlpha} = headerConfig
  
  const {scrollY} = useScrollPosition(); 
  const prevY = useRef(0);
  if (!isSearch) {
    prevY.current = scrollY;
  }

  if (isSearch && Math.abs(scrollY - prevY.current)  > 30) {
    setIsSearch(false);
  }

  const isAlpha = (topAlpha && scrollY===0)

  const theme = {isAlpha: isAlpha}

  return (
    <ThemeProvider  theme={theme}>
      <HeaderWrapper  className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}>
            {/* <div className="search-area" ></div> */}
          </SearchAreaWrapper>
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}>
        </div>}

      </HeaderWrapper>
    </ThemeProvider>

  )
})

export default AppHeader