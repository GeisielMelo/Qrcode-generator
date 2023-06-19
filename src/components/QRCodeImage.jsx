import React from 'react';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

const StyledQRCode = styled(QRCode)`
    max-width: 256px;
    max-height: 256px;
`;

const QRCodeWidget = ({ value }) => {
    return (
        <StyledQRCode value={value} />
    )
};

export default QRCodeWidget;