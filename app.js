
/* eslint-disable no-console */

/* window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
}; */

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".edu", ".ve", ".net"];

let domainGenerator = function(pronoun, adj, noun, domain){

  let website = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++){
      for(let k = 0; k < noun.length; k++){
        for(let l = 0; l < domain.length; l++){
          website.push(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
  console.log(website);
};

domainGenerator(pronoun, adj, noun, domain);

/* eslint-enable no-console */