import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PageLayoutSidebarLeftIcon = ({
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
    <path d='M6,2H18C19.1,2 20,2.9 20,4V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V4C4,2.9 4.9,2 6,2M6,8V16H10V8H6Z' />
  </Svg>
)

PageLayoutSidebarLeftIcon.displayName = 'PageLayoutSidebarLeftIcon'

PageLayoutSidebarLeftIcon.defaultProps = {
  size: 24
}

export default PageLayoutSidebarLeftIcon