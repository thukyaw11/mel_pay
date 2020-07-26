<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;">
    <div class="header_adv">
      <h3 class="header_adv_content">သိထားသင့်သည်များ</h3>
    </div>
    <br />

    <b-row>
      <b-col
        sm="12"
        md="3"
        xs="12"
        lg="3"
        v-for="(roomList,index) in rooms"
        :key="index"
      >
        <router-link :to="{name: 'ContentListView',params: {roomid : roomList.text}}">
          <div class="knowledge_box">
            <span class="box_content_row">
              <i class="fas fa-gavel icon-fade"></i>
              <h3>အခန်း ({{roomList.roomId}})</h3>
            </span>
            <p class="subcontent_box">{{roomList.text}}</p>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { roomList } from "../assets/roomList";
export default {
  computed: {
    rooms() {
      return roomList.rooms;
    }
  }
};
</script>

<style scoped>

.header_adv {
  background: #3f94dab0;
  border-radius: 10px;
  height: 50px;
  padding: 5px;
}
.header_adv_content {
  text-align: center;
}

.subcontent_box {
  font-size: 15px;
  margin-top: 35px;
  padding: 5px;
}
</style>