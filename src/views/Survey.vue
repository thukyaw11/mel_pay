<template>
  <b-col sm="12" md="9" xs="12" lg="9" style="font-family: 'Myanmar Sans Pro', sans-serif;">
    <h1>Survey</h1>
    <survey :survey="survey" />
  </b-col>
</template>

<script>
import * as SurveyVue from "survey-vue";
import "bootstrap/dist/css/bootstrap.css";
var Survey = SurveyVue.Survey;
Survey.cssType = "bootstrap";

SurveyVue.Serializer.addProperty(
  "question",
  "tag:numberSurvey.defaultBootstrapMaterialCss.navigationButton = 'btn btn-green'"
);
SurveyVue.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
SurveyVue.StylesManager.applyTheme("bootstrapmaterial");
export default {
  components: {
    Survey,
  },
  created() {
    console.log(Survey);
  },
  data() {
    var json = {
      surveyId: "5e11bc54-3bbd-4e32-a8cd-49e83f5db6ac",
      surveyPostId: "a70fd251-4645-4a66-80b2-938d002682a2",
    };

    var model = new SurveyVue.Model(json);

    return {
      survey: model,
    };
  },
};
</script>