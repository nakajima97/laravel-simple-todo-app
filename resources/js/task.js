const { default: axios } = require("axios");

const addTask = () => {
    const input = document.getElementById("addTaskTitle");
    const taskTitle = input.value;
    console.log({ taskTitle });
    axios.post("/task", { taskTitle }).then((response) => {
        if (response.data.result) {
            alert("タスクの追加に成功しました。");
            input.value = "";
        }
    });
};

const finishTask = (event) => {
    const parent = event.currentTarget.parentNode;
    const id = parent.dataset.id;
    axios.post("/task/finish", { id }).then((response) => {
        if (response.data.result) {
            alert("タスクを完了しました。");
            location.reload();
        }
    });
};

const deleteTask = (event) => {
    // const parent = event.currentTarget.parentNode;
    // const id = parent.dataset.id;
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
