import styled from 'styled-components';

export const Brand = styled.div`
.content{
    z-index: 999;
    width: 110px;
    height: 110px;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .icon{
    z-index: 999;
    width: 84px;
    height: 84px;
    border-radius: 50%;
    padding: 22px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .icon img{
    width: 84px;
    height: 84px;
    background: #000;
    border-radius: 100%;
  }
  .message{
    background: #000;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
    border: 5px solid #8888;
  }
  @keyframes spinning {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }
  .spin2::after{
    animation-duration: 2s!important;
    background:orange!important;
  }
  .spin3::after{
    background: purple!important;
    opacity: 0.2;
    width: 95px!important;
    height: 95px!important;
    display: flex!important;
    padding: 10px;
  }
  .spin::after,.spin2::after,.spin3::after{
    content: '';
    z-index: -1;
    width: 111px;
    background: #ff9000;
    height: 111px;
    top: 0;
    left: 0;
    border-radius: 40%;
    position: absolute;
    display: block;
    
    animation-name: spinning;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    /* linear | ease | ease-in | ease-out | ease-in-out */
    animation-timing-function: linear;
  }
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  

&::after{
    content: '';
    background:${(props) => props.theme.components.loading.bg};
    opacity: 0.9;
    width: 100%;
    height: 100%;
    position: absolute;
}
    
`;
