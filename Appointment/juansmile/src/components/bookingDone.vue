<template>
  <div class="overlay">
    <div class="popup">
      <h2>Appointment Confirmed!</h2>
      <img
        src="../assets/confirmIcon.png"
        alt="Appointment Confirmed"
        style="width: 100px; height: 100px; margin-bottom: 20px"
      />
      <p>
        Your booking has been successfully submitted. We look forward to seeing
        you!
      </p>
      <button @click="closeAndNavigate">CLOSE</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const closeAndNavigate = () => {
  router.push("/appointment"); // Navigate back to Appointment.vue
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* REMOVE pointer-events: none; */
}

.popup {
  background: #fffaf2;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #000;
  pointer-events: auto; /* Allow interactions with the popup */
}

button {
  background-color: #cbb680;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
}
</style>
