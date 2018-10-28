<template>
  <div class="welcome-body">
      <h1 class="heading">Hello</h1>
      <p>
        Welcome to my little corner of the web!
      </p>
        <p class="blog">
          <span class="bold">10/28/2018:</span> Been a busy summer.  Have worked on fixing up the house, learning React
          (and various other projects), and working on getting in shape. As for the dogs, although we have had
          some issues with one dog, overall they get along quite well.  Lacey is doing great, keeping busy with her crafting
          and having fun at her job helping to shape the minds of little people.
        </p>

        <p class="blog">
          Regarding this site... while I have been spending a fair amount of time with React lately, I recently got the bug to once again
          dig into my old Vuejs code and work on this website. Now that I have picked it up again, I'm planning to update it
          periodically with enhancements and new projects.  Working on several fixes now, and will be updating the misc
          projects page soon.  I am also working on a blogging app and backend so I don't have to update the site each
          time I want to post something like this.  That all said, there is a good chance I will make a 2.0 verison and
          rewrite it from scratch, depending on how I feel about the current code.
        </p>
      <p class="blog">
        <span class="bold">4/18/2018:</span> Lost power due to high winds for part of last night. Everything in the
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
export default {};
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
