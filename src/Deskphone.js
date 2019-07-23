import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeskphoneIcon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M15,5V19H19V5H15M5,5V9H13V5H5M5,11V13H7V11H5M8,11V13H10V11H8M11,11V13H13V11H11M5,14V16H7V14H5M8,14V16H10V14H8M11,14V16H13V14H11M11,17V19H13V17H11M8,17V19H10V17H8M5,17V19H7V17H5Z' />
  </Svg>
)

DeskphoneIcon.displayName = 'DeskphoneIcon'

DeskphoneIcon.defaultProps = {
  size: 24
}

export default DeskphoneIcon