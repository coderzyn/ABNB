import React, { memo, useEffect, useRef, useState} from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
  //定义内部的状态
  const [ showLeft, setShowLeft] = useState(false);
  const [ showRight, setShowRight] = useState(false);
  const [ posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();
  //组件渲染完毕，判断是否显示右侧按钮
  useEffect(() => {
    const scrollWidth =  scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth =  scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0)
  }, [])


  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRight(totalDistanceRef.current > newElOffsetLeft);
    setShowLeft(newElOffsetLeft > 0);  
    
  }
  return (
    <ViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      )}
      { showRight && (
        <div className="control right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

export default ScrollView