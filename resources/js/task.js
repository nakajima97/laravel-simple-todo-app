const { default: axios } = require("axios");

const addTask = () => {
    const input = document.getElementById("addTaskTitle");
    const taskTitle = input.value;
    console.log({ taskTitle });
    axios.post("/task", { taskTitle }).then((response) => {
        console.log(response);
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
