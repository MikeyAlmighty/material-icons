import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HighDefinitionIcon = ({
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
    <path d='M5,7H7V11H9V7H11V17H9V13H7V17H5V7M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16Z' />
  </Svg>
)

HighDefinitionIcon.displayName = 'HighDefinitionIcon'

HighDefinitionIcon.defaultProps = {
  size: 24
}

export default HighDefinitionIcon