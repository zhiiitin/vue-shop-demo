<template>
    <div>
        <form class="form-signin" @submit.prevent="signIn">
            <h1 class="h3 mb-3 fw-normal">請先登入</h1>
            <div class="form-floating">
                <input v-model="user.username" type="email" class="form-control" id="floatingInput"
                    placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input v-model="user.password" type="password" class="form-control" id="floatingPassword"
                    placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        signIn() {
            const api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
            const vm = this;
            this.$http.post(api, vm.user).then(function (response) {
                if (response.data.success) {
                    const token = response.data.token;
                    const expired = response.data.expired;
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
                    vm.$router.push('/admin/products');
                }
            });
        },
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
  