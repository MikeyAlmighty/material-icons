import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TabPlusIcon = ({
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
    <path d='M3,3C1.9,3 1,3.9 1,5V19C1,20.1 1.9,21 3,21H21C22.1,21 23,20.1 23,19V5C23,3.9 22.1,3 21,3H3M3,5H13V9H21V19H3V5M10,10V13H7V15H10V18H12V15H15V13H12V10H10Z' />
  </Svg>
)

TabPlusIcon.displayName = 'TabPlusIcon'

TabPlusIcon.defaultProps = {
  size: 24
}

export default TabPlusIcon