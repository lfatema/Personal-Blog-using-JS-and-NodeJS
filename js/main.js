const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostsContent = "";
  for (blogPosts of blogPosts) {
    const postDate = new Date(parseInt(blogPosts.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPosts.post_image}`;
    blogPostsContent += `<div class="post">
        <div class="post-image" style="background-image:url(${postImage});background-size: cover;"></div>
        <div class="post-content">
          <div class="post-title"><h2>${blogPosts.title}</h2></div>
          <div class="post-text"><p>${blogPosts.content}</p></div>
          <div class="post-date"><p>${postDate}</p></div>
        </div>
      </div>`;
  }
  document.querySelector(".blog-posts").innerHTML = blogPostsContent;
};
