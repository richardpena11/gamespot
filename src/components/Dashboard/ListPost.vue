<template>
  <div>
    
    <md-table>
      <md-table-row>
        <md-table-head>Title</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Rating</md-table-head>
        <md-table-head>Action</md-table-head>
      </md-table-row>

      <md-table-row v-for="(post, index) in posts" :key="index">
        <md-table-cell>{{post.title}}</md-table-cell>
        <md-table-cell>{{post.desc}}</md-table-cell>
        <md-table-cell>{{post.rating}}</md-table-cell>
        <md-table-cell>
          <div class="post_delete" @click="deleteHandler(post.id)">
            Delete
          </div>
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-dialog-confirm
      :md-active.sync="confirmDelete"
      md-title="Confirm delete"
      md-content="Are you sure you want to delete this post? (There is no turning back)"
      md-confirm-text="Yes, Delete"
      md-cancel-text="NO, do no delete it"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />

  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmDelete: false,
      toDelete: ''
    }
  },

  computed:{
    posts(){
      let posts = this.$store.getters['admin/getAdminPosts']
      return posts
    }
  },

  methods: {
    deleteHandler(id){
      this.confirmDelete = true
      this.toDelete = id
    },

    onConfirm(){
      //// Delete post
      this.$store.dispatch('admin/deletePost', this.toDelete)
      this.confirmDelete = false
    },

    onCancel(){
      this.toDelete = ''
      this.confirmDelete = false
    }
  },

  created(){
    this.$store.dispatch('admin/getAdminPosts')
  }
}
</script>

<style>

</style>