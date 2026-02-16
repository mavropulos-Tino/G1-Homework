const searchInput = document.getElementById('searchInput');

const initializeSearchBar = (data, status) => {

    const searchFilter = searchTerm => {
        const searchTermLength = searchTerm.length;

        data.forEach(country => {
            const slicedCountryName = country.name.common.toLowerCase().substring(0, searchTermLength);
            const countryInstance = document.getElementById(`ID:${country.cca3}`);
            
            if(slicedCountryName !== searchTerm) {
                countryInstance.classList.add('hidden');
            } else {
                countryInstance.classList.remove('hidden');
            }
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchFilter(searchTerm);
    });
}