import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeVariantIcon = ({
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
    <path d='M12,3L20,9V21H15V14H9V21H4V9L12,3Z' />
  </Svg>
)

HomeVariantIcon.displayName = 'HomeVariantIcon'

HomeVariantIcon.defaultProps = {
  size: 24
}

export default HomeVariantIcon