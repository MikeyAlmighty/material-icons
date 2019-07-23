import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PageNextOutlineIcon = ({
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
    <path d='M22,3H5C3.9,3 3,3.9 3,5V9H5V5H22V19H5V15H3V19C3,20.1 3.9,21 5,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z' />
  </Svg>
)

PageNextOutlineIcon.displayName = 'PageNextOutlineIcon'

PageNextOutlineIcon.defaultProps = {
  size: 24
}

export default PageNextOutlineIcon