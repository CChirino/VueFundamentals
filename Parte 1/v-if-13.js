new Vue ({
    el: '#app',
    // data:{
    //     esMadrugada:true
    // },
    computed:{
        esMadrugada(){
            return new Date().getHours() < 7
        }
    }
})