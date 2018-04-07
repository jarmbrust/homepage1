<template>
  <div>
    <h1 class="heading">Glorious pet pictures will be displayed here!</h1>
     <b-card title="Muppet"
            img-src="require('@/../../assets/Muppet1.png)"
            img-alt="Muppet the dog"
            img-top
            tag="article"
            style="max-width: 200px;"
    >
      <p class="card-text">
        Misc programs will be added here for your fun and excitement.  Until then, enjoy the veggies.
      </p>
      <b-button disabled variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .heading {
    font-size: 20px;
  }
</style>
