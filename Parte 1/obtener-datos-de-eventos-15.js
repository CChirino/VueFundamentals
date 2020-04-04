new Vue ({
    el: '#app',
    data:{
        titulo:'Hola Mundo',
        contador:1,
        iniciarContador: 0,
        x:0,
        y:0
    },
    methods:{
        mostrarTitulo:function(){
            return 'Hola mundo de Methods'
        },
        aumentarContador:function(valor){
            this.contador += valor
        },
        cambiarContador:function(){
            this.contador = this.iniciarContador
        },
        actualizarValores:function(event){
            this.x = event.clientX
            this.y = event.clientY
        }
    }
})