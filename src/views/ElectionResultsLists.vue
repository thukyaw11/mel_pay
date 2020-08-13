<template>
  <b-col
    sm="12"
    md="9"
    xs="12"
    lg="9"
    style="font-family: 'Myanmar Sans Pro', sans-serif;"
    class="content"
  >
    <div class="header_adv">
      <h3 class="header_adv_content">ယခင် ရွေးကောက်ပွဲရလဒ်များ</h3>
    </div>
    <br />

    <b-row>
      <b-col sm="12" md="12" xs="12" lg="12" v-for="(election,index) in electionList" :key="index">
        <router-link :to="{name: 'ElectionResultListChild',params: {year : election.electionYear}}">
        <div class="knowledge_box">
          <span class="box_content_row">
            <i class="fas fa-gavel icon-fade"></i>
            <h3>{{election.electionYear}}</h3>
          </span>
        </div>
        </router-link>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { electionList } from "../assets/electionList.js";
export default {
  computed: {
    electionList() {
      return electionList;
    },
  },
  created() {
    console.log(this.electionList);
  },
};
</script>