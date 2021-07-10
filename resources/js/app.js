require('./bootstrap');

const app = {
    data(){
        return{
            name:''
        }
    },
    template:'<router-view></router-view>'
};
createApp(app).mount('#app');
