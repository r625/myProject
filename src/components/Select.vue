<!--Define a Select File to Add items to file -->
<template>

  <div class="dropdown">
      <label for="fname">Enter your Name:</label> <!-- allows you to select a kitten for rent-->
  <input type="text" id="name" name="name"><br><br>
  <label >Select a Kitten:</label>
    <input v-if="Object.keys(selectedItem).length === 0" ref="dropdowninput" v-model.trim="inputValue" class="dropdown-input" type="text" placeholder="Find kitten" />
    <div v-else @click="resetSelection" class="dropdown-selected">
    
      {{ selectedItem.kitten }}
    </div>
    <div v-show="inputValue && apiLoaded" class="dropdown-list">
      <div @click="selectItem(item)" v-show="itemVisible(item)" v-for="item in itemList" :key="item.kitten" class="dropdown-item">
       
        {{ item.kitten }}
      </div>
    </div>
    <h1>The kitten {{name}} selected for rent is {{ selectedItem.kitten }}</h1>

  </div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      selectedItem: {},
      inputValue: '',
      itemList: [],
      apiLoaded: false,
      apiUrl: 'http://localhost:4000/items'
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    resetSelection () {
      this.selectedItem = {}
      this.$nextTick( () => this.$refs.dropdowninput.focus() )
      this.$emit('on-item-reset')
    },
    selectItem (theItem) {
      this.selectedItem = theItem 
      this.inputValue = ''
      this.$emit('on-item-selected', theItem)
    },
    itemVisible (item) {
      let currentName = item.kitten.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    getList () {
      axios.get(this.apiUrl).then( response => {
        this.itemList = response.data
        this.apiLoaded = true
      })
    }
  }
}
</script>

<style>
.dropdown{
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.dropdown-item-flag{
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
</style>