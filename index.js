const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(array){
  let result = array.map(function(str){
    let word = str.toLowerCase().split(' ')
    for(let i = 0; i < word.length; i++){
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
    }
    return word.join(' ')
  })
  return result
}

