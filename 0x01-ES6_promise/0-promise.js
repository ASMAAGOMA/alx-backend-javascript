
function getResponseFromAPI(){
let promise = new Promise((res, rej)=>{
res("success");
});
return promise;
}
module.exports = { getResponseFromAPI };