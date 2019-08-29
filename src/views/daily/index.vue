<template>
  <div>
    <hgroup>
      <h1>每日修行系列</h1>
      <h2>{{ date }} {{ title }}</h2>
    </hgroup>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      date: '1997-06-19',
      title: '每日修行标题'
    }
  },
  mounted() {
    this.date = this.$route.meta.date
    this.title = this.$route.meta.title
  }
}
</script>

<style scoped></style>
