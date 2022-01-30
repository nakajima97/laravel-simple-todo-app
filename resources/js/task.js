const { default: axios } = require("axios");

const addTask = () => {
    const input = document.getElementById("addTaskTitle");
    const taskTitle = input.value;
    axios.post("/task", { taskTitle }).then((response) => {
        console.log(response);
        if (response.data.result) {
            input.value = "";
            location.reload();
        } else {
            alert("タスクの追加に失敗しました。");
        }
    });
};

const finishTask = (id) => {
    const params = new URLSearchParams();
    params.append("id", id);

    axios.post("/task/finish", params).then((response) => {
        console.log(response);
        if (response.data.result) {
            location.reload();
        }
    });
};

const deleteTask = (id) => {
    const params = new URLSearchParams();
    params.append("id", id);

    axios.delete("/task", params).then((response) => {
        if (response.data.result) {
            alert("タスクを削除しました。");
            location.reload();
        }
    });
};

const btnAdd = document.getElementById("addTask");
btnAdd.addEventListener("click", addTask);

const btnFinishes = Array.from(
    document.getElementsByClassName("js-btn-finish")
);

btnFinishes.map((btnFinish) => {
    btnFinish.addEventListener("click", () => {
        const parent = btnFinish.parentNode;
        const id = parent.dataset.id;
        finishTask(id);
    });
});

const btnDeletes = Array.from(document.getElementsByClassName("js-btn-delete"));

btnDeletes.map((btnDelete) => {
    btnDelete.addEventListener("click", () => {
        const parent = btnDelete.parentNode;
        const id = parent.dataset.id;
        deleteTask(id);
    });
});
