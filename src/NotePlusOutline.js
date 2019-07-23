import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NotePlusOutlineIcon = ({
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
    <path d='M15,10H20.5L15,4.5V10M4,3H16L22,9V19C22,20.1 21.1,21 20,21H4C2.89,21 2,20.1 2,19V5C2,3.89 2.89,3 4,3M4,5V19H20V12H13V5H4M8,17V15H6V13H8V11H10V13H12V15H10V17H8Z' />
  </Svg>
)

NotePlusOutlineIcon.displayName = 'NotePlusOutlineIcon'

NotePlusOutlineIcon.defaultProps = {
  size: 24
}

export default NotePlusOutlineIcon