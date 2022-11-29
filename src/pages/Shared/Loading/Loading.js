import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Spinner className='loader' animation="border" variant="warning" />
    );
};

export default Loading;