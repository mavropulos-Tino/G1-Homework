const main = document.querySelector('.mainSection');

// Grid View Rendering
const renderGridView = data => { // Combines The Card Container And Itterates Over All The Countries And Makes A Card For Each One
    main.innerHTML = ``;
    const container = createCardContainer();

    data.forEach(country => {
        const card = generateCardElement(country);
        container.appendChild(card);
    });
}
const createCardContainer = () => { // Creates The Div Container For The Cards
    const container = document.createElement('div');
    container.classList.add('container-fluid');
    main.appendChild(container);
    return container;
}
const generateCardElement = countryData => { // Creates The Card
    const card = document.createElement('div');
    card.className = 'Card';
    card.id = `ID:${countryData.cca3}`;
    
    card.innerHTML = `
        <img src="${countryData.flags.png}" alt="${countryData.flags.alt}" class="cardFlag">
        <div class="cardInfo">
            <h3 class="cardName">${countryData.name.common}</h3>
            <div class="cardDetail">
                <span class="cardLabel">Population:</span>
                <span class="cardValue">${countryData.population}</span>
            </div>
            <div class="cardDetail">
                <span class="cardLabel">Region:</span>
                <span class="cardValue">${countryData.region}</span>
            </div>
            <div class="cardDetail">
                <span class="cardLabel">Capital:</span>
                <span class="cardValue">${countryData.capital}</span>
            </div>
            <a href='https://en.wikipedia.org/wiki/${countryData.name.common}' target='_blank' class="learnMoreButton">Learn More</a>
        </div>
    `;
    return card;
}

// Table View Rendering
const renderTableView = data => { // Combines The Table, Table Head, Table Body And Itterates Over All The Countries And Makes A Row For Each One
    main.innerHTML = ``;
    const table = createTableContainer();
    const tableBody = document.createElement('tbody');

    data.forEach(country => {
        const row = generateRowElement(country);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
}
const createTableContainer = () => { // Creates The Table Element
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
    main.appendChild(table);
    table.appendChild(createTableHead());
    return table;
}
const createTableHead = () => { // Creates The Table Head
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Flag</th>
            <th scope="col">Population</th>
            <th scope="col">Region</th>
            <th scope="col">Capital</th>
        </tr>
    `;
    return tableHead;
}
const generateRowElement = countryData => { // Creates The Individual Table Body Row
    const row = document.createElement('tr');
    row.id = `ID:${countryData.cca3}`;

    row.innerHTML = `
        <td>${countryData.name.common}</td>
        <td><img src='${countryData.flags.png}' alt='${countryData.flags.alt}' class='tableFlag'></td>
        <td>${countryData.population}</td>
        <td>${countryData.region}</td>
        <td>${countryData.capital}</td>
    `;
    return row;
}

const loadData = (data, status) => { // Toggle Between Grid And Table View
    if((gridView && !tableView) && status) {
        renderGridView(data);

    } else if((!gridView && tableView) && status) {
        renderTableView(data);
    }
}