<template>
  <button class="btn bg-primary" @click="Submit()">{{label}}</button>
</template>

<script>
export default {
  props: {
    label:{}
  },
  methods: {
    Submit() {
      this.$emit("click");
    }
  }
}
</script>

