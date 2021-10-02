<template>
  <span>{{ number.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") }}</span>
</template>

<script>
export default {
  name: "RegularSpaceForNumber",
  props: ["number"],
};
</script>
