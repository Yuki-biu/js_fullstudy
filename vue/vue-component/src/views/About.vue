<template>
  <div class="about">
    <User :userName="name" @petChange="getPet"></User>
    <Animal :petName="petName"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: 'about name',
      petName: ''
    }
  },
  components: {
    User,
    Animal
  },
  methods: {
    getPet(name) {
      console.log(name)
      this.petName = name
    }
  }
}
</script>

<style>
.about {
  color: red;
}
</style>
