<template>
  <div class="form">
    <section class="hero is-info"></section>
    <AddForm />
  </div>
</template>

<script>
import AddForm from '../components/AddForm'

export default {
  name: 'form',
  components: {
    AddForm,
  },
}
</script>
