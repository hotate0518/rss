<template>
  <button @click="Submit()" :class="[isActive, 'btn']">{{label}}</button>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },
  computed: {
    isActive() {
      return this.value === this.id ? 'active' : false;
    }
  },
  methods: {
    Submit() {
      this.$emit("input", this.id);
    }
  }
}
</script>

<style scoped>
.active {
  background: #2F01F0
}
</style>

