import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AzureIcon = ({
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
    <path d='M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z' />
  </Svg>
)

AzureIcon.displayName = 'AzureIcon'

AzureIcon.defaultProps = {
  size: 24
}

export default AzureIcon