/* DATA FORMATING UTILITY CLASSES */
const enableGridView = () => { // Toggles From Table To Grid View
    gridView = true;
    tableView = false;

    gridViewButton.classList.add('active');
    tableViewButton.classList.remove('active');

    gridViewButton.setAttribute("disabled", true);
    tableViewButton.removeAttribute("disabled");
}
const enableTableView = () => { // Toggles From Grid To Table View
    gridView = false;
    tableView = true;

    gridViewButton.classList.remove('active');
    tableViewButton.classList.add('active');

    gridViewButton.removeAttribute("disabled");
    tableViewButton.setAttribute("disabled", true);
}

/* FILTERING UTITLITY FUNCTIONS */
const setButtonToActiveStyle = (filterID, data) => { // Activates One Filter Button While Deactivating And Re-Enabling All Others To Enforce Single-Filter Mode
    // Clears all previous filters before applying the new one
    removeFilters(data);

    // Now we remove the active css style form all fitler buttons and remove their disbaled attribute
    document.querySelectorAll('.filterButtons button')
    .forEach(button => {
        button.classList.remove('active');
        button.removeAttribute("disabled");
    });

    // And then we add back the active style class and attribute back to the newly clicked filter button
    const filterButton = document.getElementById(filterID);
    filterButton.classList.add('active');
    filterButton.setAttribute("disabled", true);
}
const setButtonToInactiveStyle = () => { // Removes Active State CSS Style From All Filter Buttons And Also Removing Their Disbaled Attribut, Resetting Them To Default
    document.querySelectorAll('.filterButtons button')
    .forEach(button => {
        button.classList.remove('active');
        button.removeAttribute("disabled");
    });
}

function setFilterToActiveState(filter) { // Sets The Boolean Of The Currently Selected Filter To True And False To The Other Ones
    for (const key in filterStates) {
        filterStates[key] = false;
    }
    filterStates[filter] = true;
}
function setFilterToInactiveState() { // Sets All Filter States To Default
    for (const key in filterStates) {
        filterStates[key] = false;
    }
}

const removeFilters = data => { // Removes The Hidden Style Class From All Country Cards Or Table Rows
    data.forEach(country => {
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        countryInstance.classList.remove('hidden');
    })
}