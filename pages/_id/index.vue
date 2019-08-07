<template>
  <div class="page-component">
    <h1>{{page.fields.title}}</h1>
    <hr/>
    <!-- <img :src="page.fields.image.fields.file.url" :alt="page.fields.heading" v-if="page.fields.image" /> -->
    <p v-html="$md.render(page.fields.content)"></p>
  </div>
</template>

<script>
  import {createClient} from '../../plugins/contentful';
  const contentfulClient = createClient();

  export default {
    name: 'index',
    asyncData ({ env, params }) {
      return contentfulClient.getEntries({
        'content_type': 'page',
        'fields.slug': params.id
      }).then(page => {
        return {
          page: page.items[0]
        }
      }).catch(console.error)
    }
  }
</script>

<style lang="scss">
  hr {
    margin:20px 0;
  }
  .v-application {
    code {
      padding: 20px 20px 0 20px;
      background-color: #282c34;
      color: #abb2bf;
      margin: 0px 0 20px 0;
    }
    code:before {
      content: "";
    }
  }
  .page-component {
    padding: 50px;
    max-width:1280px;
    margin: 0 auto;
    img {
      margin: 50px 0;
    }
  }
</style> 
