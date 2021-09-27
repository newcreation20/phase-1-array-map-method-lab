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

const titleCased = () => {


debugger

return tutorials.map(item =>{
  debugger
  const updSent =[];
  const upperFast = item.split(' ');

  for(let string of upperFast){
    debugger

    debugger
    const word = string.charAt(0).toUpperCase() + string.slice(1);
    debugger
    
    updSent.push(word)

    debugger
  }

  debugger
  return updSent.join(' ');
})
}
