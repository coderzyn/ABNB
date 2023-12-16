import styled from "styled-components";


export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};
  font-weight: 700;

  .btns {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};

    .btn {
      padding: 12px 15px;
      height: 18px;
      line-height: 18px;
      cursor: pointer;
      box-sizing: content-box;
      border-radius: 22px;

      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 4px rgba(0,0,0,.18);
      border-radius: 10px;
      font-weight: 500;
      
      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          
          &:hover {
            background-color:  #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }



`