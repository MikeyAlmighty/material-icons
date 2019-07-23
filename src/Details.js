import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DetailsIcon = ({
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
    <path d='M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z' />
  </Svg>
)

DetailsIcon.displayName = 'DetailsIcon'

DetailsIcon.defaultProps = {
  size: 24
}

export default DetailsIcon