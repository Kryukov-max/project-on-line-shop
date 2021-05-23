/*главная логика приложения*/
const API = 'https://raw.githubusercontent.com/Kryukov-max/projectOnLineShopTutorial/online-store-api-master/responses';
/*           https://github.com/Kryukov-max/projectOnLineShopTutorial/tree/online-store-api-master/responses*/
const app = new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error); //способ инициализации ошибки
                })
        },
    },
    mounted() {/*спрашиваем корзину*/
        console.log(this);
    }
});

