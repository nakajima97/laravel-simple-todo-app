const { default: axios } = require("axios");

/**
 * タスクを追加する関数
 *
 * @param {string} taskTitle タスクのタイトル
 * @returns {Promise} Promise<Boolean> 成功したらtrue。失敗したらfalse
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
 * @returns {Promise} Promise<Boolean> 成功したらtrue。失敗したらfalse
 */
const finishTask = (id) => {
    const params = new URLSearchParams();
    params.append("id", id);

    return axios.post("/task/finish", params).then((response) => {
        if (response.data.result) {
            return true;
        } else {
            return false;
        }
    });
};

/**
 * idで渡されたタスクを削除するためのpostをサーバに投げる
 *
 * @param {int} id
 * @returns {Promise} Promise<Boolean> 成功したらtrue。失敗したらfalse
 */
const deleteTask = (id) => {
    const params = new URLSearchParams();
    params.append("id", id);

    return axios.delete("/task", params).then((response) => {
        if (response.data.result) {
            return true;
        } else {
            return false;
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

        addTask(taskTitle).then((res) => {
            if (res) {
                input.value = "";
                location.reload();
            } else {
                alert("タスクの追加に失敗しました。");
            }
        });
    });

    const btnFinishes = Array.from(
        document.getElementsByClassName("js-btn-finish")
    );

    btnFinishes.map((btnFinish) => {
        btnFinish.addEventListener("click", () => {
            const parent = btnFinish.parentNode;
            const id = parent.dataset.id;

            finishTask(id).then((result) => {
                if (result) {
                    location.reload();
                } else {
                    alert("タスクの完了に失敗しました。");
                }
            });
        });
    });

    const btnDeletes = Array.from(
        document.getElementsByClassName("js-btn-delete")
    );

    btnDeletes.map((btnDelete) => {
        btnDelete.addEventListener("click", () => {
            const parent = btnDelete.parentNode;
            const id = parent.dataset.id;

            deleteTask(id).then((result) => {
                if (result) {
                    location.reload();
                } else {
                    alert("タスクの削除に失敗しました。");
                }
            });
        });
    });
};

addEventListenerToElement();
