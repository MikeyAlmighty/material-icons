import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ChartBarIcon = ({
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
    <path d='M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z' />
  </Svg>
)

ChartBarIcon.displayName = 'ChartBarIcon'

ChartBarIcon.defaultProps = {
  size: 24
}

export default ChartBarIcon