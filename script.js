const input = document.querySelector("#devname")
const btn = document.querySelector(".search-btn")

async function getUsers(){
    user = input.value;
    //basic user info
    const url = `https://api.github.com/users/${user}`
    const result = await fetch(url)
    .then(state =>  state.json())
    .catch(error => console.log(error))
    return result

    
}

const printUser = (promise) => {
    promise.then( function(promise){
        /*user avatar */ document.querySelector("#user_img").src = promise.avatar_url;
        /*user name*/ document.querySelector(".username").textContent = promise.name;
        /*user link*/ document.querySelector(".user__profile_link").setAttribute("href",`${promise.html_url}`);
        document.querySelector("#link__name").innerText = promise.login;
        /*user bio*/
        (promise.bio == null)? document.querySelector("#user__bio").textContent = "there's no bio" : (document.querySelector("#user__bio").textContent = promise.bio);
        /*user details, repos, etc */
        document.querySelector("#repos").textContent = promise.public_repos;
        document.querySelector("#followers").textContent = promise.followers;
        document.querySelector("#following").textContent = promise.following;
        

    })
}
const compose = (f,g) => (data) => f(g(data));

btn.addEventListener("click", function(){
    compose(printUser,getUsers)()
})
