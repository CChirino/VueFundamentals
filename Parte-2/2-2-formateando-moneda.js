Vue.filter('moneda',function(valor){
    return accounting.formatMoney(valor)
})
new Vue({
    el: '#app',
    data:{
        inventario:[
            {nombre:'Galaxy', precio:'250' },
            {nombre:'Iphone', precio:'450' },
            {nombre:'Ipad', precio:'389.50 '},
            {nombre:'Laptop Gamer', precio:'665.99' }
        ]
    }
})