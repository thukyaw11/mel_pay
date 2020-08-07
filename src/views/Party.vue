<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;" class="content">
    <b-row>
      <b-col sm="12" md="3" xs="12" lg="3" id="element">
        <h2>ပါတီစာရင်း</h2>
      </b-col>
      <b-col sm="12" md="9" xs="12" lg="9">
        <b-row>
          <b-col sm="6" md="6" xs="6" lg="6">
            <vs-input
              type="text"
              state="primary"
              placeholder="ရှာရန်"
              style="width:100%"
              v-model="search"
            ></vs-input>
          </b-col>
          <b-col sm="6" md="6" xs="6" lg="6">
              <facebook-button style="float:left" shareDescription="Where" :url="getShareableUrl()"></facebook-button>
              <messanger-button style="float:left" shareDescription="Where voters meet" :url="getShareableUrl()"></messanger-button>
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
        <router-link :to="{name: 'PartyView', params: { name: party.nameInEnglish}}">
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
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";
import MessangerButton from "vue-share-buttons/src/components/FacebookMessengerButton";

export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    MessangerButton,
    FacebookButton,
  },
  methods: {
    getImgUrl(pic) {
      try {
        return require("../assets/partyImages/partyImage" + pic + ".png");
      } catch (e) {
        return require("../assets/partyImages/noflag.jpg");
      }
    },
    getShareableUrl(){
      return `https://melpayv2.netlify.app/#/parties`
    }
  },
  computed: {
    partyLists() {
      if (this.search) {
        return partyList.filter((element) => {
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
    },
  },
};
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);

.party_box {
  background: white;
}
.imageContainer {
  background: black;
  width: 20%;
  float: left;
  height: 80%;
}
.outlineN {
  outline: none;
}
</style>