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

const btn = document.getElementById("addTask");
btn.addEventListener("click", addTask);
