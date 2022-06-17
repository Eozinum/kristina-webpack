import { users } from '../js/data';

class Table {
  constructor(tagID, data) {
    this.container = document.querySelector(tagID);
    this.data = data;
    this.table = document.createElement('table');
    this.table.className = 'table';
  }

  createRow(rowData) {
    return `
      <tr class='table-row'>
        <td class='table-cell'>${rowData.id}</td>
        <td class='table-cell'>${rowData.name}</td>
        <td class='table-cell'>${rowData.gender}</td>
        <td class='table-cell'>${rowData.email}</td>
        <td class='table-cell'>${rowData.country}</td>
        <td class='table-cell'>${rowData.birthday}</td>
      </tr>`;
  }

  render() {
    let html = '';
    this.data.forEach((user) => {
      html += this.createRow(user);
    });
    this.table.innerHTML = html;
    this.container.appendChild(this.table);
    this.table.onclick = this.whenClick;
    this.table.ondblclick = this.whenDblClick;
  }

  whenClick(event) {
    const currentRow = event.target.parentNode;
    currentRow.classList.toggle('yellow-row');
  }
}

export const table = new Table('#root', users);
