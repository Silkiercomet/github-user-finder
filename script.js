const input = document.querySelector("#devname");
const btn = document.querySelector(".search-btn");

async function getUsers() {
  user = input.value;
  //basic user info
  const url = `https://api.github.com/users/${user}`;
  const result = await fetch(url)
    .then((state) => state.json())
    .catch((error) => console.log(error));
  return result;
}

const printUser = (promise) => {
  promise.then(function (promise) {
    /*user avatar */ document.querySelector("#user_img").src =
      promise.avatar_url;
    /*user name*/ document.querySelector(".username").textContent =
      promise.name;
    /*user link*/ document
      .querySelector(".user__profile_link")
      .setAttribute("href", `${promise.html_url}`);
    document.querySelector("#link__name").innerText = promise.login;
    /*user bio*/
    promise.bio == null
      ? (document.querySelector("#user__bio").textContent = "there's no bio")
      : (document.querySelector("#user__bio").textContent = promise.bio);
    /*user details, repos, etc */
    document.querySelector("#repos").textContent = promise.public_repos;
    document.querySelector("#followers").textContent = promise.followers;
    document.querySelector("#following").textContent = promise.following;
    promise.location == null
      ? (document.querySelector(".location").textContent =
          "there's no location")
      : (document.querySelector(".location").textContent = promise.location);
    promise.twitter_username == null
      ? (document.querySelector(".twitter").textContent = "there's no twitter ")
      : (document.querySelector(".twitter").textContent =
          promise.twitter_username);
    promise.company == null
      ? (document.querySelector(".work").textContent = "there's no work ")
      : (document.querySelector(".work").textContent = promise.company);
    promise.blog == ""
      ? (document.querySelector(".link__profile").textContent =
          "there's no blog ")
      : (document.querySelector(".link__profile").textContent = promise.blog);
  });
};
const compose = (f, g) => (data) => f(g(data));

btn.addEventListener("click", function () {
  compose(printUser, getUsers)();
});

document.querySelector(".light-dark").addEventListener("click", function () {
  document.querySelectorAll(".light__bg").forEach((a) => {
    a.classList.toggle("dark__bg");
    console.log(a);
  });

  document.querySelectorAll(".light__component").forEach((a) => {
    a.classList.toggle("dark__component");
  });
  document.querySelector(".profile__repo").classList.toggle("verydark__comp");
});
