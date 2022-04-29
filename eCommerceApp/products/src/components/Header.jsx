import React from 'react';
import { useHistory } from 'react-router';

function Header() {
    const history = useHistory();

    return (
        <div className="header">
            <span
                style={{ cursor: 'pointer' }}
                onClick={(e) => {
                    history.replace('/');
                }}
            >
                Shopping
            </span>
        </div>
    );
}

export default Header;
