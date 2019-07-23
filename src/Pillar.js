import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PillarIcon = ({
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
    <path d='M6,5H18C18.55,5 19,5.45 19,6C19,6.55 18.55,7 18,7H6C5.45,7 5,6.55 5,6C5,5.45 5.45,5 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z' />
  </Svg>
)

PillarIcon.displayName = 'PillarIcon'

PillarIcon.defaultProps = {
  size: 24
}

export default PillarIcon