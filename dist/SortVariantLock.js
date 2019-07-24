import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SortVariantLockIcon = ({
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
    <path d='M3,13V11H15V13H3M3,6H21V8H3V6M3,18V16H9V18H3M22,22H14V18H15V17C15,15.34 16.34,14 18,14C19.66,14 21,15.34 21,17V18H22V22M18,16C17.45,16 17,16.45 17,17V18H19V17C19,16.45 18.55,16 18,16Z' />
  </Svg>
)

SortVariantLockIcon.displayName = 'SortVariantLockIcon'

SortVariantLockIcon.defaultProps = {
  size: 24
}

export default SortVariantLockIcon