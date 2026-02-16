const filterStates = { // Object Where The Filter Boolean States (refrenced In Utils.js) Are Stored
    continent: false,
    neighbours: false,
    landlocked: false
};

const initializeFilterContorller = (data, status) => { // We Need This Function To Get The Fetch Data And Status From fetchData.js
    document.getElementById('filterEurope') // Click Listener For The Filter Europe Button
    .addEventListener('click', () => {
        if(!status) {
            return;
        }
        // First we change the button style to active, then we change the active boolean to ON and then we do the filtering
        setButtonToActiveStyle('filterEurope', data);
        setFilterToActiveState('continent');
        filterRegion(data);
    });
    
    document.getElementById('filterNeighbours') // Click Listener For The Filter Countries Bordering Maceodnia Button
    .addEventListener('click', () => {
        if(!status) {
            return;
        }
        // First we change the button style to active, then we change the active boolean to ON and then we do the filtering
        setButtonToActiveStyle('filterNeighbours', data);
        setFilterToActiveState('neighbours');
        filterNeighbours(data);
    });

    document.getElementById('filterMacedonia') // Click Listener For The Filter Macedonia Button
    .addEventListener('click', () => {
        if(!status) {
            return;
        }
        // First we change the button style to active, then we change the active boolean to ON and then we do the filtering
        setButtonToActiveStyle('filterMacedonia', data);
        setFilterToActiveState('landlocked');
        filterMacedonia(data);
    });


    document.getElementById('clearFilters') // Click Listener For The Clear All FilterS Button
    .addEventListener('click', () => {
        if(!status) {
            return;
        }
        // Remove the active style, revert boolean to OFF and remove all filtering 
        setButtonToInactiveStyle();
        setFilterToInactiveState();
        removeFilters(data);
    });
}