import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DotNetIcon = ({
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
    <path d='M2,15C2.55,15 3,15.45 3,16C3,16.55 2.55,17 2,17C1.45,17 1,16.55 1,16C1,15.45 1.45,15 2,15M21,17H19V9H17V7H23V9H21V17M16,7V9H14V11H16V13H14V15H16V17H12V7H16M11,7V17H9L6,11V17H4V7H6L9,13V7H11Z' />
  </Svg>
)

DotNetIcon.displayName = 'DotNetIcon'

DotNetIcon.defaultProps = {
  size: 24
}

export default DotNetIcon