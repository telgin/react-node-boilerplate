import React, { useEffect } from 'react';
import '../css/app-root.css';

export const AppRoot = (props) => {
    useEffect(() => {
        console.log('maybe load something');
    });

    return (
        <div id="app-root">
            {'react-node-boilerplate'}
        </div>
    );
};

