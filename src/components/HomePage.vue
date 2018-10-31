<template>
  <div class="welcome-body">
      <h1 class="heading">Hello</h1>
      <p>
        Welcome to my little corner of the web.
      </p>
      <p>
        This is a simple web page I originally built for fun over a week or so back in April 2018. It's purpose remains to be seen,
        but for now it is a good place to store pet pics and miscellaneous projects...
      </p>
      <hr>
      <p class="blog">
        <span class="bold">10/31/2018:</span> Happy Halloween!!
      </p>
      <p class="blog">
        <span class="bold">10/30/2018:</span> After a little bit of wrangling, I have been able to get this site working again
        after being in limbo for a number of months. I needed to update some of the packages and clean up the code.
        I also fixed the routing and generally cleaned up the code some. My next task however will be to rewrite it using the new vue-cli 3.
        That however will mean that I will need to strip out out the bootstrap-vue since it doesn't seem like it has been updated
        to work with the version 3 of the cli.
      </p>
      <p class="blog">
        Exciting stuff, I know...
      </p>
      <p class="blog">
        Muppet was just in here letting me know that Lacey went to bed, and that since we are now in seperate parts of the house his
        herding instincts are upset, and I should rectify it by going to bed. As good a reason as any, so I think I will oblige.
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
export default {}
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
