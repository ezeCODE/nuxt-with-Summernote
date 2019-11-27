<template>
  <div class="container">
    <h3>Summernote & Nuxt</h3>
    <teaxarea id="summernote">Hello Summernote</teaxarea>

  <div class="alert-warning">
    <p>
      Si tu no quieres que la opcion de agregar imagenes no tenga el boton examinar,
      puedes capturar mediante la misma clase y luego con css le agregar un disply none.
      recuerda ver el nuxt.config
      If you do not want the option to add images does not have the browse button, 
      you can capture the same class and then with css add a disply none.
      remember watch nuxt.config
    </p>
  </div>

  </div>
</template>
<script>

   
export default {
  

  name:'editor',
  data(){
    return {

    }
  },
  beforeMount(){
    this.renderEditor()
  },
  methods:{
      renderEditor(){
      $(document).ready(function() {
        $('#summernote').summernote({
          height:500
        });
      });
      }
  }

}
</script>

<style>


.note-group-select-from-files{ display: none; } 

.container { max-width: 1400px; background: rgb(235, 235, 235);
  margin: 0 auto; min-height: 100vh; display: flex; flex-direction: column;
   justify-content: center; align-items: center;
  text-align: center;
}

.container .alert-warning{ position: relative; width: 80%; margin: 1em auto;
   box-sizing: border-box; padding: 1em; 

}


</style>
