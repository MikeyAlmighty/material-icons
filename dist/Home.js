import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeIcon = ({
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
    <path d='M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z' />
  </Svg>
)

HomeIcon.displayName = 'HomeIcon'

HomeIcon.defaultProps = {
  size: 24
}

export default HomeIcon