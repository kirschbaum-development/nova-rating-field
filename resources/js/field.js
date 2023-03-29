import IndexField from './components/IndexField';
import DetailField from './components/DetailField';
import FormField from './components/FormField';

Nova.booting((Vue, router) => {
    Vue.component('index-rating', IndexField);
    Vue.component('detail-rating', DetailField);
    Vue.component('form-rating', FormField);
})
