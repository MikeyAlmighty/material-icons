import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TooltipAccountIcon = ({
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
    <path d='M20,2H4C2.9,2 2,2.9 2,4V16C2,17.1 2.9,18 4,18H8L12,22L16,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2M12,4.3C13.5,4.3 14.7,5.5 14.7,7C14.7,8.5 13.5,9.7 12,9.7C10.5,9.7 9.3,8.5 9.3,7C9.3,5.5 10.5,4.3 12,4.3M18,15H6V14.1C6,12.1 10,11 12,11C14,11 18,12.1 18,14.1V15Z' />
  </Svg>
)

TooltipAccountIcon.displayName = 'TooltipAccountIcon'

TooltipAccountIcon.defaultProps = {
  size: 24
}

export default TooltipAccountIcon