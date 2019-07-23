import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Rewind10Icon = ({
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
    <path d='M12.5,3C17.15,3 21.08,6.03 22.47,10.22L20.1,11C19.05,7.81 16.04,5.5 12.5,5.5C10.54,5.5 8.77,6.22 7.38,7.38L10,10H3V3L5.6,5.6C7.45,4 9.85,3 12.5,3M10,12V22H8V14H6V12H10M18,14V20C18,21.11 17.11,22 16,22H14C12.9,22 12,21.1 12,20V14C12,12.9 12.9,12 14,12H16C17.11,12 18,12.9 18,14M14,14V20H16V14H14Z' />
  </Svg>
)

Rewind10Icon.displayName = 'Rewind10Icon'

Rewind10Icon.defaultProps = {
  size: 24
}

export default Rewind10Icon