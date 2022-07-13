function print(x) {
    console.log(x);
}

const url = "https://jsonplaceholder.typicode.com/comments?postId=1";

// a promise to post the string 'body' to the url
// retval is jjust the str itself
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "title",
        body: "bjdnekfjhkejh",
    }),
})
    .then(function (response) {
        return response.json();
    })
    .then(function (p) {
        console.log(p);
    });
