import React from 'react';

function Shared({message}) {
    console.log("==> ", message)
    return <div>{message}</div>;
}

export default Shared;
