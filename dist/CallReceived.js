import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CallReceivedIcon = ({
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
    <path d='M20,5.41L18.59,4L7,15.59V9H5V19H15V17H8.41' />
  </Svg>
)

CallReceivedIcon.displayName = 'CallReceivedIcon'

CallReceivedIcon.defaultProps = {
  size: 24
}

export default CallReceivedIcon