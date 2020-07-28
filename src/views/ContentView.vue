<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;">
    <div class="knowledge_box">
      <h3>
        <span @click="$router.go(-1)" class="link">{{content.roomid}}</span>
        / {{content.childroomid}}
      </h3>
    </div>
    <div class="knowledge_box">
      <p v-html="content.content[0].roomContent"></p>
      <facebook-button shareDescription="Where" :url="getShareableUrl()"></facebook-button>
      <messanger-button shareDescription="Where voters meet" :url="getShareableUrl()"></messanger-button>
    </div>
  </b-col>
</template>


<script>
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import MessangerButton from "vue-share-buttons/src/components/FacebookMessengerButton";
export default {
  computed: {
    content() {
      return this.$route.params;
    }
  },
  components: {
    MessangerButton,
    FacebookButton
  },
  methods:{
    getShareableUrl(){
      return `https://melpayv2.netlify.app/content/${this.content.roomid}/${this.content.childroomid}`
    }
  }
};
</script>

<style scoped>
.link {
  color: blue;
}
.link:hover {
  text-decoration: underline;
}
.content_image {
  width: 100%;
  margin: 0 auto;
  height: 250px;
}
</style>