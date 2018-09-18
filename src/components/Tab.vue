<template>
  <button
    :class="[isActive, 'btn']"
    @click="Submit()">{{ label }}</button>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: '',
    },
    clickedId: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    isActive() {
      return this.clickedId === this.id ? 'active' : false;
    },
  },
  methods: {
    Submit() {
      this.$emit('input', this.id);
    },
  },
};
</script>

<style scoped>
.active {
  background: #2f01f0;
}
</style>
