import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
    <div className="loader_div">
            <Spinner className='loader' animation="border" variant="warning" />
    </div>
    );
};

export default Loading;