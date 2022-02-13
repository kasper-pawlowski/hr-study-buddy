import { Input } from 'components/atoms/Input/Input';
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {
    SearchBarWrapper,
    SearchResults,
    SearchWrapper,
    StatusInfo,
} from 'components/organisms/SearchBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([]);
    const { findStudents } = useStudents();

    const getMatchingStudents = debounce(async ({ inputValue }) => {
        const { students } = await findStudents(inputValue);
        setMatchingStudents(students);
    }, 500);

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        highlightedIndex,
        getItemProps,
    } = useCombobox({
        items: matchingStudents,
        onInputValueChange: getMatchingStudents,
    });

    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>
            <SearchWrapper {...getComboboxProps()}>
                <Input {...getInputProps()} name="Search" id="Search" />
                <SearchResults {...getMenuProps()}>
                    {isOpen &&
                        matchingStudents.map((item, index) => (
                            <li {...getItemProps({ item, index })} key={item.id}>
                                {item.name}
                            </li>
                        ))}
                </SearchResults>
            </SearchWrapper>
        </SearchBarWrapper>
    );
};

//16
