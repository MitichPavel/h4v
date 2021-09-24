<template>
  <div class="login">
    <div class="wrap-login">
      <form action="#" class="login-form">
        <input class="username" type="text" placeholder="Wprowadź nazwę użytkownika">
        <input class="password" type="password" placeholder="Wprowadź hasło">
        <Button class="submit" type="sybmit">Zlogować się</Button>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  components: { Button },
}
</script>

<style scoped>
.login {
  height: calc(100vh - 55px);
  width: 100vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login .login-form {
  width: 200px;
  display: grid;
  grid-gap: 20px;
  justify-items: center;
}

.login .login-form .username,
.login .login-form .password {
  width: 100%;
  padding: 4px;
}
</style>
