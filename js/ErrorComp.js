Vue.component('error', {
    data() {
        return {
            text: ''//текст ошибки
        }
    },
    methods: {//метод установления ошибки
        setError(error) {
            this.text = error
        }
    },
    computed: {//свойство вычисляющее необходимость показа ошибки
        isVisible() {
            return this.text !== ''//если пустой то не показывать текст ошибки, иначе показываем
        }
    },
    //подстановка данных через v-if
    template: `
    <div class="error-block" v-if="isVisible"> 
        <p class="error-msg">
            <button class="close-btn" @click="setError('')">&times;</button>
            {{ text }}
        </p>
    </div>
    `
});
