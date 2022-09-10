<script>
export default {};
</script>

<template>
  <div class="p-12">
    <h1 className="text-center text-6xl font-bold text-slate-800">Macau Carpark App</h1>
  </div>
  <ul class="mt-2 flex flex-col gap-y-4">
    <li class="bg-white rounded-xl overflow-hidden">
      <router-link to="/info" class="flex p-6 hover:bg-blue-500 group items-end">
        <div class="flex-1">
          <h4 class="text-3xl text-slate-600 group-hover:text-white mb-1">宋玉生廣場停車場</h4>
          <span class="text-slate-400 group-hover:text-white">宋玉生公園下面</span>
        </div>
        <div class="text-right text-slate-700">
          <p class="text-xl group-hover:text-white">私家車位 100</p>
          <p class="text-xl group-hover:text-white">電單車位 50</p>
        </div>
      </router-link>
    </li>
    <li class="bg-white rounded-xl overflow-hidden">
      <router-link to="/info" class="flex p-6 hover:bg-blue-500 group items-end">
        <div class="flex-1">
          <h4 class="text-3xl text-slate-600 group-hover:text-white mb-1">宋玉生廣場停車場</h4>
          <span class="text-slate-400 group-hover:text-white">宋玉生公園下面</span>
        </div>
        <div class="text-right text-slate-700">
          <p class="text-xl group-hover:text-white">私家車位 100</p>
          <p class="text-xl group-hover:text-white">電單車位 50</p>
        </div>
      </router-link>
    </li>
    <li class="bg-white rounded-xl overflow-hidden">
      <router-link to="/info" class="flex p-6 hover:bg-blue-500 group items-end">
        <div class="flex-1">
          <h4 class="text-3xl text-slate-600 group-hover:text-white mb-1">宋玉生廣場停車場</h4>
          <span class="text-slate-400 group-hover:text-white">宋玉生公園下面</span>
        </div>
        <div class="text-right text-slate-700">
          <p class="text-xl group-hover:text-white">私家車位 100</p>
          <p class="text-xl group-hover:text-white">電單車位 50</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
