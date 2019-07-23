import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric5CircleIcon = ({
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
    <path d='M9,7V13H13V15H9V17H13C14.1,17 15,16.1 15,15V13C15,11.9 14.1,11 13,11H11V9H15V7H9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

Numeric5CircleIcon.displayName = 'Numeric5CircleIcon'

Numeric5CircleIcon.defaultProps = {
  size: 24
}

export default Numeric5CircleIcon