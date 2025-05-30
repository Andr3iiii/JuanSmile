<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="isRail"
    app
    color="white"
    permanent
    :width="isRail ? railWidth : fullWidth"
    @mouseenter="isRail = false"
    @mouseleave="isRail = true"
  >
    <!-- Logo -->
    <v-list density="compact">
      <v-list-item>
        <v-list-item-avatar :size="isRail ? 40 : 80">
          <v-img src="../assets/mainLogo.png" contain />
        </v-list-item-avatar>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <!-- Navigation Items -->
    <v-list density="compact" nav>
      <v-list-item @click="$router.push('/')">
        <template #prepend>
          <img src="../assets/icons/Home.png" class="nav-icon" />
        </template>
        <v-list-item-title v-if="!isRail" class="wrapped-title">
          Homepage
        </v-list-item-title>
      </v-list-item>

      <v-list-item @click="$router.push('/appointment')">
        <template #prepend>
          <img src="../assets/icons/user.png" class="nav-icon" />
        </template>
        <v-list-item-title v-if="!isRail" class="wrapped-title">
          Appointment Scheduling
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template #prepend>
          <img src="../assets/icons/records.png" class="nav-icon" />
        </template>
        <v-list-item-title v-if="!isRail" class="wrapped-title">
          Patient Reports
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template #prepend>
          <img src="../assets/icons/inventory.png" class="nav-icon" />
        </template>
        <v-list-item-title v-if="!isRail" class="wrapped-title">
          Inventory
        </v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item>
        <template #prepend>
          <img src="../assets/icons/payment.png" class="nav-icon" />
        </template>
        <v-list-item-title v-if="!isRail" class="wrapped-title">
          Payment Activity
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
const isRail = ref(true);

const railWidth = 80;
const fullWidth = 200;
</script>

<style scoped>
.v-list-item {
  font-size: 1.2rem;
  margin-top: 20px;
}
.wrapped-title {
  white-space: normal !important;
  word-break: break-word !important;
  overflow-wrap: break-word;
  line-height: 1.2;
  flex: 1;
  padding-right: 12px;
}
.v-navigation-drawer {
  transition: width 0.3s ease;
}
.nav-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
}
</style>
