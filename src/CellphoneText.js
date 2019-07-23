import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneTextIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M17,19V5H7V19H17M17,1C18.1,1 19,1.9 19,3V21C19,22.1 18.1,23 17,23H7C5.89,23 5,22.1 5,21V3C5,1.89 5.89,1 7,1H17M9,7H15V9H9V7M9,11H13V13H9V11Z' />
  </Svg>
)

CellphoneTextIcon.displayName = 'CellphoneTextIcon'

CellphoneTextIcon.defaultProps = {
  size: 24
}

export default CellphoneTextIcon