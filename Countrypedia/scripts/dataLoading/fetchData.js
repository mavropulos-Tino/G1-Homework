const URL = 'https://restcountries.com/v3.1/independent?status=true&fields=flags,name,population,region,capital,borders,cca3';

document.addEventListener('DOMContentLoaded', () => { // Waits For All DOM Elements To Be Loaded In
    fetch(URL)
        .then(res => {
            const status = res.ok;
            return res.json()

            .then(data => (
                {data, status}
            ));
        })
        .then(({data, status}) => {
            loadData(data, status);
            initializeLayoutController(data, status); // Sends The Fetch Data And Status To layoutController.js
            initializeFilterContorller(data, status); // Sends The Fetch Data And Status To filterController.js
            initializeSearchBar(data, status);

        })
        .catch(error => console.error(error));
});
