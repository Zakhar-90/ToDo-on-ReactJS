import ItemStatusFilter from '../ItemStatusFilter';
import SearchPanel from '../SearchPanel';
import './topPanel.css';

const TopPanel = () => {

    return (
        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>
    );
};

export default TopPanel; 
