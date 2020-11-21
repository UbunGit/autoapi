<template>
  <div>
    <div class="header">
      <router-link to="/">内容</router-link> |
      <router-link to="/about">设置</router-link>|
      <router-link to="/develop">开发者</router-link>
    </div>
    <div class="content">
    <router-view />
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.header {
  padding: 30px;
}

.header a {
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  color: #42b983;
}
.content{
  margin: 10px;
}

</style>