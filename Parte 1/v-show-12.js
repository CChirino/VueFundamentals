new Vue ({
    el: '#app',
    // data:{
    //     esMadrugada:true
    // },
    computed:{
        esMadrugada(){
            return (new Date('30 Marzo 10:50')).getHours() < 7
        }
    }
})