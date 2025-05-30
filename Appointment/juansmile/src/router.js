import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/homepage.vue";
import Appointment from "./components/Appointment.vue";
import Booking from "./components/booking.vue";

const routes = [
  { path: "/", name: "Homepage", component: Homepage },
  { path: "/appointment", name: "Appointment", component: Appointment },
  { path: "/booking", name: "Booking", component: Booking },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
