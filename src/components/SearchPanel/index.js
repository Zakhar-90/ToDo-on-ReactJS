import './searchPanel.css';

const SearchPanel = ( { onSearch } ) => {

    const onChangeSearch = (e) => {
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder='Search'
            className="form-control search-input"
            onChange={ onChangeSearch }
        />
    );
};

export default SearchPanel;
