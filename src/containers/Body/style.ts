import styled from 'styled-components'
import banner from '../../assets/img/banner.jpg'

export const StyleBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${banner});
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  z-index: -2;
  overflow: hidden;

  &::after {
    background-color: rgba(0, 0, 0, 0.7);
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    content: '';
  }
`
