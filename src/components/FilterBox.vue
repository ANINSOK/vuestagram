<template>
  <div :class="filterName + ' filter-item'" :style="`background-image:url(${uploadImage})`">
    <slot></slot>
  </div>
</template>

<script>
export default {
    
  name: "filterbox",
  props: {
    uploadImage: String,
    filterName: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>