import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FastForward10Icon = ({
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
    <path d='M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14C12.9,22 12,21.1 12,20V14C12,12.9 12.9,12 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14M11.5,3C14.15,3 16.55,4 18.4,5.6L21,3V10H14L16.62,7.38C15.23,6.22 13.46,5.5 11.5,5.5C7.96,5.5 4.95,7.81 3.9,11L1.53,10.22C2.92,6.03 6.85,3 11.5,3Z' />
  </Svg>
)

FastForward10Icon.displayName = 'FastForward10Icon'

FastForward10Icon.defaultProps = {
  size: 24
}

export default FastForward10Icon