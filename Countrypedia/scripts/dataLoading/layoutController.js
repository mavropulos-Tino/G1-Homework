let gridView = true;
let tableView = false;

const gridViewButton = document.getElementById('gridViewButton');
const tableViewButton = document.getElementById('tableViewButton');

const initializeLayoutController = (data, status) => {
    gridViewButton.addEventListener('click', () => {
        if(!status) {
            return;
        }
        enableGridView();
        loadData(data, status);

        setButtonToInactiveStyle();
        setFilterToInactiveState();
        removeFilters(data);

        searchInput.value = '';
    });

    tableViewButton.addEventListener('click', () => {
        if(!status) {
            return;
        }
        enableTableView();
        loadData(data, status);

        setButtonToInactiveStyle();
        setFilterToInactiveState();
        removeFilters(data);

        searchInput.value = '';
    });
}