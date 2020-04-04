Vue.filter('fecha',function(date){
    return moment(date).format('LL')
})
new Vue({
    el: '#app',
    data:{
        fechaRevFrancesa: '1789-05--05'
    }
})