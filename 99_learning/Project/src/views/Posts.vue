<template>
  <div class="posts">
    <h1>Todos</h1>
    <div v-if="loading">Loading...</div>
    <div v-for="post in getPosts" :key="post.id">
        <router-link :to="{ name: 'post', params: { id: post.id } }">
        [ID: {{post.id}}] {{post.text | summary}}
        </router-link>
    </div>  
    <router-view></router-view>
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      loading: false,
    }
  },
  created() {
    this.fetchData()
  },
  filters: {
    summary(val) {
      return val.substring(0, 20) + '...'
    }
  },
  computed: { ...mapGetters(['getPosts']) },
  methods: {
    fetchData() {
      this.loading = true;
      this.$store.dispatch('loadPosts');
      this.loading = false;
    }
  }
}
</script>