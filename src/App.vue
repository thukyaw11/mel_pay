<template>
  <div id="app">
    <b-container fluid class="home_container">
      <br />
      <b-row>
        <sidePanel />
        <router-view></router-view>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import sidePanel from "./components/sidePanel";

export default {
  name: "App",
  components: {
    sidePanel
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
.knowledge_box {
  background: #f8f8f8;
  border-radius: 10px;
  height: auto;
  cursor: pointer;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-top: 10px;
}
.height_fix{
  height: 150px;
}
.icon-fade {
  opacity: 0.3;
  font-size: 40px;
}
.box_content_row {
  display: flex;
  justify-content: space-between;
}

html,
body {
  font-family: "Roboto Condensed", sans-serif;
}

#app {
  font-family: "Roboto Condensed", sans-serif;
}

.data_box {
  height: auto;
  border-radius: 10px;
}
.data_adv_box {
  height: auto;
  padding: 10px;
}
.party {
  border-radius: 10px;
  background: #f8f8f8;
  padding: 20px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  height: 80px;
}
.partyImage {
  height: 100%;
  float: left;
  width: 100%;
}
.right {
  text-align: right;
}
.data_box,
.partyDetail,
.data_adv_box,
.knowledge_box {
  animation: zoomIn ease 1s;
  -webkit-animation: zoomIn ease 1s;
  -moz-animation: zoomIn ease 1s;
  -o-animation: zoomIn ease 1s;
  -ms-animation: zoomIn ease 1s;
}
@keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes zoomIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.data_inner {
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #f8f8f8;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.party,
.knowledge_box:hover {
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
}
.card_title {
  padding: 10px;
}
.icon {
  font-size: 90px;
  padding: 20px;
  color: grey;
  opacity: 0.4;
}
.btn_icon {
  margin-right: 10px;
}
.outlineN {
  outline: none;
}
</style>
