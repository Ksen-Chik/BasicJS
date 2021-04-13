let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        
        //добавляем строку с названиями колонок
        this.generateRow();
    },

    /**
     * Метод генерирует строку.
     */
    generateRow() {
        return document.querySelector('body').insertAdjacentHTML("afterbegin", `<div class="row"></div>`);
    },
}

app.run();
