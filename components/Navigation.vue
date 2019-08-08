<template>
  <div class="navigation">
    <nav>
      <ul role="menu">
        <li><nuxt-link to="/">Welcome</nuxt-link></li>
        <li v-for="(navItem, index) in navItems" :key="index">
          <nuxt-link :to="'/' + navItem.fields.slug.trim()" role="menuitem">
          {{navItem.fields.title}}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Navigation',
    computed: {
      ...mapState('navigation', [
        'navItems'
      ])
    },
    mounted() {
      this.$store.dispatch("navigation/getPageItems");
    }
  }
</script>

<style lang="scss" scoped>
  .navigation {
    padding: 50px 0;
    ul {
      margin:0;
      list-style:none;
    }
    li {
      padding: 5px 10px;
    }

    a {
      color:#333;
      text-decoration: none;
    }
    a:hover {
      color: #73aa4a;
    }

  }
</style>


