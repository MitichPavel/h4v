<template>
  <div class="main-layout">
    <nav class="navbar">
      <div class="wrap-navbar">
        <ul class="menu">
          <li class="menu-item">
            <a href="/" class="menu-link">
              Help4vet
            </a>
          </li>
          <li class="menu-item active">
            <a href="/cases" class="menu-link">
              zdjęcia RTG
            </a>
          </li>
        </ul>
        <div class="user-menu">
          <img src="./../assets/images/user.svg" class="user-icon" alt="user icon">
          <div class="user-menu-item">Login</div>
        </div>
      </div>
    </nav>

    <main class="app-content">
      <div class="app-page">
        <Sidebar />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar.vue';

export default {
  components: {
    Sidebar,
  }
}
</script>

<style scoped>
/* Navbar */
.navbar {
  background-color: #1E2832;
}

.wrap-navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  max-width: 1980px;
  min-height: auto;
  padding: 17px 0 0 0;
  margin: 0 auto;
  color: #fff;
}

/* Menu */
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
  width: 16vw;
  min-width: 170px;
  max-width: 300px;
  height: 100%;
}

.menu .menu-item .menu-link {
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 16px 0;
  color: #fff;
  text-decoration: none;
}

.menu .menu-item.active .menu-link {
  pointer-events: none;
}

.menu .menu-item.active .menu-link::after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: '';
  width: 100%;
  height: 7px;
  background-color: #FFDC1E;
}

/* User menu */
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
  position: relative;
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
  max-width: 1980px;
  padding: 0;
  margin: 0 auto;
}

.app-page {
  display: grid;
  grid-template-columns: 380px 1fr;
}

@media only screen and (max-width:1600px) {
  .app-page {
    grid-template-columns: 250px 1fr;
  }
}

@media only screen and (max-width:1280px) {
  .app-page {
    grid-template-columns: 200px 1fr;
  }
}
</style>
