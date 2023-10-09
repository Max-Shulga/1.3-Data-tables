function DataTable(config, data) {
    const parentElement = document.querySelector(config.parent);
    const table = document.createElement('table');
    table.className = 'table';

    const thead = document.createElement('thead');
    thead.className = 'table-header'
    const headTr = document.createElement('tr');
    //adding data to the table header
    headTr.innerHTML = `<th>№</th>`
    config.columns.forEach(column=> {
        const th = document.createElement('th')
        th.textContent = column.title;
        headTr.appendChild(th);
    })

    thead.appendChild(headTr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.className = 'table-body'

    //adding data to the table body
    data.forEach((rowData, index) => {
        const bodyTr = document.createElement('tr');
        bodyTr.innerHTML = `<td>${++index}</td>`
        tbody.appendChild(bodyTr)

        config.columns.forEach(column => {
            const td = document.createElement('td')
            td.textContent = rowData[column.value];
            bodyTr.appendChild(td);
        })
        tbody.appendChild(bodyTr);
    })

    table.appendChild(tbody)
    parentElement.appendChild(table);
}


const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
];

DataTable(config1, users);