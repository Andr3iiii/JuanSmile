<template>
  <div class="app-container">
    <header class="header">
      <div class="header-right">
        <div class="search-bar">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search for a service..."
          />
          <span class="search-icon">⌕</span>
        </div>

        <div class="header-actions">
          <div class="icon-label">
            <v-icon>mdi-help-circle-outline</v-icon>
            <span class="header-link">FAQ</span>
          </div>

          <div class="icon-label">
            <v-icon>mdi-cog</v-icon>
            <span class="header-link">SETTINGS</span>
          </div>

          <span class="divider"></span>

          <div class="icon-label">
            <span class="admin-icon">👤</span>
            <span class="header-link">ADMIN</span>
          </div>
        </div>
      </div>
    </header>

    <main class="content">
      <div class="large-card">
        <div class="header-bar">
          <div class="header-label">
            <span>DENTAL SERVICES</span>
          </div>
        </div>

        <div class="card-grid">
          <div
            v-for="(service, index) in filteredServices"
            :key="index"
            class="service-card"
          >
            <div class="service-content">
              <div class="image-container">
                <img :src="service.image" :alt="service.title" />
              </div>
              <div class="service-info">
                <h2 class="service-title">{{ service.title }}</h2>
                <p class="service-desc">{{ service.description }}</p>
                <div class="service-footer">
                  <span class="price">₱{{ service.price }}</span>
                  <button
                    class="service-button"
                    @click="openBookingModal(service.title)"
                  >
                    GET THIS SERVICE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div v-if="showBookingModal" class="modal-overlay">
      <div class="modal-content">
        <Booking
          :selected-service="selectedService"
          @close="closeBookingModal"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Booking from "./booking.vue";

const services = [
  {
    title: "EXTRACTION/BUNOT",
    description:
      "It is usually done when a tooth is badly decayed, broken, or causing crowding. This procedure can be simple for visible teeth or surgical for impacted ones like wisdom teeth.",
    price: "1000 – 1500",
    image: new URL("../assets/TOOTHEXTRACTION 1.png", import.meta.url).href,
  },
  {
    title: "RESTORATION/PASTA",
    description:
      "A procedure used to repair a damaged or decayed tooth. It involves cleaning out the cavity and filling it with a special material like composite resin or amalgam.",
    price: "800 – 2500",
    image: new URL("../assets/RESTORATION 1.png", import.meta.url).href,
  },
  {
    title: "ORAL PROPHYLAXIS",
    description:
      "Commonly known as dental cleaning, it’s a preventive dental procedure that removes plaque, tartar, and stains from the teeth.",
    price: "1500 – 2000",
    image: new URL("../assets/ORALPROPHYLAXIS 1.png", import.meta.url).href,
  },
  {
    title: "ROOT CANAL THERAPY",
    description:
      "A dental procedure used to treat and save a tooth that is badly decayed or infected. It involves removing the infected pulp inside the tooth and sealing it.",
    price: "5000 – 15000",
    image: new URL("../assets/ROOTCANALTHERAPY 1.png", import.meta.url).href,
  },
  {
    title: "METAL BRACES",
    description:
      "Metal braces are stainless steel devices that use brackets and wires to gently move teeth into proper alignment. They’re a reliable solution for fixing crooked teeth, gaps, and bite issues.",
    price: "30,000–100,000",
    image: new URL("../assets/METALBRACES 1.png", import.meta.url).href,
  },
  {
    title: "CLEAR ALIGNERS",
    description:
      "Custom-made and transparent trays that fit over your teeth to gradually move them into place. They’re removable, nearly invisible, and a comfortable alternative to metal braces.",
    price: "80,000–400,000",
    image: new URL("../assets/CLEARALIGNERS 1.png", import.meta.url).href,
  },
  {
    title: "CERAMIC BRACES",
    description:
      "Ceramic braces are clear or tooth-colored braces that blend in with your teeth. They work like metal braces but are less noticeable, making them a popular choice for a more subtle look.",
    price: "30,000–100,000",
    image: new URL("../assets/CERAMICBRACES 1.png", import.meta.url).href,
  },
  {
    title: "SELF LIGATING BRACES",
    description:
      "Self-ligating braces use special brackets with built-in clips to hold the archwire, eliminating the need for elastic bands. This design reduces friction and makes treatment faster and more comfortable.",
    price: "90,000–150,000",
    image: new URL("../assets/Self ligating braces.png", import.meta.url).href,
  },
];

const searchTerm = ref("");
const showBookingModal = ref(false);
const selectedService = ref("");

const filteredServices = computed(() =>
  services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
);

const openBookingModal = (serviceTitle) => {
  selectedService.value = serviceTitle;
  showBookingModal.value = true;
};

const closeBookingModal = () => {
  showBookingModal.value = false;
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.header {
  background-color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: right;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-bar input {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 240px;
  font-size: 14px;
  color: #000;
}

.search-icon {
  font-size: 40px;
  color: #000;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  color: #000;
}

.icon-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.header-link {
  margin-top: 4px;
  font-size: 10px;
  color: #333;
}

.admin-icon {
  font-size: 18px;
}

.divider {
  border-left: 1px solid #ccc;
  height: 50px;
  align-self: stretch;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.large-card {
  background-image: url("../assets/mainbg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.header-label {
  background-color: #3f3b3b;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
  padding: 10px 24px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.service-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.service-content {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.image-container {
  flex: 0 0 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f0f0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #222;
}

.service-desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.service-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  min-width: 0;
}

.price {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
  min-width: 0;
  color: #333;
}

.service-button {
  background-color: #facc15;
  color: #fff;
  padding: 6px 12px;
  font-size: 13px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}

.service-button:hover {
  background-color: #eab308;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
}
</style>
