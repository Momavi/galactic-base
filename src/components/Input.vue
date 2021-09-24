<template>
  <div>
    <input
      class="input"
      v-model="text"
      type="text"
      placeholder="Название корабля"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
};
</script>

<style scoped lang="scss">
.input {
  width: 20%;
  height: 35px;
  padding-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.842);
  outline: none;
}
</style>
