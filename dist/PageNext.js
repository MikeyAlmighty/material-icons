import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PageNextIcon = ({
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
    <path d='M20,3H5C3.9,3 3,3.9 3,5V11H7V9L11,12L7,15V13H3V19C3,20.1 3.9,21 5,21H20C21.1,21 22,20.1 22,19V5C22,3.9 21.1,3 20,3M17,17H13V15H17V17M20,13H13V11H20V13M20,9H13V7H20V9M3,13H0V11H3V13Z' />
  </Svg>
)

PageNextIcon.displayName = 'PageNextIcon'

PageNextIcon.defaultProps = {
  size: 24
}

export default PageNextIcon