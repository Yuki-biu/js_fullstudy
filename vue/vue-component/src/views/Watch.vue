<template>
  <div class="watch">
      <span style="margin-right:10px">{{temp}}°C</span>
      <span>{{suggest}}</span> <br />
      <button @click="add">add</button>
      <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// mixins
let addLog = {
    updated: function() {
        console.log('温度更新为' + this.temp)
    }
}

let ext = {
    created: function() {
        console.log('扩展的created')
    },
    methods: {
        add: function() {
            console.log('扩展的add')
        }
    }
}

export default {
    data() {
        return {
            temp: 25,
            suggest: '穿短袖',
            num: 0
        }
    },
    mixins: [addLog],
    extends: ext,
    methods: {
        add() {
            this.temp += 5
            this.num ++
        },
        reduce() {
            this.temp -= 5
        }
    },
    watch: {
        temp: function(newVal, oldVal) {
            console.log(newVal, oldVal)
            if (newVal <= 0) {
                this.suggest = '穿羽绒服'
            } else if (newVal <= 15) {
                this.suggest = '穿夹克'
            } else {
                this.suggest = '穿短袖'
            }
        }
    }
}
</script>

<style>

</style>