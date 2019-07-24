import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CallMissedIcon = ({
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
    <path d='M19.59,7L12,14.59L6.41,9H11V7H3V15H5V10.41L12,17.41L21,8.41' />
  </Svg>
)

CallMissedIcon.displayName = 'CallMissedIcon'

CallMissedIcon.defaultProps = {
  size: 24
}

export default CallMissedIcon