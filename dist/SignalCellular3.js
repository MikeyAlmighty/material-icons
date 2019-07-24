import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignalCellular3Icon = ({
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
    <path d='M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z' />
  </Svg>
)

SignalCellular3Icon.displayName = 'SignalCellular3Icon'

SignalCellular3Icon.defaultProps = {
  size: 24
}

export default SignalCellular3Icon