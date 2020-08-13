<template>
  <b-col
    sm="12"
    md="9"
    xs="12"
    lg="9"
    style="font-family: 'Myanmar Sans Pro', sans-serif;"
    class="content"
  >
    <div class="knowledge_box">
      <h3>
        <span @click="$router.go(-1)" class="link">{{electionListing.year[0].electionYear}}</span>
      </h3>
    </div>
    <div v-for="(electionList,index) in electionListing.year[0].childContent" :key="index" >
      <div v-if="electionList.downloadAblePdfs">
        <div class="knowledge_box">
        <router-link :to="{name: 'ElectionResultListView',params: {content: electionList.childContentTitle, year: electionListing.year[0].electionYear, pdfs : electionList.downloadAblePdfs}}">
      <span class="box_content_row">
        <i class="fas fa-gavel icon-fade"></i>
        <h3>{{electionList.childContentTitle}}</h3>
      </span>
      </router-link>
      </div>
      </div>
      <div v-else>
            <div id="pdf_image_container" @click="downloadFile(null,null,'individual')">
      <div class="pdf_image">
        <div class="image_container">
          <img src="../assets/pdfdownload.jpg" alt="download" class="pdf_img">
        </div>
        <div class="text_container"><p class="pdf_text">
          {{electionList.childContentTitle}}</p></div>
      </div>

    </div>
  
      </div>
    </div>

  </b-col>
</template>

<script>
import pdfdownloadMixin from '../mixins/pdfDownloadMixin'
export default {
  mixins: [pdfdownloadMixin],
  computed: {
    electionListing() {
      return this.$route.params;
    },
  },
};
</script>


<style scoped>
.pdf_text{
  padding: 10px;
}
.pdf_img{
  width: 100%;
  height: 100%;
}
#pdf_image_container {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  cursor: pointer;
}
.pdf_image {
  width: 31%;
  margin: 10px;
  height: 80px;
  float: left;
}
.image_container {
  width: 30%;
  height: 70px;
  margin: 5px;
  float: left;
}
.text_container {
  width: 63%;
  float: left;
  height: 70px;
  margin: 5px;
}

.link {
  color: blue;
}
.link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 400px) {
  #pdf_image_container{
    height: 300px;
  }
  .pdf_image{
    width: 100%;
    margin: 10px 0px;
  }
}
</style>