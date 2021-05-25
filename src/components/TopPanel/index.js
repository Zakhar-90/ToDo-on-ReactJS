import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import './topPanel.css';

const TopPanel = ( {onSearch} ) => {

    return (
        <div className="top-panel d-flex">
            <SearchPanel 
                onSearch={ onSearch }
            />
            <ItemStatusFilter />
        </div>
    );
};

export default TopPanel; 
