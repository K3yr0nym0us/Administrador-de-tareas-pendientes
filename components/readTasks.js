import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

//creamos una funcion exportable para leer los datos del local storange
export const displayTasks = () => {

    //llamamos al objeto data-list
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(taskList);
    orderDates(dates);

    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY");
        list.appendChild(dateElement(date));

        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            //con diff podemos diferenciar entre fechas
            const diff = dateMoment.diff(taskDate);
            //si la diferencia es 0 entonces agregala
            if (diff === 0) {
                //le damos al objeto data-list los elementos obtenidos de createTask
                list.appendChild(createTask(task));
            };
        });
    });
};