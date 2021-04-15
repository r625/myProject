

<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem"> <!-- form to edit items-->
                    <div class="form-group">
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
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                    console.log(response.data)
                    console.log('hi')
                  this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>
