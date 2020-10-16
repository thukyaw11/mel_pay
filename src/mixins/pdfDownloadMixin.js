export default {
    methods: {
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
},
        downloadFile(year, content,pdf) {
          if(year == null || content == null){
            this.$http({
                method: "get",
                url: require(`../assets/result-pdfs/၂၀၁၅ ခုနှစ် အထွေထွေရွေးကောက်ပွဲ/${pdf}.pdf`),
            responseType: "arraybuffer",

            })   .then((response) => {
                this.forceFileDownload(response, "ရွေးကောက်ပွဲအစီရင်ခံစာ");

              })
              .catch((error) => console.log(error));
          }else{
            this.isLoading = true;
              this.$http({
                method: "get",
                url: require(`@/assets/result-pdfs/${year}/${content}/${pdf.pdfValue}.pdf`),
                responseType: "arraybuffer",
              })
                .then((response) => {
                  if(response.status == 200){
                    this.forceFileDownload(response, pdf.pdfText);
                  }



                })
                .then(()=>this.isLoading = false)
                .catch((error) => console.log(error));

        }
        },

        async forceFileDownload(response, pdf) {

          const url =await window.URL.createObjectURL(new Blob([response.data]));
          const link =await document.createElement("a");
          link.href =await url;
          await link.setAttribute("download", `${pdf}.pdf`);
          await document.body.appendChild(link);
          await link.click();


        },
      },
}
