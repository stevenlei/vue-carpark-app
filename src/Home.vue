<script>
export default {
  data() {
    return {
      carparks: [],
    };
  },
  async mounted() {
    const response = await fetch("https://ios-dev.shortcutsapi.com/parking-info/parking-info-macau-ios-dev");
    const data = await response.json();
    this.carparks = data.data;
  },
};
</script>

<template>
  <div class="p-12">
    <h1 className="text-center text-6xl font-bold text-slate-800">Macau Carpark App</h1>
  </div>
  <ul class="mt-2 flex flex-col gap-y-4">
    <li v-for="carpark in carparks" :key="carpark.id" class="bg-white rounded-xl overflow-hidden">
      <router-link :to="`/info/${carpark.id}`" class="flex p-6 hover:bg-blue-500 group items-end">
        <div class="flex-1">
          <h4 class="text-3xl text-slate-600 group-hover:text-white mb-1">{{ carpark.name }}</h4>
          <span class="text-slate-400 group-hover:text-white">{{ carpark.address }}</span>
        </div>
        <div class="text-right text-slate-700">
          <p class="text-xl group-hover:text-white" v-if="carpark.motor">私家車位 {{ carpark.motor }}</p>
          <p class="text-xl group-hover:text-white" v-if="carpark.car">電單車位 {{ carpark.car }}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
