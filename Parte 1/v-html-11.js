new Vue ({
    el: '#app',
    data:{
        titulo:'Hola Mundo',
        enlace:'<a href="https://www.udemy.com/course/vue-js-2-para-principiantes/learn/lecture/11643858#content">Codigo OnClick</a>'
    },
    methods:{
        mostrarTitulo(){
            this.titulo = 'Hola Mundo desde Methods'
            return this.titulo
        }
    }
})