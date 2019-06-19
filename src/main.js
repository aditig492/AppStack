import Vue from 'vue'
// Global
import "./js/modules/bootstrap";
import "./js/modules/theme";
import "./js/modules/dragula";
import "./js/modules/feather";
import "./js/modules/moment";
import "./js/modules/sidebar";
import "./js/modules/toastr";
import "./js/modules/user-agent";

// Charts
import "./js/modules/chartjs";
import "./js/modules/apexcharts";

// Forms
import "./js/modules/daterangepicker";
import "./js/modules/datetimepicker";
import "./js/modules/fullcalendar";
import "./js/modules/markdown";
import "./js/modules/mask";
import "./js/modules/quill";
import "./js/modules/select2";
import "./js/modules/validation";
import "./js/modules/wizard";

// Maps
import "./js/modules/vector-maps";

// Tables
import "./js/modules/datatables";
import 'expose-loader?jquery!jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../docs/css/classic.css'
import router from './router'

import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
