import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DiceD6Icon = ({
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
    <path d='M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M5,5V19H19V5H5M13.39,9.53C10.89,9.5 10.86,11.53 10.86,11.53C10.86,11.53 11.41,10.87 12.53,10.87C13.19,10.87 14.5,11.45 14.55,13.41C14.61,15.47 12.77,16 12.77,16C12.77,16 9.27,16.86 9.3,12.66C9.33,7.94 13.39,8.33 13.39,8.33V9.53M11.95,12.1C11.21,12 10.83,12.78 10.83,12.78L10.85,13.5C10.85,14.27 11.39,14.83 12,14.83C12.61,14.83 13.05,14.27 13.05,13.5C13.05,12.73 12.56,12.1 11.95,12.1Z' />
  </Svg>
)

DiceD6Icon.displayName = 'DiceD6Icon'

DiceD6Icon.defaultProps = {
  size: 24
}

export default DiceD6Icon