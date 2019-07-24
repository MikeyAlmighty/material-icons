import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LedVariantOutlineIcon = ({
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
    <path d='M12,3C9.79,3 8,4.79 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7C16,4.79 14.21,3 12,3M12,5C13.1,5 14,5.9 14,7V12H10V7C10,5.9 10.9,5 12,5Z' />
  </Svg>
)

LedVariantOutlineIcon.displayName = 'LedVariantOutlineIcon'

LedVariantOutlineIcon.defaultProps = {
  size: 24
}

export default LedVariantOutlineIcon