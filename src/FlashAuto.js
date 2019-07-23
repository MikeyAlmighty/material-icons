import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlashAutoIcon = ({
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
    <path d='M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z' />
  </Svg>
)

FlashAutoIcon.displayName = 'FlashAutoIcon'

FlashAutoIcon.defaultProps = {
  size: 24
}

export default FlashAutoIcon