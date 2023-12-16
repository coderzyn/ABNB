import styled from "styled-components";


export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  /* cursor: pointer; */
  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
  
  .slider {
    position: relative;
    cursor: pointer;

    &:hover {
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: none;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
      

        &.right {
          background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
        }
      }
    }
    
    .indicator {
      position: absolute;
      z-index: 9;
      bottom: 10px;
      left: 0;
      right: 0;
      width: 30%;
      margin: 0 auto;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.28%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #f5f5f5;
          border-radius: 50%;

          &.active {
            width: 10px;
            height: 10px;
            background-color: #fff;
          }
        }
      }
    }
  }
  .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.verifyColor}
    }
  .name {
    font-size: 16px;
    font-weight: 700;

  }
  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};
    .count {
      margin: 0 2px 0 4px;
    }
    .MuiRating-icon {
      margin-right: -3px;
    }
  }
  



`