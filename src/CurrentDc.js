import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CurrentDcIcon = ({
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
    <path d='M2,9V11H22V9H2M2,13V15H7V13H2M9,13V15H15V13H9M17,13V15H22V13H17Z' />
  </Svg>
)

CurrentDcIcon.displayName = 'CurrentDcIcon'

CurrentDcIcon.defaultProps = {
  size: 24
}

export default CurrentDcIcon