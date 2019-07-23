import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MicroSdIcon = ({
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
    <path d='M8,2C6.9,2 6,2.9 6,4V11L4,13V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2H8M9,4H11V8H9V4M12,4H14V8H12V4M15,4H17V8H15V4Z' />
  </Svg>
)

MicroSdIcon.displayName = 'MicroSdIcon'

MicroSdIcon.defaultProps = {
  size: 24
}

export default MicroSdIcon