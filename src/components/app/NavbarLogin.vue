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
              {{link.title}}
            </a>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'Help4vet', url: '/',},
      ],
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
</style>
