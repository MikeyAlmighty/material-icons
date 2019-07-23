import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BottleWineIcon = ({
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
    <path d='M10,22C9.45,22 9,21.55 9,21V11C9,9 10,7.25 11,7V2.5C11,2.22 11.22,2 11.5,2H12.5C12.78,2 13,2.22 13,2.5V7C14,7.25 15,9 15,11V21C15,21.55 14.55,22 14,22H10Z' />
  </Svg>
)

BottleWineIcon.displayName = 'BottleWineIcon'

BottleWineIcon.defaultProps = {
  size: 24
}

export default BottleWineIcon