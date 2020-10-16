<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;" class="content">
    <div class="knowledge_box">
      <h3>{{contentList.roomid}}</h3>
    </div>
    <b-row>
        <b-col sm="12" md="4" xs="12" lg="4" v-for="(content,index) in contentList.child[0].children" :key="index">
          <router-link :to="{ name: 'ContentView', params: {roomid: contentList.roomid, childroomid: content.text}}">
          <div class="knowledge_box height_fix">
            <span class="box_content_row">
              <i class="fas fa-balance-scale icon-fade"></i>
              <h5>{{content.text}}</h5>
            </span>
          </div>
          </router-link>
        </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  computed: {
    contentList() {
      console.log(this.$route.params)
      return this.$route.params;
    }
  }
};
</script>
