<template>
    <div id = "index" class = "myindex">
        <h1>Kittens Available for Rent</h1>

        <table class="table table-hover"> <!--index items to display all of them--> 
            <thead>
            <tr>
               
                <td>Kitten Name</td>
                <td>Kitten Type</td>
                <td>Kitten Gender</td>
                <td>Kitten Price</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item._id">
                    
                    <td>{{ item.kitten }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.gender }}</td>
                    <td>{{ item.price }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="editbutton">Edit</router-link></td>
                    <td><button class="deletebutton"  v-on:click="deleteItem(item._id)">Delete</button></td>
                    <td><router-link :to="{name: 'View', params: { id: item._id }}" class="viewbutton">View</router-link></td>
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
            this.fetchItems();
        },

        methods: {
             getoneItem(id) 
            {
              let uri = 'http://localhost:4000/items/get/'+id;
              this.axios.get(uri).then((response) => {
                  this.viewItems = response.data;
              });
            },
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
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
   .viewbutton
   {
        background-color: lightslategray; 
  border: none;
  color: white;
    
    padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
   }
</style>