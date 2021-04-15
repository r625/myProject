
<template>
    <div id = "index" class = "myindex">
        <h1>Kitten Details</h1> <!-- to view a kitten in detail-->

        <table class="table table-dark">
            <thead>
            <tr>
               
                <td>Kitten Name</td>
                <td>Kitten Type</td>
                <td>Kitten Gender</td>
                <td>Kitten Price</td>
                
            </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{{ viewItems.kitten }}</td>
                    <td>{{ viewItems.type }}</td>
                    <td>{{ viewItems.gender }}</td>
                    <td>{{ viewItems.price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
         name: 'index',
        data(){
            return{
                items: [],
                viewItems:{}
            }
        },

        created: function()
        {
            this.getoneItem();
        },

        methods: {
             getoneItem()
            {
             let uri = 'http://localhost:4000/items/get/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.viewItems = response.data;
                });
            },
        }
    }
</script>
<style>
   .myindex{
       background-color:white;
   } 
   h1{
       color: lightseagreen;
   }
   .editbutton{
        background-color: lightseagreen; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
   .deletebutton
   {
        background-color: lightsalmon; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
</style>