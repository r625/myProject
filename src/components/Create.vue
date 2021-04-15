<!--Define a Create File to Add items to file -->
<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Kitten</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group"> <!--form items-->
                        <label>Kitten Name:</label>
                        <input type="text" class="form-control" v-model="item.kitten"/>
                    </div>
                    <div class="form-group">
                        <label>Kitten Gender:</label>
                        <input type="text" class="form-control" v-model="item.gender"/>
                    </div>
                    <div class="form-group">
                        <label>Kitten Type:</label>
                        <input type="text" class="form-control" v-model="item.type"/>
                    </div>
                    <div class="form-group">
                        <label>Kitten Price:</label>
                        <input type="text" class="form-control" v-model="item.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="mybutton" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {} 
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then(response => 
            {
                
                console.log(response.data)

            });
        }
    }
}
</script>
<style>
.mybutton{
    background-color: lightpink; 
  border: none;
  color: white;
    
    padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>