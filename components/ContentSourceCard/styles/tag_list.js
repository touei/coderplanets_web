import styled from 'styled-components'

import { theme, cs } from '../../../utils'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-left: 2px;
`
export const TagDot = styled.div`
  ${cs.circle('10px')};
  background: tomato;
  margin-right: 5px;
`
export const TagTitle = styled.div`
  margin-top: -5px;
`
export const NomoreDesc = styled.div`
  color: ${theme('banner.desc')};
  font-style: italic;
`
