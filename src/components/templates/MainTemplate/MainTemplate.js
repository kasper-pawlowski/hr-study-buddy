import React from 'react';
import Navigation from 'components/oraganisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
