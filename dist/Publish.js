import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PublishIcon = ({
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
    <path d='M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z' />
  </Svg>
)

PublishIcon.displayName = 'PublishIcon'

PublishIcon.defaultProps = {
  size: 24
}

export default PublishIcon