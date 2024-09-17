// Используем глобальную переменную window.TableComponent
const jsonData = [
    { "name": "Alice", "age": 25, "job": "Engineer" },
    { "name": "Bob", "age": 30, "job": "Designer" },
    { "name": "Charlie", "age": 35, "job": "Manager" }
];

class TableDataGenerator {
    constructor(data) {
        this.data = data;
    }

    getTableData() {
        return this.data.map(item => ({
            name: item.name,
            age: item.age,
            job: item.job
        }));
    }
}

// Определяем TableComponent как глобальную переменную
window.TableComponent = {
    render: function(container, data) {
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
};

// Генерируем данные для таблицы
const tableDataGenerator = new TableDataGenerator(jsonData);
const tableData = tableDataGenerator.getTableData();

// Рендерим таблицу
const app = document.getElementById('app');
window.TableComponent.render(app, tableData);  // Используем глобальный TableComponent
