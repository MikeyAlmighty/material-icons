import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CastEducationIcon = ({
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
    <path d='M21,3H3C1.9,3 1,3.9 1,5V8H3V5H21V19H14V21H21C22.1,21 23,20.1 23,19V5C23,3.9 22.1,3 21,3M1,18V21H4C4,19.34 2.66,18 1,18M1,14V16C3.76,16 6,18.24 6,21H8C8,17.13 4.87,14 1,14M1,10V12C5.97,12 10,16.03 10,21H12C12,14.92 7.07,10 1,10M11,11.09V13.09L14.5,15L18,13.09V11.09L14.5,13L11,11.09M14.5,6L9,9L14.5,12L20,9L14.5,6Z' />
  </Svg>
)

CastEducationIcon.displayName = 'CastEducationIcon'

CastEducationIcon.defaultProps = {
  size: 24
}

export default CastEducationIcon