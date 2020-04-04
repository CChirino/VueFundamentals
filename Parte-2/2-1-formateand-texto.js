Vue.filter('capitalize',function(string){
    // var primerCaracter = string.charAt(0).toUpperCase()
    // var restoCaracter = string.slice(1,string.length)
    var [primerCaracter,...restoCaracter] = string
    return primerCaracter.toUpperCase()+ restoCaracter.join('')
})
new Vue ({
    el: '#app',
    data:{

    }
})