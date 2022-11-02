<template>
  <nav class="navbar">
    <div class="wrap-navbar">
      <ul class="menu">

        <router-link
          v-for="link in links"
          :to="link.url"
          :key="link.url"
          custom
          v-slot="{ href, isActive, navigate }"
          >
          <li
            class="menu-item"
            :class="{ active : isActive }"
          >
            <a :href="href" class="menu-link" @click="navigate">
              {{ link.title }}
            </a>
          </li>
        </router-link>
      </ul>
      <div
        v-if="!isLogin"
        class="user-menu"
      >
        <router-link
          to="/login"
          custom
          v-slot="{ href, isActive, navigate }"
          >
          <div
            class="item"
            :class="{ active : isActive }"
          >
            <a :href="href" class="link" @click="navigate">
              <img src="@/assets/images/svg/user.svg" class="user-icon" alt="user icon">
              <div class="login">Login</div>
            </a>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Help4vet', url: '/', exact: true,},
        {title: 'Zdjęcia RTG', url: '/cases',},
      ],
      isLogin: true,
    };
  },
};
</script>

<style>
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
  font-size: 18px;
  font-weight: 500;
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

.user-menu .item {
  display: block;
  box-sizing: border-box;
  width: 70px;
  padding: 0;
  margin: 0;
}

.user-menu .item .link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}

.user-menu .item .link .user-icon {
  box-sizing: border-box;
  width: 21px;
  height: 21px;
}
</style>
