<template>
  <div>
    <b-col sm="12" md="12" xs="12" lg="12">
      <div class="welcome_box">
        <span v-for="(sideBarList,index) in sideBarListing" :key="index">
          <vs-button block :to="sideBarList.link" class="vs-btn" v-show="!sideBarList.mobile">
            <i class="btn_icon" :class="sideBarList.icon"></i>
            <span
              style="font-size:15px;font-family: 'Myanmar Sans Pro', sans-serif;"
            >{{sideBarList.text}}</span>
          </vs-button>
        </span>
        <b-row>
          <div style="margin:0 auto">
            <span v-for="(icons,index) in iconListing" :key="index">
              <a :href="icons.link" style="text-decoration:none;" target="_blank">
                <vs-button circle icon flat class="outlineN" style="float:left">
                  <i :class="icons.icon"></i>
                </vs-button>
              </a>
            </span>
          </div>
        </b-row>
      </div>
      <router-link to="/survey">
        <div class="welcome_box" style="text-align:center;cursor:pointer;margin-top:10px">
          <i class="fas fa-hands-helping" style="font-size: 30px;color:grey;"></i>
          <h3 style="margin-top:10px;font-family: 'Myanmar Sans Pro', sans-serif;">ပါဝင်ကူညီရန်</h3>
        </div>
      </router-link>
      <br />
    </b-col>

    <!-- side bar start -->

    <div id="sideBar" class="navBar">
      <vs-button @click="closeSideBar" flat icon style="float:left">
        <i class="fas fa-bars"></i>
      </vs-button>
      <p style="float:left;padding:10px;font-weight:bold;">မဲပေးကြစို့</p>
    </div>
      <vs-sidebar v-model="active" :open.sync="activeSidebar" id="side">
        <span v-for="(sideBarList,index) in sideBarListing" :key="index" @click="closeSideBar">
          <vs-sidebar-item id="home" :to="{name : sideBarList.link}" class="vs-btn">
            <i class="btn_icon" :class="sideBarList.icon"></i>
            <span
              style="font-size:15px;font-family: 'Myanmar Sans Pro', sans-serif;"
            >{{sideBarList.text}}</span>
          </vs-sidebar-item>
        </span>

        <template #footer>
          <span v-for="(icons,index) in iconListing" :key="index">
            <a :href="icons.link" style="text-decoration:none;" target="_blank">
              <vs-button circle icon flat class="outlineN" style="float:left">
                <i :class="icons.icon"></i>
              </vs-button>
            </a>
          </span>
        </template>
      </vs-sidebar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      active: "home",
      activeSidebar: false,
      sideBarListing: [
        {
          text: "ပင်မစာမျက်နှာ",
          link: "Home",
          icon: "fas fa-home",
        },
        {
          text: "ရည်ရွယ်ချက်",
          link: "Intention",
          icon: "fas fa-award",
        },
        {
          text: "သိထားသင့်သည်များ",
          link: "Content",
          icon: "fas fa-book-reader",
        },
        {
          text: "နိုင်ငံရေးပါတီများ",
          link: "Party",
          icon: "fas fa-stream",
        },
        {
          text: "ရွေးကောက်ပွဲရလဒ်များ",
          link: "ElectionResultLists",
          icon: "fas fa-poll-h",
        },
                {
          text: "ပါဝင်ကူညီရန်",
          link: "Survey",
          icon: "fas fa-handshake",
          mobile: true
        },
      ],
      iconListing: [
        {
          icon: "fab fa-facebook",
          link:
            "https://www.facebook.com/Mobile-Free-Education-Centre-1729345437330749/",
        },
        {
          icon: "fas fa-globe",
          link: "http://mobileducenter.org",
        },
        {
          icon: "fas fa-envelope",
          link: "mailto:mobilefree.education@gmail.com",
        },
      ],
    };
  },
  methods: {
    closeSideBar() {
      this.activeSidebar = !this.activeSidebar;
    },
  },
};
</script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);

.welcome_box {
  height: auto;
  background: #f8f8f8;
  border-radius: 10px;
  padding: 10px 19px 10px 10px;
}
.vs-btn {
  outline: none;
  padding: 4px;
  margin: 20px 0px;
}

.navBar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 1;
  margin-bottom: 190px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  overflow: hidden;
}
.outlineN {
  outline: none;
}
@media screen and (max-width: 400px) {
  .welcome_box{
    display: none;
  }
  #sideBar {
    display: block;
  }
  #side {
  height: 100%;
  top: 0;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  }
  .content {
    margin-top: 50px;
  }
}
@media screen and (min-width: 400px) {
  #sideBar {
    display: none;
  }
  .welcome_box{
    display: block;
  }
}
</style>
