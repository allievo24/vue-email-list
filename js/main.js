var app = new Vue({
    el: '#app',
    data: {
      //variabile ce conterra la risposta
      emailCasuale: null
    },
    mounted(){
       
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emailCasuale = response.data.response;
            })
        }

  })