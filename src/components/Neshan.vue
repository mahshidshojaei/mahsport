<script setup lang="ts">
import NeshanMap from "@neshan-maps-platform/vue3-openlayers"
import { Map } from "@neshan-maps-platform/ol"

function onInit(map:Map) {
  const view = map?.getView()
  view?.animate({
    center: olProj.fromLonLat([35.7343, 51.2251]),
    zoom: 11,
    duration: 1000,
  })
}
</script>
<template>
  <div class="page w-[500px] h-[250px] rounded-[15px] border-1 border-white">
    <NeshanMap
        class=""
        defaultType="neshan"
        mapKey="web.3f12492a355f43da99e8fb76d099d114"
        serviceKey="web.3f12492a355f43da99e8fb76d099d114"
        :center="{latitude: 35.7343, longitude: 51.2251}"
        @on-init="onInit"
        zoom="12"
    />
  </div>
</template>
<style>
@import url("@neshan-maps-platform/vue3-openlayers/dist/style.css");
.ol-viewport{
  border-radius: 15px;
}
.map-popup-container{
  display: none;
}
.map-drawer--desktop{
  display: none !important;
}
.map-settings{
  display: none !important;
}
</style>
