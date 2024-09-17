import TableComponent from './components/TableComponent';

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

// Загрузка данных JSON из статического файла
fetch('/data.json')
    .then(response => response.json())
    .then(jsonData => {
        const tableDataGenerator = new TableDataGenerator(jsonData);
        const tableData = tableDataGenerator.getTableData();

        const app = document.getElementById('app');
        TableComponent.render(app, tableData);
    })
    .catch(error => {
        console.error('Ошибка загрузки данных:', error);
    });
