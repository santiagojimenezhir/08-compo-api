<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ title }}</h3>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script lang="javascript">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  ref,
} from "vue";
export default {
  setup() {
    const title = ref("About");
    console.log("Created ");

    onBeforeMount(() => {
      console.log("OnbeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onRenderTriggered(() => {
      console.log("onRenderTriggered");
    });
    onActivated(() => {
      console.log("onActivated");
    });
    onDeactivated(() => {
      console.log("onDeactivated");
    });
    return {
      title,
      changeTitle: () => (title.value = "New About"),
    };
  },
};
</script>
