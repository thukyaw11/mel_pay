<template>
  <b-col sm="12" md="3" xs="12" lg="3">
    <div class="welcome_box">
      <span v-for="(sideBarList,index) in sideBarListing" :key="index">
        <vs-button block :to="{name : sideBarList.link}" class="vs-btn">
          <i class="btn_icon" :class="sideBarList.icon"></i>
          <span style="font-size:15px;font-family: 'Myanmar Sans Pro', sans-serif;">{{sideBarList.text}}</span>
        </vs-button>
      </span>
      <b-row>
        <div style="margin:0 auto">
          <span v-for="(icons,index) in iconListing" :key="index">
          <vs-button circle icon flat class="outlineN" style="float:left">
            <i :class="icons"></i>
          </vs-button>
          </span>
        </div>
      </b-row>
    </div>
    <div class="welcome_box" style="text-align:center;cursor:pointer;margin-top:10px">
      <i class="fas fa-hands-helping" style="font-size: 30px;color:grey;"></i>
      <h3 style="margin-top:10px;font-family: 'Myanmar Sans Pro', sans-serif;">ပါဝင်ကူညီရန်</h3>
    </div>
    <br />

  </b-col>
</template>
<script>
export default {
  data() {
    return {
      sideBarListing: [
        {
          text: "ပင်မစာမျက်နှာ",
          link: "Home",
          icon: "fas fa-home"
        },
        {
          text: "ရည်ရွယ်ချက်",
          link: "Party",
          icon: "fas fa-award"
        },
        {
          text: "ပါတီစာရင်း",
          link: "Party",
          icon: "fas fa-stream"
        },
        {
          text: "သိထားသင့်သည်များ",
          link: "Content",
          icon: "fas fa-book-reader"
        },

        {
          text: "ရွေးကောက်ပွဲရလဒ်များ",
          link: "Party",
          icon: "fas fa-poll-h"
        }
      ],
      iconListing: ["fab fa-facebook","fas fa-globe","fas fa-question-circle"]
    };
  }
};
</script>
<style scoped>

@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);

.welcome_box {
  height: auto;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 10px 19px 10px 10px;
}
.vs-btn {
  outline: none;
  padding: 7px;
  margin: 20px 0px;
}
.outlineN{
  outline: none;
}

</style>