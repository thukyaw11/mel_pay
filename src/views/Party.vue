<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;">
    <b-row>
      <b-col sm="12" md="3" xs="12" lg="3">
        <h2>ပါတီစာရင်း</h2>
      </b-col>
      <b-col sm="12" md="6" xs="12" lg="6">
        <b-row>
          <b-col sm="9" md="7" xs="9" lg="7">
            <vs-input
              type="text"
              state="primary"
              placeholder="ရှာရန်"
              style="width:100%"
              v-model="search"
            ></vs-input>
          </b-col>
          <b-col sm="3" md="5" xs="3" lg="5">
            <vs-button blue gradient class="outlineN">
              <i class="fab fa-facebook"></i> Share on facebook
            </vs-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        sm="12"
        md="4"
        xs="12"
        lg="4"
        class="data_adv_box"
        v-for="(party,index) in partyLists"
        :key="index"
      >
        <router-link :to="{name: 'PartyView', params: { name: party.nameInEnglishAbb}}">
          <div class="party">
            <span style="width:75%;float:left;">{{party.nameInBurmese}}</span>

            <div class="imageContainer">
              <img :src="getImgUrl(party.id)" class="partyImage" />
            </div>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { partyList } from "../assets/PartyList";


export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    getImgUrl(pic) {
      try {
        return require("../assets/partyImages/partyImage" + pic + ".png");
      } catch (e) {
        return require("../assets/partyImages/noflag.jpg");
      }
    }
  },
  computed: {
    partyLists() {
      if (this.search) {
        return partyList.filter(element => {
          return (
            element.nameInEnglish
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            element.nameInEnglishAbb
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            element.nameInBurmese.includes(this.search)
          );
        });
      } else {
        return partyList;
      }
    }
  }
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);

.party_box {
  background: white;
}
.imageContainer {
  background: black;
  width: 25%;
  float: left;
  height: 80%;
}
.outlineN {
  outline: none;
}
</style>