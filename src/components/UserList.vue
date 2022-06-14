<template>
  <ul>
    <li>
      <slot v-for="user in users" :key="user.id" :user="user"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>