import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data () {
        return {     
            apiUrl: 'https://vue3-course-api.hexschool.io/v2',
            apiPath: 'isha',
            products: [],
            clickProduct: {},
        }
    },

    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios.post(url)
              .then(() => {
                this.getData();
              })
              .catch((err) => {
                alert(err.response.data.message)
                window.location = 'login.html';
              })
          },
          getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios.get(url)
              .then((response) => {
                this.products = response.data.products;
              })
              .catch((err) => {
                alert(err.response.data.message);
              })
          },
          openProduct(item) {
            this.tempProduct = item;
          }
    },
    
}).mount('#app');

