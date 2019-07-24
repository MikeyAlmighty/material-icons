import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Cpu32BitIcon = ({
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
    <path d='M9,3V5H7C5.9,5 5,5.9 5,7V9H3V11H5V13H3V15H5V17C5,18.1 5.9,19 7,19H9V21H11V19H13V21H15V19H17C18.1,19 19,18.1 19,17V15H21V13H19V11H21V9H19V7C19,5.9 18.1,5 17,5H15V3H13V5H11V3M7,9H10.5C11.05,9 11.5,9.45 11.5,10V14C11.5,14.55 11.05,15 10.5,15H7V13.5H10V12.75H8.5V11.25H10V10.5H7M12.5,9H16C16.55,9 17,9.45 17,10V11.75C17,12.3 16.55,12.75 16,12.75H14V13.5H17V15H12.5V12.25C12.5,11.7 12.95,11.25 13.5,11.25H15.5V10.5H12.5' />
  </Svg>
)

Cpu32BitIcon.displayName = 'Cpu32BitIcon'

Cpu32BitIcon.defaultProps = {
  size: 24
}

export default Cpu32BitIcon