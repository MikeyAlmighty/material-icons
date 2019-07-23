import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ShieldKeyIcon = ({
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
    <path d='M12,8C12.55,8 13,8.45 13,9C13,9.55 12.55,10 12,10C11.45,10 11,9.55 11,9C11,8.45 11.45,8 12,8M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,6C10.34,6 9,7.34 9,9C9,10.31 9.83,11.42 11,11.83V18H13V16H15V14H13V11.83C14.17,11.42 15,10.31 15,9C15,7.34 13.66,6 12,6Z' />
  </Svg>
)

ShieldKeyIcon.displayName = 'ShieldKeyIcon'

ShieldKeyIcon.defaultProps = {
  size: 24
}

export default ShieldKeyIcon