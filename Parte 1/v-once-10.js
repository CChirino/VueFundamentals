new Vue ({
    el: '#app',
    data:{
        titulo:'Hola Mundo'
    },
    methods:{
        mostrarTitulo(){
            this.titulo = 'Hola Mundo desde Methods'
            return this.titulo
        }
    }
})