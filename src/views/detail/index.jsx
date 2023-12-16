import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './detail-pictures'
import DetailInfos from './detail-infos'
import { changeHeaderConfigAction } from '@/store/modules/main'
const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false, topAlpha: false}))
  }, [dispatch])
  return (
    <DetailWrapper>
      <DetailPictures/>
      {/* <DetailInfos/> */}
    </DetailWrapper>
  )
})

export default Detail 