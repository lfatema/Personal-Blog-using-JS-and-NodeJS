const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPost();
};

const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  return urlParam.get("id");
};

const getPost = () => {
  const postId = getPostIdParam();
  const postURL = `${API_URL}${postId}`;
  fetch(postURL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const buildPost = (data) => {
  const postDate = new Date(parseInt(data.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${data.post_image}`;
  document.querySelector("header").style.backgroundImage = `url(${postImage})`;
  document.getElementById("individual-post-title").innerText = data.title;
  document.getElementById(
    "individual-post-date"
  ).innerText = `Published on ${postDate}`;
  document.getElementById("individual-post-text").innerText = data.content;
};
