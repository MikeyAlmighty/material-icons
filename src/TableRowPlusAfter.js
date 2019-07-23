import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TableRowPlusAfterIcon = ({
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
    <path d='M22,10C22,11.1 21.1,12 20,12H4C2.9,12 2,11.1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z' />
  </Svg>
)

TableRowPlusAfterIcon.displayName = 'TableRowPlusAfterIcon'

TableRowPlusAfterIcon.defaultProps = {
  size: 24
}

export default TableRowPlusAfterIcon