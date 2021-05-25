import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import './topPanel.css';

const TopPanel = ( { onSearch, onFilter, filter } ) => {

    return (
        <div className="top-panel d-flex">
            <SearchPanel 
                onSearch={ onSearch }
            />
            <ItemStatusFilter
                onFilter={ onFilter }
                filter={ filter }
            />
        </div>
    );
};

export default TopPanel; 
