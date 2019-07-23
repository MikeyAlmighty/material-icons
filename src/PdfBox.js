import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PdfBoxIcon = ({
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
    <path d='M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18C20,19.1 19.1,20 18,20H6C4.9,20 4,19.1 4,18V6C4,4.9 4.9,4 6,4H18C19.1,4 20,4.9 20,6M9.5,10.5C9.5,9.67 8.83,9 8,9H5.5V15H7V13H8C8.83,13 9.5,12.33 9.5,11.5V10.5M14.5,10.5C14.5,9.67 13.83,9 13,9H10.5V15H13C13.83,15 14.5,14.33 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z' />
  </Svg>
)

PdfBoxIcon.displayName = 'PdfBoxIcon'

PdfBoxIcon.defaultProps = {
  size: 24
}

export default PdfBoxIcon