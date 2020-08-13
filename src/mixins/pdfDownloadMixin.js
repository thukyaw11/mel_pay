export default {
    methods: {
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
    
          this.$http({
            method: "get",
            url: require(`@/assets/result-pdfs/${year}/${content}/${pdf.pdfValue}.pdf`),
            responseType: "arraybuffer",
          })
            .then((response) => {
              console.log(response);
              this.forceFileDownload(response, pdf.pdfText);
    
            })
            .catch((error) => console.log(error));
        }
        },
    
        forceFileDownload(response, pdf) {
         
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${pdf}.pdf`);
          document.body.appendChild(link);
          link.click();
        },
      },
}