<template>
  <div class="main-layout">
    <div class="wrap-navbar">
      <nav class="navbar">
        <ul class="menu">
          <li class="menu-item active">
            Help4vet
          </li>
          <li class="menu-item">
            zdjęcia RTG
          </li>
        </ul>
        <div class="user-menu">
          <img src="./../assets/images/user.svg" class="user-icon" alt="user icon">
          <div class="user-menu-item">Login</div>
        </div>
      </nav>
    </div>

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
// Navbar
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 17px 0 0 0;
  margin: 0;
  min-height: auto;
  width: 100%;
  background-color: #1E2832;
  color: #fff;
}

// Menu
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.menu .menu-item {
  position: relative;
  box-sizing: border-box;
  width: 250px;
  padding: 0 0 16px 0;
  background-color: #1E2832;
  cursor: pointer;
}

.menu .menu-item.active::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  width: 100%;
  height: 10px;
  background-color: #FFDC1E;
}

// User menu
.user-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 75px;
  padding: 0;
  margin: 0 20px 0 0;
  cursor: pointer;
}

.user-menu-item {
  display: block;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.user-icon {
  box-sizing: border-box;
  width: 21px;
  height: 21px;
}

.app-content {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
