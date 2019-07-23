import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CellphoneIcon = ({
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
    <path d='M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.89 18.1,1 17,1Z' />
  </Svg>
)

CellphoneIcon.displayName = 'CellphoneIcon'

CellphoneIcon.defaultProps = {
  size: 24
}

export default CellphoneIcon