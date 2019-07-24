import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EjectIcon = ({
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
    <path d='M12,5L5.33,15H18.67M5,17H19V19H5V17Z' />
  </Svg>
)

EjectIcon.displayName = 'EjectIcon'

EjectIcon.defaultProps = {
  size: 24
}

export default EjectIcon