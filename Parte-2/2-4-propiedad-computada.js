let apellido = "Snow"
new Vue({
    el: '#app',
    data:{
        nombre:"John"
    },
    computed:{
        computedFullName(){
            return this.nombre + " " + apellido
        }
    },
    methods:{
        guardarApellido(){
            apellido = this.$el.querySelector('#apellido').value
        }
    }
})