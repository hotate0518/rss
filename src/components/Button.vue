<template>
  <button
    class="btn bg-primary"
    @click="Submit()">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: true,
      default: () => {},
    },
  },
  methods: {
    Submit() {
      this.$emit('click');
    },
  },
};
</script>
