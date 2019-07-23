import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SubdirectoryArrowRightIcon = ({
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
    <path d='M19,15L13,21L11.58,19.58L15.17,16H4V4H6V14H15.17L11.58,10.42L13,9L19,15Z' />
  </Svg>
)

SubdirectoryArrowRightIcon.displayName = 'SubdirectoryArrowRightIcon'

SubdirectoryArrowRightIcon.defaultProps = {
  size: 24
}

export default SubdirectoryArrowRightIcon