<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;">
    <div class="knowledge_box">
      <h3>
        <span @click="$router.go(-1)" class="link">{{content.roomid}}</span>
        / {{content.childroomid}}
      </h3>
    </div>
    <div class="knowledge_box">
      <b-row>
        <b-col sm="12" md="6" xs="12" lg="6">
          <div class="contentImageContainer">
            <img
              src="@/assets/images/whoarewe.png"
              alt="law"
              class="content_image"
              @click="active=!active"
            />
          </div>
        </b-col>
        <b-col sm="12" md="6" xs="12" lg="6">
          <b-row style="padding:13px">
            <facebook-button shareDescription="Where" :url="getShareableUrl()"></facebook-button>
            <messanger-button shareDescription="Where voters meet" :url="getShareableUrl()"></messanger-button>
            <vs-dialog not-close auto-width not-padding v-model="active">
              <div class="con-image">
                <img src="@/assets/images/whoarewe.png" style="width:100%;height:100%"/>
              </div>
            </vs-dialog>
          </b-row>
        </b-col>
      </b-row>
      <br />
      <p v-html="content.content[0].roomContent"></p>
    </div>
  </b-col>
</template>


<script>
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import MessangerButton from "vue-share-buttons/src/components/FacebookMessengerButton";
export default {
  data(){
    return{
      active : false
    }
  },
  computed: {
    content() {
      return this.$route.params;
    },
  },
  components: {
    MessangerButton,
    FacebookButton,
  },
  methods: {
    getShareableUrl() {
      return `https://melpayv2.netlify.app/#/content/${this.content.roomid}/${this.content.childroomid}`;
    },
  },
};
</script>

<style scoped>
.contentImageContainer {
  width: 100%;
  height: 250px;
  border-radius: 10px;
}
.link {
  color: blue;
}
.link:hover {
  text-decoration: underline;
}
.content_image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>