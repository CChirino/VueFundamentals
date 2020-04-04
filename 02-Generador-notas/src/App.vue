<template>
  <div id="app">
    <h3>{{titulo}}</h3>
    <div class="form">
      <div class="form-group">
        <label for="">Titulo</label>
        <input class="form-control" v-model="nota.titulo" type="text" placeholder="Ingresa el titulo">
      </div>
      <div class="form-group">
        <label for="">Texto</label>
        <textarea class="form-control" v-model="nota.texto" type="text" placeholder="Ingresa el titulo"> </textarea>
      </div>
        <button class="btn btn-primary" @click="agregarNota">Agregar</button>
    </div>
    <div class="col-sm-12">
      <div class="col-sm-4 nota" v-for="nota in notas" >
        <div class="card">
          <div class="card-block">
            <div class="card-title">
              {{nota.titulo}}
            </div>
            <div class="card-subtitle mb-2 text-muted">
              {{nota.fecha}}
            </div>
            <p class="card-text" >{{nota.texto}}</p>
          </div>
          <button class="close" @click="eliminarNota(index)" >&times;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Gestion de Notas',
      nota:{
        titulo:'',
        texto:''
      },
      notas: [
        {
          titulo:'Ir al Cine',
          texto:'Examinar',
          fecha: new Date(Date.now()).toLocaleDateString()
        }
      ]
    }
  },
  methods:{
    agregarNota:function() {
        let {texto,titulo} = this.nota;
        this.notas.push({
        texto,
        titulo,
        fecha: new Date(Date.now()).toTimeString()          
         })
       },
    eliminarNota:function(index){
      this.notas.splice(index,1)
    }
  }
}
</script>

<style>
.form{
  text-align:left;
}
.card{
  text-align: left;
  border: 1px solid black;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.nota{
  padding: 5px;
}

</style>
