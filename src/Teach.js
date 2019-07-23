import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TeachIcon = ({
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
    <path d='M20,17C21.1,17 22,16.1 22,15V4C22,2.9 21.1,2 20,2H9.46C9.81,2.61 10,3.3 10,4H20V15H11V17M15,7V9H9V22H7V16H5V22H3V14H1.5V9C1.5,7.9 2.4,7 3.5,7H15M8,4C8,5.1 7.1,6 6,6C4.9,6 4,5.1 4,4C4,2.9 4.9,2 6,2C7.1,2 8,2.9 8,4Z' />
  </Svg>
)

TeachIcon.displayName = 'TeachIcon'

TeachIcon.defaultProps = {
  size: 24
}

export default TeachIcon