new Vue ({
    el: '#app',
    data:{
        titulo:'Hola Mundo',
        contador:1,
        iniciarContador: 0
    },
    methods:{
        mostrarTitulo:function(){
            return 'Hola mundo de Methods'
        },
        aumentarContador:function(){
            this.contador++
        },
        cambiarContador:function(){
            this.contador = this.iniciarContador
        }
    }
})