import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ColorHelperIcon = ({
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
    <path d='M0,24H24V20H0V24Z' />
  </Svg>
)

ColorHelperIcon.displayName = 'ColorHelperIcon'

ColorHelperIcon.defaultProps = {
  size: 24
}

export default ColorHelperIcon