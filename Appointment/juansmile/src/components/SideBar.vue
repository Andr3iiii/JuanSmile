<template>
  <v-card>
    <v-navigation-drawer permanent app color="white" :width="fullWidth">
      <!-- Sidebar Header -->
      <v-list density="compact">
        <v-list-item>
          <v-list-item-avatar :size="80">
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
          <v-list-item-title class="wrapped-title">Homepage</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/appointment')">
          <template #prepend>
            <img src="../assets/icons/user.png" class="nav-icon" />
          </template>
          <v-list-item-title class="wrapped-title"
            >Appointment Scheduling</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <template #prepend>
            <img src="../assets/icons/records.png" class="nav-icon" />
          </template>
          <v-list-item-title class="wrapped-title"
            >Patient Reports</v-list-item-title
          >
        </v-list-item>

        <v-list-item>
          <template #prepend>
            <img src="../assets/icons/inventory.png" class="nav-icon" />
          </template>
          <v-list-item-title class="wrapped-title">Inventory</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <template #prepend>
            <img src="../assets/icons/payment.png" class="nav-icon" />
          </template>
          <v-list-item-title class="wrapped-title"
            >Payment Activity</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script setup>
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
  transition: none !important;
}
.nav-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 8px;
}
</style>
