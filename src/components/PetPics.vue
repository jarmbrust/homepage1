<template>
  <div>
    <h1 class="heading">Glorious pet pictures will be displayed here!</h1>
     <b-card class="pet-card"
            title="Muppet"
            img-src="~@/assets/Muppet1.png"
            img-alt="Muppet the dog"
            img-top
            tag="article"
            style="max-width: 250px;"
      >
      <p class="card-text">
        Adopted from the pound about 2 years ago, this Chinese crested/terrier mix loves
        barking, sleeping, and playing with his toys.
      </p>
    </b-card>
    <b-card class="pet-card"
            title="Toshi"
            img-src="~@/assets/Toshi1.png"
            img-alt="Toshi the cat"
            img-top
            tag="article"
            style="max-width: 250px;"
      >
      <p class="card-text">
        Adopted almost 10 years ago, Toshi loved warmth, sunbeams, and just chill'n.  He passed away 4/4/2018
        at the aprox age of 16.</p>
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
    margin: 20px;
  }
  .pet-card {
    float: left;
    margin: 10px;
  }
</style>
