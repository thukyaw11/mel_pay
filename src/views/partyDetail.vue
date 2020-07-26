<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;" class="partyDetail">
    <b-row>
      <b-col sm="1" md="1" xs="1" lg="1">
        <vs-button icon @click="$router.go(-1)" class="outlineN">
          <i class="fas fa-arrow-left"></i>
        </vs-button>
      </b-col>
      <b-col sm="11" md="11" xs="11" lg="11">
        <h2>{{party.nameInBurmese}} အသေးစိတ်</h2>
      </b-col>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col sm="12" md="12" xs="12" lg="12">
        <table style="width:100%;padding:10px">
          <tbody>
            <tr>
              <td>ပါတီအမည် (English) </td>
              <td>{{party.nameInEnglish}}</td>
            </tr>
            <tr>
              <td>ပါတီတည်ထောင်ခွင့်လျှောက်ထားသည့်နေ့ </td>
              <td>{{party.preBuildDate}}</td>
            </tr>
            <tr>
              <td>ပလာရောက်လျှောက်ထားစဉ်ပါတီအင်အား</td>
              <td>{{party.partypplAmount}}</td>
            </tr>
            <tr>
              <td>ပါတီတည်ထောင်ခွင့်ပြုသည့်နေ့</td>
              <td>{{party.orderDate}}</td>
            </tr>
            <tr>
              <td>ပါတီမှတ်ပုံတင်ခွင့်လျှောက်ထားသည့်နေ့</td>
              <td>{{party.partyRegDate}}</td>
            </tr>
            <tr>
              <td>ပါတီမှတ်ပုံတင်ခွင့်ပြုသည့်နေ့ </td>
              <td>{{party.partyAllowDate}}</td>
            </tr>
            <tr>
              <td>ခွင့်ပြုသည့်ပါတီအမှတ်စဉ် အမှတ်စဥ်</td>
              <td>{{party.partyId}}</td>
            </tr>
            <tr>
              <td>ပါတီ ဥက္ကဋ္ဌ နှင့် ဗဟိုအလုပ်အမှုဆောင်စာရင်း</td>
              <td>{{party.partyLeader}}</td>
            </tr>
            <tr>
              <td>ပါတီနယ်မြေ </td>
              <td>{{party.partyArea}}</td>
            </tr>
            <tr>
              <td>ပါတီရုံးချုပ်တည်နေရာ</td>
              <td>{{party.partyLocation}}</td>
            </tr>
            <tr>
              <td>ဆက်သွယ်ရန် ဖုန်း နှင့် ဖက်စ် </td>
              <td>{{party.partyContact}}</td>
            </tr>

          </tbody>
        </table>

      </b-col>
    </b-row>
  </b-col>
</template>


<script>
export default {
  computed: {
    party() {
      return this.$route.params.party[0];
    }
  }
};
</script>
<style scoped>
.fs15 {
  font-size: 15px;
}
.partyContent {
  justify-content: space-between;
}
td{
    padding: 10px;
}
.outlineN{
    outline: none;
}
</style>
