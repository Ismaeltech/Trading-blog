<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
        "Weekly blog articles with all things investing including trading strategies, market analysis, stock news and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "investing",
      },
      sampleBlogPost: [
        {
          title: "This is a filler Title",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "chart",
        },
        {
          title: "This is a filler Title",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "trading",
        },
      ],
    };
  },
};
</script>
