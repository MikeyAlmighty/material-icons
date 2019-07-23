import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DeltaIcon = ({
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
    <path d='M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22' />
  </Svg>
)

DeltaIcon.displayName = 'DeltaIcon'

DeltaIcon.defaultProps = {
  size: 24
}

export default DeltaIcon