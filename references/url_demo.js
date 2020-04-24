const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
//host
console.log(myUrl.host);
//serialized query
console.log(myUrl.search);
//search params as object
console.log(myUrl.searchParams);
//add param 
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
//we can loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));