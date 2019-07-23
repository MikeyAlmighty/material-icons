import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BedEmptyIcon = ({
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
    <path d='M19,7H5V14H3V5H1V20H3V17H21V20H23V11C23,8.79 21.21,7 19,7' />
  </Svg>
)

BedEmptyIcon.displayName = 'BedEmptyIcon'

BedEmptyIcon.defaultProps = {
  size: 24
}

export default BedEmptyIcon