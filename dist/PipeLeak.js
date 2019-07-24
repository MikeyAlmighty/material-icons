import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PipeLeakIcon = ({
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
    <path d='M2,5V13H4V11H10L12,9L10,7H4V5H2M20,5V7H12L14,9L12,11H20V13H22V5H20M12,13C12,13 10,15.17 10,16.5C10,17.6 10.9,18.5 12,18.5C13.1,18.5 14,17.6 14,16.5C14,15.17 12,13 12,13Z' />
  </Svg>
)

PipeLeakIcon.displayName = 'PipeLeakIcon'

PipeLeakIcon.defaultProps = {
  size: 24
}

export default PipeLeakIcon