import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeVariantOutlineIcon = ({
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
    <path d='M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z' />
  </Svg>
)

HomeVariantOutlineIcon.displayName = 'HomeVariantOutlineIcon'

HomeVariantOutlineIcon.defaultProps = {
  size: 24
}

export default HomeVariantOutlineIcon