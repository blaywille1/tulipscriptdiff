(() => {
    window.TableComponent = {
        render: function (e, t) {
            const n = document.createElement("table");
            n.border = "1";
            const a = document.createElement("tr");
            ["Name", "Age", "Job"].forEach((e => {
                const t = document.createElement("th");
                t.textContent = e, a.appendChild(t)
            })), n.appendChild(a), t.forEach((e => {
                const t = document.createElement("tr");
                Object.values(e).forEach((e => {
                    const n = document.createElement("td");
                    n.textContent = e, t.appendChild(n)
                })), n.appendChild(t)
            })), e.appendChild(n)
        }
    };
    const e = new class {
        constructor(e) {
            this.data = e
        }

        getTableData() {
            return this.data.map((e => ({name: e.name, age: e.age, job: e.job})))
        }
    }([{name: "Alice", age: 25, job: "Engineer"}, {name: "Bob", age: 30, job: "Designer"}, {
        name: "Charlie",
        age: 35,
        job: "Manager"
    }]).getTableData(), t = document.getElementById("app");
    window.TableComponent.render(t, e)
})();