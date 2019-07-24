import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HandPointingDownIcon = ({
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
    <path d='M9.9,21V11L6.7,12.69L6.5,12.72C6.19,12.72 5.93,12.6 5.74,12.4L5,11.63L9.9,7.43C10.16,7.16 10.5,7 10.9,7H17.4C18.17,7 18.9,7.7 18.9,8.5V12.86C18.9,13.47 18.55,14 18.05,14.2L13.11,16.4L11.9,16.53V21C11.9,21.55 11.45,22 10.9,22C10.35,22 9.9,21.55 9.9,21M18.9,5H10.9V2H18.9V5Z' />
  </Svg>
)

HandPointingDownIcon.displayName = 'HandPointingDownIcon'

HandPointingDownIcon.defaultProps = {
  size: 24
}

export default HandPointingDownIcon