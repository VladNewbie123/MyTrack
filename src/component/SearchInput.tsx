import React, {useState, ChangeEvent, useEffect} from 'react';
import {useTheme} from "./ThemeContext";
import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {updateQuery} from '../searchSlice';

interface SearchInputProps {
    onSearch: (filteredItems: string) => void;
}

const SearchInput = ({onSearch}: SearchInputProps) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const {theme} = useTheme();
    const history = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();


    useEffect(() => {
        // Обновляем поле ввода при изменении URL
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('query') || '';
        setSearchQuery(query);
        onSearch(query);
    }, [location.search, onSearch]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setSearchQuery(newQuery);

        // Диспатчим экшен для обновления запроса поиска в хранилище
        dispatch(updateQuery(newQuery));

        onSearch(newQuery);


        const searchParams = new URLSearchParams(location.search);
        searchParams.set('query', newQuery);
        history(`/track?${searchParams.toString()}`);

    };

    return (
        <div>
            <input
                type="search"
                placeholder="Artist..."
                value={searchQuery}
                onChange={handleSearchChange}
                className={`input ${theme === 'dark' ? 'dark-input' : ''}`}
            />
        </div>
    );
};

export default SearchInput;

