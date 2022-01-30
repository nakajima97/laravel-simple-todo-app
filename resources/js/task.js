const { default: axios } = require("axios");

/**
 * タスクを追加する
 */
const addTask = (taskTitle) => {
    return axios.post("/task", { taskTitle }).then((response) => {
        if (response.data.result) {
            return true;
        } else {
            return false;
        }
    });
};

/**
 * idで渡された値のタスクを完了するためのpostをサーバに投げる
 *
 * @param {int} id
 */
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

/**
 * idで渡されたタスクを削除するためのpostをサーバに投げる
 *
 * @param {int} id
 */
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

/**
 * イベントリスナーを追加する処理をまとめた関数
 */
const addEventListenerToElement = () => {
    const btnAdd = document.getElementById("addTask");
    btnAdd.addEventListener("click", () => {
        const input = document.getElementById("addTaskTitle");
        const taskTitle = input.value;

        if (addTask(taskTitle)) {
            input.value = "";
            location.reload();
        } else {
            alert("タスクの追加に失敗しました。");
        }
    });

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

    const btnDeletes = Array.from(
        document.getElementsByClassName("js-btn-delete")
    );

    btnDeletes.map((btnDelete) => {
        btnDelete.addEventListener("click", () => {
            const parent = btnDelete.parentNode;
            const id = parent.dataset.id;
            deleteTask(id);
        });
    });
};

addEventListenerToElement();
