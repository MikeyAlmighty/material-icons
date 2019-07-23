import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MiniSdIcon = ({
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
    <path d='M6,4C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V12L18,10V6C18,4.9 17.1,4 16,4H6M7,6H9V10H7V6M10,6H12V10H10V6M13,6H15V10H13V6Z' />
  </Svg>
)

MiniSdIcon.displayName = 'MiniSdIcon'

MiniSdIcon.defaultProps = {
  size: 24
}

export default MiniSdIcon