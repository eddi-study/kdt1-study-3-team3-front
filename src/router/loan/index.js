import Vue from "vue";
import VueRouter from "vue-router";
import LoanCheckView from "@/views/loan/LoanCheckView.vue"
Vue.use(VueRouter)

const loanRoutes = [
  {
    path: '/loan-check-page',
    name: 'LoanCheckView',
    component: LoanCheckView,
  },
]

export default loanRoutes