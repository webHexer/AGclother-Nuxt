<template>
  <header :class="showMenu ? 'header open' : 'header'">
    <div v-show="showMenu" class="overlay">
      <NuxtLink to="/" class="header__logo"
        ><span>AG</span><span>CLOTHER</span></NuxtLink
      >
      <div class="header__mobile__links">
        <NuxtLink to="/">Men</NuxtLink>
        <NuxtLink to="/">Women</NuxtLink>
        <NuxtLink to="/">Kids</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">Sign In / Sign Up</NuxtLink>
        <NuxtLink to="/">Whislist</NuxtLink>
        <NuxtLink to="/">Cart</NuxtLink>
      </div>
    </div>

    <nav class="header__nav">
      <NuxtLink to="/" class="header__logo">
        <span>AG</span>
        <span>CLOTHER</span>
      </NuxtLink>

      <!-- hamburger button -->
      <div class="header__hamburger hide-in-desktop" @click="openMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="header__west-side-container hide-in-mobile">
        <NuxtLink to="/">Men</NuxtLink>
        <NuxtLink to="/">Women</NuxtLink>
        <NuxtLink to="/">Kids</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="header__east-side-container hide-in-mobile">
        <div class="header__east-side-container__search-box">
          <span><i class="fas fa-search"></i></span>
          <input
            type="text"
            name="search"
            placeholder="Search by product, category or collection"
            class="header__east-side-container__search-box__input-box"
          />
        </div>
        <span class="header__east-side-container__divider">|</span>
        <NuxtLink to="/"><i class="fas fa-user"></i></NuxtLink>
        <NuxtLink to="/"><i class="fas fa-heart"></i></NuxtLink>
        <NuxtLink to="/"><i class="fas fa-shopping-bag"></i></NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      showMenu: false,
    }
  },

  methods: {
    openMobileMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
