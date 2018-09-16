<template>
  <button class="btn bg-primary" @click="Submit()">★</button>
</template>

<script>
export default {
  methods: {
    Submit() {
      this.$emit("Favorite");
    }
  }
}
</script>

