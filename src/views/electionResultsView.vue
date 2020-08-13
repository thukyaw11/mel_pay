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
        <span @click="$router.go(-1)" class="link">{{contentFinal.year}} / {{contentFinal.content}}</span>
      </h3>
    </div>

    <div id="pdf_image_container">
      <div class="pdf_image" v-for="(pdf,index) in contentFinal.pdfs" :key="index" @click="downloadFile(contentFinal.year,contentFinal.content,pdf)">
        <div class="image_container">
          <img src="../assets/pdfdownload.jpg" alt="download" class="pdf_img">
        </div>
        <div class="text_container"><p class="pdf_text">
          {{pdf.pdfText}}</p></div>
      </div>

    </div>
  </b-col>
</template>
<script>
import pdfDownloadMixin from '../mixins/pdfDownloadMixin'
export default {
  mixins: [pdfDownloadMixin],
  computed: {
    contentFinal() {
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