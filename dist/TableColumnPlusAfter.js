import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableColumnPlusAfterIcon = ({
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
    <path d='M11,2C12.1,2 13,2.9 13,4V20C13,21.1 12.1,22 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z' />
  </Svg>
)

TableColumnPlusAfterIcon.displayName = 'TableColumnPlusAfterIcon'

TableColumnPlusAfterIcon.defaultProps = {
  size: 24
}

export default TableColumnPlusAfterIcon