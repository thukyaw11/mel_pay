<template>
  <b-col sm="12" md="9" xs="12" lg="9" class="home content">
    <b-row>
      <b-col sm="12" md="6" xs="12" lg="6" style="margin-top:10px" class="data_box">
        <div class="data_inner" style="text-align:center;font-size:20px">
          <div>
            အထွေထွေ ရွေးကောက်ပွဲကျင်းပရန်
            <div style="width:100%;margin: 0 auto;">
              <countdown date="2020-11-08 06:00:00"></countdown>
            </div>သာလိုတော့သည်။
          </div>
        </div>
      </b-col>

      <b-col sm="12" md="6" xs="12" lg="6" style="margin-top:10px" class="data_box">
        <div class="data_inner" style="text-align:center">
          <h3 class="card_title">Mobile Education Center</h3>
          <p
            class="card_text"
          >မှ ရေးသားပြုစုထုတ်ဝေပါသည်။ နည်းပညာနှင့် အိုင်ဒီယာကို သင်တန်းကျောင်းမှ ဆရာ ကိုရဲမင်း၊ ဆရာမ မမြတ်ဆု၊ ဆရာလေး ကိုမင်းသူကျော်တို့မှဦးဆောင်ပြီး သင်တန်းသားများ၏ စုပေါင်းအားထုတ်ကြိုးပမ်းမှုပင်ဖြစ်ပါသည်။</p>
          <div style="width:25%; margin:0 auto;">
            <vs-button>
              Contact Us
              <template #animate>
                <i class="fab fa-facebook"></i>
              </template>
            </vs-button>
          </div>
        </div>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col sm="12" md="6" xs="12" lg="6">
        <div style="background: none">
          <h3 class="card_title right">Who are we?</h3>
          <p class="right">ကျွန်ုပ်တို့ MOBILE သင်တန်းကျောင်းသည် တောင်ဥက္ကလာပ မြို့နယ်တွင် တည်ရှိပါသည်။ ကျွန်ုပ်တို့ MOBILE သင်တန်း ကျောင်း၏ ယုံကြည်ချက်မှာ လူမှုရေးဖွံ့ဖြိုးတိုးတက်မှုနှင့် အသိပညာဖွံ့ဖြိုး တိုးတက်မှုသည် ကျယ်ပြန့်သော လူမှုဖွံ့ဖြိုး တိုးတက်မှု၏ အရေးကြီးသော ကဏ္ဍ၊ အစိတ်အပိုင်းများဖြစ်သည်ဟု ယုံကြည်ခြင်းပင်ဖြစ်သည်။ ကျွန်ုပ်တို့ MOBILE သင်တန်းကျောင်း ကို ၂၀၀၈ ခုနှစ်တွင်တည်ထောင်ခဲ့သည်။ ကျွန်ုပ်တို့၏ လူမှုအသိုင်းအဝိုင်းကို ပိုမိုတိုးတက်အောင် ပြုလုပ် လိုသောကြောင့် ကျွန်ုပ်တို့ MOBILE သင်တန်းကျောင်းမှ ကွန်ပျူတာသင်တန်းများ၊ ဘာသာစကားသင်တန်းများ၊ ဝေဖန် ဆန်းစစ်နိုင်မှုများ၊ တီထွင်ဖန်တီးနိုင်မှုဆိုင်ရာ တွေးခေါ်နိုင်မှုစွမ်းရည်များ တိုးတက်လာစေရန်နှင့် လူငယ်စွမ်းဆောင်ရည် မြှင့်တင်မှုအစီအစဉ်များကို ဆောင်ရွက်ပေးလျှက်ရှိပါသည်။</p>
        </div>
      </b-col>
      <b-col sm="12" md="6" xs="12" lg="6">
        <div class="data_box">
          <img src="@/assets/images/whoarewe.jpg" alt="whoarewe" style="height: 300px;width:90%" />
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>


<script>
import countdown from "../components/countdown";
export default {
  components: {
    countdown
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);

.home {
  font-family: "Myanmar Sans Pro", sans-serif;
}
</style>