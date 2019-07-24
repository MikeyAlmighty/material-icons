import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanChildIcon = ({
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
    <path d='M12,2C13.66,2 15,3.34 15,5C15,6.66 13.66,8 12,8C10.34,8 9,6.66 9,5C9,3.34 10.34,2 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z' />
  </Svg>
)

HumanChildIcon.displayName = 'HumanChildIcon'

HumanChildIcon.defaultProps = {
  size: 24
}

export default HumanChildIcon