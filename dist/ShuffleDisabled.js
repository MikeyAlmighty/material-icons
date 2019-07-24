import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShuffleDisabledIcon = ({
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
    <path d='M16,4.5V7H5V9H16V11.5L19.5,8M16,12.5V15H5V17H16V19.5L19.5,16' />
  </Svg>
)

ShuffleDisabledIcon.displayName = 'ShuffleDisabledIcon'

ShuffleDisabledIcon.defaultProps = {
  size: 24
}

export default ShuffleDisabledIcon