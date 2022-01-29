const { default: axios } = require("axios");

const addTask = () => {
    const input = document.getElementById("addTaskTitle");
    const taskTitle = input.value;
    axios.post("/task", { taskTitle }).then((response) => {
        if (response.data.result) {
            input.value = "";
            location.reload();
        } else {
            alert("タスクの追加に失敗しました。");
        }
    });
};

const finishTask = () => {
    axios.post("/task/finish", { id: this.id }).then((response) => {
        if (response.data.result) {
            alert("タスクを完了しました。");
            location.reload();
        }
    });
};

const deleteTask = () => {
    axios.delete("/task", { id: this.id }).then((response) => {
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
    const parent = btnFinish.parentNode;
    const id = parent.dataset.id;
    btnFinish.addEventListener("click", {
        id,
        handleEvent: finishTask,
    });
});

const btnDeletes = Array.from(document.getElementsByClassName("js-btn-delete"));

btnDeletes.map((btnDelete) => {
    const parent = btnDelete.parentNode;
    const id = parent.dataset.id;
    btnDelete.addEventListener("click", {
        id,
        handleEvent: deleteTask,
    });
});
