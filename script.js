const input = document.querySelector("#devname")
const btn = document.querySelector(".search-btn")

const getUsers = async function(){

    const url = `https://api.github.com/search/users?q=octocat`
    const result = await fetch(url)
    let state = await result.json()
    console.log(state)

    let repos = await fetch("https://api.github.com/users/octocat/repos"),
    repoResult = await repos.json()
    //console.log( repoResult.length )

    let followers = await fetch("https://api.github.com/users/octocat/followers+total_count"),
    followResult = await followers.json()
    console.log( followResult )
    return state.items[0];
}
getUsers()
const printUser = (promise) => {
    promise.then( function(){

    })
}