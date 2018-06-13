import styled from 'styled-components'

import { Img } from '../../../components'
import { theme, Animate } from '../../../utils'

// display: ${props => (props.show ? 'block' : 'none')};
export const Mask = styled.div`
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: ${props => (props.show ? 'block' : 'none')};
`

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: 15%;
  width: ${props => props.width};
  min-height: 320px;
  max-height: 80vh;
  box-shadow: -5px 6px 37px -8px rgba(0, 0, 0, 0.42);
  border: 1px solid;
  border-top: 3px solid;
  border-color: #51abb2;
  animation: ${Animate.zoomeIn} 0.5s linear;
`

export const CloseBtn = styled(Img)`
  fill: ${theme('font')};
  position: absolute;
  width: 30px;
  height: 30px;
  right: 15px;
  top: 15px;
  display: ${props => (props.show ? 'block' : 'none')};

  &:hover {
    animation: ${Animate.rotate360} 2s cubic-bezier(0, 0.56, 0.24, 0.72);
    font-weight: bold;
    cursor: pointer;
  }
`

/* display: ${props => (props.show ? 'block' : 'none')}; */
/* opacity: ${props => (props.show ? 1 : 0)}; */
/* transition: opacity 1s ease-out; */

// animation: ${Animate.zoomeIn} 0.5s linear;