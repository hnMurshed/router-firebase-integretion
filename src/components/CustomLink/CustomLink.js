import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link to={to} style={{borderBottom: match && '2px solid white'}}>
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;