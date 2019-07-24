import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HumanMaleHeightVariantIcon = ({
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
    <path d='M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4C5,2.9 5.9,2 7,2M5.5,7H8.5C9.6,7 10.5,7.9 10.5,9V14.5H9V22H5V14.5H3.5V9C3.5,7.9 4.4,7 5.5,7M19,8H21L18,4L15,8H17V16H15L18,20L21,16H19M22,2H14V4H22M22,20H14V22H22' />
  </Svg>
)

HumanMaleHeightVariantIcon.displayName = 'HumanMaleHeightVariantIcon'

HumanMaleHeightVariantIcon.defaultProps = {
  size: 24
}

export default HumanMaleHeightVariantIcon