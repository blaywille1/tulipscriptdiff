class TableComponent {
    static render(container, data) {
        const table = document.createElement('table');
        table.border = "1";

        const headerRow = document.createElement('tr');
        const headers = ['Name', 'Age', 'Job'];

        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });

        table.appendChild(headerRow);

        data.forEach(item => {
            const row = document.createElement('tr');

            Object.values(item).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.appendChild(cell);
            });

            table.appendChild(row);
        });

        container.appendChild(table);
    }
}

export default TableComponent;
