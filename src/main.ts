import './assets/style/main.scss';
import './config/fa.config';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAnalytics from 'vue-analytics';
import './registerServiceWorker';

// Vue Configuration flags
Vue.config.devtools = false;
Vue.config.productionTip = (process.env.NODE_ENV === 'production');

// Google Analytics Configuration (only enable tracking in production builds)
Vue.use(VueAnalytics, {
    id: 'UA-134661440-1',
    checkDuplicatedScript: true,
    router,
    debug: {
        sendHitTask: (process.env.NODE_ENV === 'production')
    }
});

// Mount app to Vue instance (mounted() has callback to fire event that the prerender plugin listens for)
new Vue({
    router,
    render: (h) => h(App),
    // mounted() {
    //     document.dispatchEvent(new Event('render-event'));
    // }
}).$mount('#app-root');
