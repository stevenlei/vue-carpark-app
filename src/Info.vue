<script>
export default {
  data() {
    return {
      googleMapAPIKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    };
  },
};
</script>

<template>
  <div class="p-12">
    <h1 className="text-center text-6xl font-bold text-slate-800">宋玉生廣場停車場</h1>
    <p class="text-center mt-6 text-2xl text-slate-500">宋玉生公園下面</p>

    <div class="bg-white p-8 rounded-xl mt-12">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl text-slate-800">私家車位</h2>
        <p class="text-2xl text-slate-800 font-bold">100</p>
      </div>
      <div class="flex items-center justify-between mt-4">
        <h2 class="text-2xl text-slate-800">電單車位</h2>
        <p class="text-2xl text-slate-800 font-bold">100</p>
      </div>
      <img
        :src="`https://maps.googleapis.com/maps/api/staticmap?center=22.18941,113.550893&zoom=17&size=600x400&maptype=roadmap&markers=color:red|22.18941,113.550893&key=${googleMapAPIKey}`"
        class="w-full mt-8 block border rounded-md"
      />
    </div>
  </div>
</template>
