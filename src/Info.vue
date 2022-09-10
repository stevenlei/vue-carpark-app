<script>
export default {
  data() {
    return {
      carpark: {},
      googleMapAPIKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    };
  },
  async mounted() {
    const response = await fetch(
      `https://ios-dev.shortcutsapi.com/parking-info/parking-info-macau-ios-dev?id=${this.$route.params.id}`
    );
    const data = await response.json();
    this.carpark = data.data[0];
  },
  computed: {
    googleMapImage() {
      return `https://maps.googleapis.com/maps/api/staticmap?center=${this.carpark.coordinates.lat},${this.carpark.coordinates.lng}&zoom=17&size=600x400&maptype=roadmap&markers=color:red|${this.carpark.coordinates.lat},${this.carpark.coordinates.lng}&key=${this.googleMapAPIKey}`;
    },
  },
};
</script>

<template>
  <div class="p-12" v-if="carpark.id">
    <h1 className="text-center text-6xl font-bold text-slate-800">{{ carpark.name }}</h1>
    <p class="text-center mt-6 text-2xl text-slate-500">{{ carpark.address }}</p>

    <div class="bg-white p-8 rounded-xl mt-12">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl text-slate-800">私家車位</h2>
        <p class="text-2xl text-slate-800 font-bold">{{ carpark.car }}</p>
      </div>
      <div class="flex items-center justify-between mt-4">
        <h2 class="text-2xl text-slate-800">電單車位</h2>
        <p class="text-2xl text-slate-800 font-bold">{{ carpark.motor }}</p>
      </div>
      <img :src="googleMapImage" class="w-full mt-8 block border rounded-md" />
    </div>
  </div>
</template>
