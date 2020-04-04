new Vue({
    el: '#app',
    data:{
        presas:[
            {nombre:'Represa Nurek', pais:'Tajikistan',electricidad:32000},
            {nombre:'Represa Tres Gargantas', pais:'China',electricidad:22500},
            {nombre:'Repreresa Taberla', pais:'Pakistan',electricidad:3500},
            {nombre:'Represa Guri', pais:'Venezuela',electricidad:10200}
        ]   
    },
    computed:{
        presasPorElectricidad(){
            return this.presas.sort((d1,d2) => d2.electricidad - d1.electricidad) 
        }
    }

})