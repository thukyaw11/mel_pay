<template>

  <b-col sm="12"
         md="9"
         xs="12"
         lg="9"
         style="font-family: 'Myanmar Sans Pro', sans-serif;"
         class="content">
    <b-row id="intention_container" align-v="center">
      <b-col sm="12" xs="12" md="7" lg="7">
        <b-row no-gutters>
          <b-col cols="3" class="intention_imageContainer">
            <img src="@/assets/intentionImage/V-boy.png" alt="" class="intention_vote_image">
          </b-col>
          <b-col cols="3"
                 class="intention_imageContainer"> <img src="@/assets/intentionImage/O-girl.png" alt="" class="intention_vote_image">
          </b-col>
          <b-col cols="3"
                 class="intention_imageContainer"> <img src="@/assets/intentionImage/T-girl.png" alt="" class="intention_vote_image">
          </b-col>
          <b-col cols="3"
                 class="intention_imageContainer"> <img src="@/assets/intentionImage/E-boy.png" alt="" class="intention_vote_image">
          </b-col>
        </b-row>
      </b-col>

      <b-col sm="12" xs="12" md="5" lg="5">
        <div class="intention_text">
          <h3 id="heading">ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်</h3>
          <p id="intention_para">
            ဒီမိုကရေစီ၏ အနှစ်သာရနှင့် အကျိုးတရားကို သိရှိနိုင်ရန်။
            <br />လူတစ်ဦးချင်း၏ အခွင့်အရေးနှင့် တာဝန်ကို နားလည်နိုင်ရန်။
            <br />မဲဆန္ဒရှင်တစ်ဦး၏ မဲပေးခွင့်ကို ကောင်းစွာနားလည်နိုင်စေရန်။
            <br />
          </p>
        </div>

      </b-col>

    </b-row>
    <br>
    <br>
    <div id="divider_line"></div>
    <br>
    <b-row align-h="center" class="text-center">
      <b-col sm="12" xs="12" md="3" lg="3" class="intention_quote">I am a voter! We all are voters!</b-col>
      <b-col sm="12" xs="12" md="4" lg="4" class="intention_quote">Voting is showing our political Participation!</b-col>
      <b-col sm="12" xs="12" md="3" lg="3" class="intention_quote">Voting is showing people's power!</b-col>
    </b-row>
    <br>

    <div id="divider_line"></div>
    <br>

    <b-row align-h="center" class="text-center">
      <b-col sm="12" xs="12" md="8" lg="8">
        <router-link :to="{ name: 'Content'}">
        <b-row class="see_more_content">
          <b-col sm="12" xs="12" md="9" lg="9" class="see_more_text">သိထားသင့်သည်များ</b-col>
          <b-col cols="3" class="d-none d-md-block">
            <img src="@/assets/intentionImage/see_more_image.png" alt="" class="see_more_image">
          </b-col>
        </b-row>
        </router-link>
      </b-col>
      <b-col sm="12" xs="12" md="8" lg="8">
        <router-link :to="{ name: 'Party' }">
        <b-row class="see_more_content">
          <b-col sm="12" xs="12" md="9" lg="9" class="see_more_text">နိုင်ငံရေးပါတီများ</b-col>
          <b-col cols="3" class="d-none d-md-block">
            <img src="@/assets/intentionImage/see_more_image.png" alt="" class="see_more_image">
          </b-col>
        </b-row>
        </router-link>
      </b-col>
      <b-col sm="12" xs="12" md="8" lg="8">
        <router-link :to="{ name: 'ElectionResultLists' }">
        <b-row class="see_more_content">
          <b-col sm="12" xs="12" md="9" lg="9" class="see_more_text">ရွေးကောက်ပွဲရလဒ်များ</b-col>
          <b-col cols="3" class="d-none d-md-block">
            <img src="@/assets/intentionImage/see_more_image.png" alt="" class="see_more_image">
          </b-col>
        </b-row>
        </router-link>
      </b-col>
    </b-row>
    <!-- <router-link :to="{name: 'Content'}">
      <div class="view_container">
        <div class="view_background"></div>
        <div class="view_text"></div>
      </div>
    </router-link>
    <router-link :to="{name: 'Party'}">
      <div class="view_container">
        <div class="view_background"></div>
        <div class="view_text"></div>
      </div>
    </router-link> -->

    <br />
    <br />
  </b-col>

</template>

<style>
.see_more_text{
  min-height: 70px;
  line-height: 70px;
}
.see_more_image{
  width: 100%;
  height: 90%;
}
.see_more_content{
  margin: 10px;
  border-radius: 5px;
  background: #2a78fb;
  color: white;
  height: 70px;
}
.intention_text{
  margin-top: 20px;
}
  .intention_imageContainer {
    height: 100px;
    width: 100%;
  }
  .intention_vote_image {
    width: 80%;
    height: 100%;
  }
  #heading {
    text-align: center;
  }
  #intention_para {
    text-align: center;
    line-height: 40px;
  }
  #divider_line {
    background: black;
    width: 20%;
    height: 4px;
    margin: 0 auto;
  }

  .intention_quote {
    margin: 10px;
    border-radius: 5px;
    min-height: 70px;
    background: #2a78fb;
    color: white;
    line-height: 70px;
  }
  .view_container {
    width: 100%;
    border-radius: 5px;
    height: 150px;
    margin-top: 20px;
    position: relative;
    cursor: pointer;
  }
  .view_background {
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/parties.png');
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(2px);
    -webkit-filter: blur(2px);
  }
  .view_text {
    position: absolute;
    top: 40%;
    left: 70px;
    font-size: 30px;
  }

  @media screen and (max-width: 400px) {
    .intention_quote {
      width: 100%;
    }
    #intention_quote_container {
      height: 270px;
    }
  }

</style>
