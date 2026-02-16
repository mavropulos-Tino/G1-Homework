const filterRegion = data => {
    data.forEach(country => {
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if(country.region !== 'Europe') {
            countryInstance.classList.add('hidden');
        }
    });
}

const filterNeighbours = data => {
    const borderingCountires = ['SRB', 'GRC', 'ALB', 'BGR', 'UNK'];
    data.forEach(country => {
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if (!(borderingCountires.includes(country.cca3))) {
            countryInstance.classList.add('hidden');
        }
    });
}

const filterMacedonia = data => {
    data.forEach(country => {
        const countryInstance = document.getElementById(`ID:${country.cca3}`);
        if (country.cca3 !== 'MKD') {
            countryInstance.classList.add('hidden');
        }
    });
}