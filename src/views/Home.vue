<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCard";
export default {
  name: "Home",
  components: { BlogPost, BlogCards },
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
      sampleBlogCards: [
        { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "February 21, 2022 " },
        { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "February 21, 2022 " },
        { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "February 21, 2022 " },
        { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "February 21, 2022 " },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
