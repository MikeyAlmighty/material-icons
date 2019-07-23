import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DiameterIcon = ({
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
    <path d='M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M17,15V13H7V15L4,12L7,9V11H17V9L20,12L17,15Z' />
  </Svg>
)

DiameterIcon.displayName = 'DiameterIcon'

DiameterIcon.defaultProps = {
  size: 24
}

export default DiameterIcon