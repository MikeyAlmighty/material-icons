import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanIcon = ({
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
    <path d='M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z' />
  </Svg>
)

HumanIcon.displayName = 'HumanIcon'

HumanIcon.defaultProps = {
  size: 24
}

export default HumanIcon