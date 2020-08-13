<template>
  <b-col
    sm="12"
    md="9"
    xs="12"
    lg="9"
    style="font-family: 'Myanmar Sans Pro', sans-serif;"
    class="content"
  >
    <div id="intention_threeline">
      <h3 id="heading">ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်</h3>
      <p id="intention_para">
        ဒီမိုကရေစီ၏ အနှစ်သာရနှင့် အကျိုးတရားကို သိရှိနိုင်ရန်။
        <br />လူတစ်ဦးချင်း၏ အခွင့်အရေးနှင့် တာဝန်ကို နားလည်နိုင်ရန်။
        <br />မဲဆန္ဒရှင်တစ်ဦး၏ မဲပေးခွင့်ကို ကောင်းစွာနားလည်နိုင်စေရန်။
        <br />
      </p>
    </div>
    <div id="divider_line"></div>
    <div id="intention_quote_container">
      <div class="intention_quote">I am a voter! We all are voters!</div>
      <div class="intention_quote">Voting is showing our political Participation!</div>
      <div class="intention_quote">Voting is showing people's power!</div>
    </div>
    <div id="divider_line"></div>
    <router-link :to="{name: 'Content'}">
      <div class="view_container">
        <div class="view_background"></div>
        <div class="view_text">သိထားသင့်သည်များ</div>
      </div>
    </router-link>
    <router-link :to="{name: 'Party'}">
      <div class="view_container">
        <div class="view_background"></div>
        <div class="view_text">နိုင်ငံရေးပါတီများ</div>
      </div>
    </router-link>

    <br />
    <br />
  </b-col>
</template>

<style>
#intention_threeline {
  width: 100%;
  height: auto;
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
#intention_quote_container {
  width: 100%;
  height: 90px;
  margin-top: 20px;
}
.intention_quote {
  margin: 10px;
  width: 31%;
  float: left;
  border-radius: 5px;
  height: 70px;
  background: #2a78fb;
  padding: 11px;
  text-align: center;
  color: white;
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
  background-image: url("../assets/images/parties.png");
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