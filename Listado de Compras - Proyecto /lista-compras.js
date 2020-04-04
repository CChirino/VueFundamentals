// $vm0 instancia de Vue en JS
var app = new Vue ({
    el:'#lista-compras',
    data:{
        header:'Listado de Utiles',
        newUtil:'',
        estado: 'default',
        utiles:[
            {
                util:'10 Cuadernos',
                comprado: true
            },
            {
                util:'5 Cajas de Lapices',
                comprado: true
            },
            {
                util:'1 Caja de Colores',
                comprado: false
            }
        ]
    },
    methods:{
        agregarUtil:function () {
            this.utiles.push({
                util: this.newUtil,
                comprado:false
            })
        },
        cambiarEstado:function(newEstado){
            this.estado = newEstado
            this.newUtil = ''
        },
        cambiarEstadocompra:function(util) {
            util.comprado = !util.comprado
        }
    },
    computed:{
        cantidadCaracteres: function() {
            return this.newUtil.length
        },
        listarReversa:function() {
            return this.utiles.slice(0).reverse()
        }
    }
})