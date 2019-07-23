import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BowlIcon = ({
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
    <path d='M22,15C22,18.87 18.87,22 15,22H9C5.13,22 2,18.87 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z' />
  </Svg>
)

BowlIcon.displayName = 'BowlIcon'

BowlIcon.defaultProps = {
  size: 24
}

export default BowlIcon