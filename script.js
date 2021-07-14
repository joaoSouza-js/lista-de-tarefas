var task;
var date;
var tbody = window.document.getElementById('tbody')

var createNewTask = {
    active(){
         window.document.querySelector(".tarefa").classList.add('active')

    },
    remove(){
        window.document.querySelector(".tarefa").classList.remove('active')

        task = window.document.getElementById('task').value


        date = window.document.getElementById("date").value

    }

}
function save(){
    createNewTask.remove()
    tbody.appendChild(createTr())
}
function createTr(){
    var tr = window.document.createElement('tr')
    tr.innerHTML = contenTr()
    return tr
}

function contenTr(){
    var html = `
        <td>
            <p>${task}</p>
        </td>
        <td>${date}</td>

        <td>
            <label for="yes">
                <input type="radio" id="yes"name="conclusion">
                sim
            </label>

            <label for="no">
                <input type="radio" id="no" name="conclusion">
                não
            </label>
        </td>
        <td>
            <i class="fas fa-trash" ></i>
        </td>
        </tr>`
        return html

}

