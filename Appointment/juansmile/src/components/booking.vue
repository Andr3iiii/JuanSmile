<template>
  <div class="appointment-form">
    <h2>BOOK AN APPOINTMENT</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input
          v-model="form.firstName"
          type="text"
          placeholder="First Name*"
          :class="{ invalid: !validName(form.firstName) && touched.firstName }"
          @input="touched.firstName = true"
          required
        />
        <input
          v-model="form.lastName"
          type="text"
          placeholder="Last Name*"
          :class="{ invalid: !validName(form.lastName) && touched.lastName }"
          @input="touched.lastName = true"
          required
        />
      </div>
      <div class="form-group">
        <input
          v-model="form.phone"
          type="text"
          placeholder="Phone*"
          maxlength="11"
          :class="{ invalid: !validPhone(form.phone) && touched.phone }"
          @input="touched.phone = true"
          required
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email*"
          :class="{ invalid: !validEmail(form.email) && touched.email }"
          @input="touched.email = true"
          required
        />
      </div>
      <div class="form-group">
        <input
          v-model="form.date"
          type="date"
          :min="minDate"
          :max="maxDate"
          required
        />
        <input v-model="form.time" type="time" required />
      </div>
      <div class="form-group">
        <select
          v-model="form.service"
          required
          :class="{ invalid: !form.service }"
        >
          <option disabled value="">-- Select Service Required* --</option>
          <option v-for="service in services" :key="service" :value="service">
            {{ service }}
          </option>
        </select>
      </div>
      <div class="button-row">
        <button type="submit">SUBMIT</button>
        <button type="button" @click="$emit('close')">CANCEL</button>
      </div>
    </form>
    <BookingDone v-if="showConfirmation" @close="closeConfirmation" />
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import BookingDone from "./bookingDone.vue";

const props = defineProps({ selectedService: String });
const emit = defineEmits(["close"]);

const form = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  date: "",
  time: "08:00",
  service: "",
});

const touched = ref({
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
});

const services = [
  "EXTRACTION/BUNOT",
  "RESTORATION/PASTA",
  "ORAL PROPHYLAXIS",
  "ROOT CANAL THERAPY",
  "METAL BRACES",
  "CLEAR ALIGNERS",
  "CERAMIC BRACES",
  "SELF LIGATING BRACES",
];

watch(
  () => props.selectedService,
  (newVal) => {
    if (newVal) {
      const match = services.find(
        (s) => s.toLowerCase() === newVal.toLowerCase()
      );
      form.value.service = match || "";
    }
  },
  { immediate: true }
);

const today = new Date();
const threeMonthsLater = new Date(today);
threeMonthsLater.setMonth(today.getMonth() + 3);

const formatDate = (date) => date.toISOString().split("T")[0];
const minDate = formatDate(today);
const maxDate = formatDate(threeMonthsLater);

const validName = (value) => /^[A-Za-z\s]+$/.test(value.trim());
const validPhone = (value) => /^\d{11}$/.test(value.trim());
const validEmail = (value) =>
  /^[^@\s]+@(gmail\.com|yahoo\.com)$/.test(value.trim());

const showConfirmation = ref(false);

const submitForm = () => {
  Object.keys(touched.value).forEach((key) => (touched.value[key] = true));

  const selectedDate = new Date(form.value.date);
  const todayOnlyDate = new Date(today.toDateString());
  const maxOnlyDate = new Date(threeMonthsLater.toDateString());

  if (
    !validName(form.value.firstName) ||
    !validName(form.value.lastName) ||
    !validPhone(form.value.phone) ||
    !validEmail(form.value.email) ||
    !form.value.service ||
    !form.value.date ||
    !form.value.time
  ) {
    alert("Please correct the errors in the form.");
    return;
  }

  if (selectedDate < todayOnlyDate || selectedDate > maxOnlyDate) {
    alert("Date must be between today and 3 months from now.");
    return;
  }

  console.log("Form submitted:", form.value);
  showConfirmation.value = true;

  setTimeout(() => {
    showConfirmation.value = false;
    emit("close");
  }, 1000);
};

const closeConfirmation = () => {
  showConfirmation.value = false;
};
</script>

<style scoped>
.appointment-form {
  max-width: 600px;
  margin: auto;
  background: #f8f5ef;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  color: #000;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}

select:invalid {
  color: #999;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

input,
select {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  color: #000;
  background-color: #fff;
}

input.invalid,
select.invalid {
  border: 2px solid red;
}

.button-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.button-row button {
  width: 100%;
  background: #cbb680;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
}
</style>
