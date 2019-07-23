import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeMinusIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M16,13V15H8V13H16Z' />
  </Svg>
)

HomeMinusIcon.displayName = 'HomeMinusIcon'

HomeMinusIcon.defaultProps = {
  size: 24
}

export default HomeMinusIcon