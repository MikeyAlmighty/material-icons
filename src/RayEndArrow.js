import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RayEndArrowIcon = ({
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
    <path d='M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15C21.66,15 23,13.66 23,12C23,10.34 21.66,9 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z' />
  </Svg>
)

RayEndArrowIcon.displayName = 'RayEndArrowIcon'

RayEndArrowIcon.defaultProps = {
  size: 24
}

export default RayEndArrowIcon