
// This is all that it needs to do

/*
const nouns = ["Apple","Cat","Dog","Bird","Horse"]
const adjectives = ["Red","Fluffy","Angry","Slow"]
const ps = ["You are like a","You make me think of", "Stop being a"]


console.log(`${random_choice(ps)} ${random_choice(adjectives)} ${random_choice(nouns)}.`);
*/

const random_choice = (xs) => xs[Math.floor(Math.random()*xs.length)]
const random_number = () => Math.floor(Math.random()*4)

dayBuilder();





/*
// Morning section
["I woke up", "In the morning I ..."] ...
then (event)
["had /what food/ breakfast","watched /programme/ on TV","listend to /radio station/"]
then (event)
// Afternoon section
In the afternoon ...
then ...
then ...
// Night section
then at night ...
then ...
then ...
*/
const randInt = (start,finish) => Math.floor(start + Math.random()*(finish-start))

class RandomSentenceBuilder {
  constructor(verb,objects,singular = true) {
    this.verb = verb
    this.objects = objects
    this.singular = singular
  }
  build() {
    if( this.singular ) {
      const obj = random_choice(this.objects)
      return `I ${this.verb} ${obj}`
    } else {
      const objs = this.objects.filter(x => Math.floor(Math.random()*2))
      const joined = objs.join(", ")
      return `I ${this.verb} ${joined}`
    }
  }
}

const makeBreakfast = new RandomSentenceBuilder(
  "ate",
  ["a fried egg","a sausage","baked beans","fried toast","a grilled tomato"],
  false
)

const breakfast = makeBreakfast.build()
console.log(`Breakfast: ${breakfast}`)

const verbToObjectDict = {
  "ate": ["a fried egg","a sausage","baked beans","fried toast","a grilled tomato"]
}

function eventBuilder() {
  const verbs = ["ate", "watched", "listened to"];
  const objects = ["breakfast", "TV", "the radio station"];
  const verb = random_choice(verbs)
  const obj = random_choice(objects)
  return `I ${verb} ${obj}`;
}

function dayPartSentence(part) {
  const morning = ["I woke up then ", "In the morning"]
  const afternoon = ["In the afternoon ", "After 12 pm"]
  const night = ["At night I ", "When the sun set down"]
  
  if(part === 'morning') {
    return random_choice(morning);
  } else if (part === 'afternoon') {
    return random_choice(afternoon);
  } else {
    return random_choice(night);
  }
}

function dayBuilder() {
  const morningEventsCount = random_number();
  const afternoonEventsCount = random_number();
  const nightEventsCount = random_number();
  console.log(dayPartSentence('morning'));
  for(let i=0; i < morningEventsCount; i++) {
    console.log(eventBuilder());
  }
  console.log(dayPartSentence('afternoon'));
  for (let i=0; i < afternoonEventsCount; i++) {
    console.log(eventBuilder());
  }
  console.log(dayPartSentence('night'));
  for (let i=0; i < nightEventsCount; i++) {
    console.log(eventBuilder());
  }
}