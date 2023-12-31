import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionHeader = memo((props) => {
  const {title, subtitle} = props

  return (
    <HeaderWrapper>
      <div className="head">
        <h2 className='title'>{title}</h2>
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader