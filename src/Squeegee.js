import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SqueegeeIcon = ({
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
    <path d='M22,2V5H2V2H22M2,8H7L9,10H10V20C10,21.1 10.9,22 12,22C13.1,22 14,21.1 14,20V10H15L17,8H22V6H2V8Z' />
  </Svg>
)

SqueegeeIcon.displayName = 'SqueegeeIcon'

SqueegeeIcon.defaultProps = {
  size: 24
}

export default SqueegeeIcon