<template>
  <button
    :class="[isActive, 'btn', 'tab-btn']"
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
    value: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    isActive() {
      return this.value === this.id ? 'active' : false;
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
.tab-btn {
  border: #6699FF solid;
  background-color: wheat;
}
.active {
  background: #6699FF;
}
</style>
