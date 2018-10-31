<template>
  <div class="welcome-body">
      <h1 class="heading">Hello</h1>
      <p>
        Welcome to my little corner of the web.
      </p>
      <p class="blog">
        <span class="bold">4/18/2018:</span> Lost power due to high winds for part of last night. Fun times. Everything in the
        fridge survived though, so all good.  Off to work, will update more later.
      </p>
      <p class="blog">
        <span class="bold">4/16/2018:</span> This site is pretty bare-bones at the moment. I started building it in early April 2018,
        and hope to have it more or less fleshed out by the end of the month.  Currently playing around with styles and
        getting my SSL set up. Meanwhile, I have a few misc code samples and pictures of my dogs.  More Soon!
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .heading {
    font-size: 20px;
    margin: 20px;
  }
  .welcome-body {
    padding: 20px;
  }
  .bold {
    font-weight: bold;
  }
  .blog {
    text-align: left;
  }
</style>
