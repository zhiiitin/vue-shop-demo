<template>
  <div class="hello">
    <a href="#" @click.prevent="signOut">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    signOut() {
      const api = `${process.env.VUE_APP_API_PATH}/logout`;
      const vm = this;
      this.$http.post(api).then(function (response) {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
