import React from 'react';
import Navigation from 'components/oraganisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import SearchBar from 'components/oraganisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            <SearchBar />
            <NewsSection />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
