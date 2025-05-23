function pro() {
    return new Promise((resolve, reject) => {
        // producing code
        resolve('success')
        // reject('errorrrr')
    })
}
pro().then((res) => {

    console.log(res);

}).catch((err) => {

    console.log(err);

})

// asyncronous code
// async/await 

(async function () {
    try {
        let res = await pro()
        console.log(res);
    } catch (err) {
        console.log(err);
    }
})()