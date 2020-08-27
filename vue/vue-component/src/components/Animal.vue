<template>
  <div class="animal">
      <p>我的宠物：{{petName}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myPet: '小白'
        }
    },
    props: {
        petName: {
            type: String,
            default: () => {
                return '小白'
            }
        }
    }
}
</script>

<style>

</style>