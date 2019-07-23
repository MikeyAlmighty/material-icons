import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailEditOutlineIcon = ({
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
    <path d='M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H11V18H4V8.37L12,13.37L20,8.37V10H22V6C22,4.9 21.1,4 20,4M12,11L4,6H20M19.07,13.88L13,19.94V22H15.06L21.12,15.93M22.7,13.58L21.42,12.3C21.32,12.19 21.18,12.13 21.04,12.13C20.89,12.14 20.75,12.19 20.65,12.3L19.65,13.3L21.7,15.3L22.7,14.3C22.89,14.1 22.89,13.78 22.7,13.58Z' />
  </Svg>
)

EmailEditOutlineIcon.displayName = 'EmailEditOutlineIcon'

EmailEditOutlineIcon.defaultProps = {
  size: 24
}

export default EmailEditOutlineIcon