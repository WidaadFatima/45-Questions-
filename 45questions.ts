//Q1

//Installed Node JS, Typescript, VS Code

//Q2
// Personal message
let name0="Widaad"
let message= `Hello, ${name0}, I want you to have a dinner with me today. `
console.log(message)


//Q3
// Name cases
let name1="sadIa jAhaN"
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
function totitlecase(str:string):string{

return str
.toLowerCase()
.split(' ')
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(' ')
}

console.log(totitlecase(name1))

//Q4
// Famous quote

console.log('Hazrat Muhammad PBUH once said, "The best among you are those who have the best manners and character."')

//Q5
// Famous quote 2
let famous_person:string="Hazrat Muhammaad PBUH"
let message0:any= ' "The best among you are those who have the best manners and character." '
console.log(`${famous_person} once said, ${message0}`)

//Q6
// Stripping names

let nameWithWhitespace: string = "\t  John Doe  \n"
console.log("Name with whitespace:")
console.log(nameWithWhitespace)


console.log("Name with whitespace (JSON.stringify):")
console.log(JSON.stringify(nameWithWhitespace))

let strippedName: string = nameWithWhitespace.trim()

console.log("Name after stripping whitespace:")
console.log(strippedName)


//Q7
// Number eight

//addition
let digit1:number= 4
let digit2:number= 4
let digit3:number= digit1 + digit2
console.log(digit3)

// subtraction
let digit4:number= 10
let digit5:number= 2
let digit6:number= digit4- digit5
console.log(digit6)

// multiplication
let digit7:number= 2
let digit8:number= 4
let digit9:number= digit7 * digit8
console.log(digit9)

// division
let digit10:number= 32
let digit11:number= 4
let digit12:number= digit10 / digit11
console.log(digit12)


//Q8
// Number eight

console.log(5+3)
console.log(10-2)
console.log(4*2)
console.log(16/2)

//Q9
// Favorite number

let favourite_number: number= 14
let message1:string= `Hey guys, you know my favourite number is ${favourite_number}.`
console.log(message1)



//Q10
// Adding comments

//Program 1
//here is an object in which i stored my favourite cars with favourite colors
let cars={
civic: "black",
fortuner: "black", 
Hillux: "black"
}

//Program 2
// program gives some special summer fruits
let fruits= ["Mango", "Apricots", "Peach"]


//Q11
// Names

let names=["Hijab", "Alizay", "Zaima", "Alishba", "Minahil"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])


//Q12
// Greetings

for (let i=0; i<names.length; i++)
{console.log(`${names[i]}, Congratualtions on your success!`)}



//Q13
// Your Own Array

//favourite transport is car 
const Cars: string[] =["Civic", "Fortuner", "Hillux"]

console.log(`My firdt dream car is ${Cars[0]}.`)
console.log(`I would like to own a black ${Cars[1]}.`)
console.log(`${Cars[2]} black is a very attractive car.`)


//Q14
// Guest list

let guest_list:string[]= ["Rabail", "Simle", "Simra"]
for (let i=0; i<guest_list.length; i++){
    console.log(`AOA ${guest_list[i]}, I hereby cordially invite you for a dinner on saturday night.`)
}

//Q15
// Changing guest list

// Previous guest list (from exercise 14)

// Task 1 
// let guest_list:string[]= ["Rabail", "Simle", "Simra"]
console.log(`Ms.${guest_list[2]} can't have dinner with us due to some reasons but we will continue our plan. `)

// Task 2
let changed_guestlist: string[]= ["Rabail", "Simle", "Hijab"]

// Task 3
for (let i=0; i<changed_guestlist.length; i++)
{ console.log(`AOA ${guest_list[i]}, I hereby cordially invite you for a dinner tonight.`)}


// Q16
// More guests

// let changed_guestlist: string[]= ["Rabail", "Simle", "Hijab"]
// Task 1
console.log("Hey everyone, I just got a good oppurtunity for the dinner now, it's getting bigger. Be excited!")

// Task 2
changed_guestlist.unshift("Sidra")
changed_guestlist.splice(1, 0, "Aqsa")
changed_guestlist.push("Fairda")

console.log(changed_guestlist)

for (let i=0; i<changed_guestlist.length; i++){
    console.log(`AOA ${changed_guestlist[i]}, I hereby cordially invite you for a dinner on saturday night.`)
}


// Q17
// Shrinking guest list

// Task 1
// [ 'Sidra', 'Aqsa', 'Rabail', 'Simle', 'Hijab', 'Fairda' ]
console.log("Hello everyone, I am sorry i will not be able to invite you all for a dinner due to some circumstances. we will meet again on some time.")

// Task 2

function removeGuestsUntilTwoRemain(guestList: string[]): void {
    let initialLength = guestList.length
    for (let i = 0; i < initialLength - 2; i++) {
        let removedGuest = guestList.pop()
        if (removedGuest !== undefined) {
            console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`)
        }
    }
}

// Call the function
removeGuestsUntilTwoRemain(changed_guestlist)

    // Task 3
for (let i=0; i<changed_guestlist.length; i++)
{console.log(`Hey ${changed_guestlist[i]}, You are still invited to dinner. Join us on time!`)}

// Task 4

changed_guestlist.pop()
changed_guestlist.pop()
console.log(changed_guestlist)

// Q18
// Seeing the world

// Task 1
let fivePlaces:string[]=["Makkah", "Madina", "Norway", "Maldives", "Disney Land"]
// Copying original array to print later 
let original_fivePlaces:string[]=[...fivePlaces]

// Task 2
console.log(fivePlaces)

// Task 3
fivePlaces.sort()
console.log(fivePlaces)

// Task 4
console.log(original_fivePlaces)

// Task 5
let sortedReverse_fivePlaces: string[] = [...fivePlaces].sort((a, b) => b.localeCompare(a))
console.log(sortedReverse_fivePlaces)

// Task 6
console.log(original_fivePlaces)

// Task 7
fivePlaces = [...original_fivePlaces]  
fivePlaces.reverse()
console.log(fivePlaces)

// Task 8
fivePlaces.reverse()  
console.log(fivePlaces)

// Task 9
fivePlaces.sort()
console.log(fivePlaces)

// Task 10
fivePlaces.sort((a, b) => b.localeCompare(a))
console.log(fivePlaces)


// Q19
// Dinner guests

// let guest_list:string[]= ["Rabail", "Simle", "Simra"] (Working with this)
let TotalPeople=guest_list.length
console.log(`You are inviting ${TotalPeople} people on dinner.`)


// Q20
// Program that creates a list containing these items.(Languages)

let languages:string[]=["Urdu", "English", "Sindhi", "Arabic"]
let attractive_languages=`The languages I feel really attractive are:
${languages}`
console.log(attractive_languages)


// Q21
// Program that creates Objects containing these items.(Mystery box items)

interface MysteryBoxItem {
    name: string;
    category: string;
    price: number;
}

const item1: MysteryBoxItem = {
    name: "Funny Socks",
    category: "Clothing",
    price: 5.99
}

const item2: MysteryBoxItem = {
    name: "Mini Puzzle",
    category: "Toys",
    price: 3.49
}

const item3: MysteryBoxItem = {
    name: "Novelty Mug",
    category: "Kitchen",
    price: 7.99
}

const item4: MysteryBoxItem = {
    name: "Sticker Pack",
    category: "Stationery",
    price: 2.99
}

const item5: MysteryBoxItem = {
    name: "Joke Book",
    category: "Books",
    price: 4.99
}


const mysteryBox: MysteryBoxItem[] = [item1, item2, item3, item4, item5]


console.log("Mystery Box Contents:")
mysteryBox.forEach(item => {
    console.log(`- ${item.name} (${item.category}): $${item.price}`)
})


// Q22
// Intentional errors

let array:number[]=[10, 30, 45, 14, 5]

let index: number = 5;
if (index >= 0 && index < array.length) {
  console.log(array[index]);
} else {
  console.error('Index out of range');
}


// Q23
// Conditional tests

let temperature: number = 25
let city: string = 'New York'
let isWeekend: boolean = true
let age: number = 30
let isAdmin: boolean = false

// Test 1
console.log("Is temperature > 20? I predict True.")
console.log(temperature > 20)  // True

// Test 2
console.log("Is temperature < 20? I predict False.")
console.log(temperature < 20)   // False

// Test 3
console.log("Is city === 'New York'? I predict True.")
console.log(city === 'New York')   // True

// Test 4
console.log("Is city === 'Los Angeles'? I predict False.")
console.log(city === 'Los Angeles')   // False

// Test 5
console.log("Is isWeekend === true? I predict True.");
console.log(isWeekend === true);   // True

// Test 6
console.log("Is isWeekend === false? I predict False.");
console.log(isWeekend !== true);   // False

// Test 7
console.log("Is age >= 18? I predict True.");
console.log(age >= 18);   // True

// Test 8
console.log("Is age < 18? I predict False.");
console.log(age < 18);   // False

// Test 9
console.log("Is isAdmin === false? I predict True.");
console.log(isAdmin === false);   // True

// Test 10
console.log("Is isAdmin !== true? I predict True.");
console.log(isAdmin !== false);   // True



// Q24
// More conditional tests

// TASK 1
let fruit: string = 'apple'

// Test 1
console.log("Is fruit === 'apple'? I predict True.")
console.log(fruit === 'apple')  // True

// Test 2
console.log("Is fruit !== 'banana'? I predict True.")
console.log(fruit !== 'banana')  // True

// Test 3
console.log("Is fruit === 'orange'? I predict False.")
console.log(fruit === 'orange')   // False

// Test 4
console.log("Is fruit !== 'apple'? I predict False.")
console.log(fruit !== 'apple')   // False


// TASK 2
let city1: string = 'New York'

// Test 5
console.log("Is city.toLowerCase() === 'new york'? I predict True.")
console.log(city.toLowerCase() === 'new york')   // True

// Test 6
console.log("Is city.toLowerCase() === 'Los Angeles'? I predict False.")
console.log(city.toLowerCase() === 'Los Angeles')   // False

// TASK 3
let age1: number = 25;

// Test 7
console.log("Is age > 18? I predict True.")
console.log(age > 18)   // True

// Test 8
console.log("Is age < 18? I predict False.")
console.log(age < 18)   // False

// Test 9
console.log("Is age >= 30? I predict False.")
console.log(age >= 30)  // False

// Test 10
console.log("Is age <= 25? I predict True.")
console.log(age <= 25)   // True


// TASK 4
let isStudent: boolean = true
let hasDiscount: boolean = false

// Test 11
console.log("Is isStudent && hasDiscount? I predict False.")
console.log(isStudent && hasDiscount)   // False

// Test 12
console.log("Is isStudent || hasDiscount? I predict True.")
console.log(isStudent || hasDiscount)   // True

// Test 13
console.log("Is !isStudent && hasDiscount? I predict False.")
console.log(!isStudent && hasDiscount)   // False

// TASK 5
let fruits1: string[] = ['apple', 'banana', 'orange']

// Test 14
console.log("Is 'apple' in fruits? I predict True.")
console.log(fruits.includes('apple'))   // True

// Test 15
console.log("Is 'grape' in fruits? I predict False.")
console.log(fruits.includes('grape'))  // False

// TASK 6
let vegetables: string[] = ['carrot', 'spinach', 'broccoli']

// Test 16
console.log("Is 'lettuce' not in vegetables? I predict True.")
console.log(!vegetables.includes('lettuce'))  // True

// Test 17
console.log("Is 'spinach' not in vegetables? I predict False.")
console.log(!vegetables.includes('spinach'))   // False


// Q25
// Alien colors#1 

//version that passes if test
let alien_color:string="red"
if (alien_color=="green")
{console.log("The player earned 5 points.")}

// Version that fails the if test
alien_color = 'red';

if (alien_color === 'green') {
    // No output because the condition is not met
}


// Q26
// Alien colors#2

// Version that runs the if block
alien_color = 'green'

if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.')
} else {
    console.log('The player just earned 10 points.')
}

// Version that runs the else block
alien_color = 'yellow'

if (alien_color === 'green') {
    console.log('The player just earned 5 points for shooting the alien.')
} else {
    console.log('The player just earned 10 points.')
}

// Q27
// Alien colors#3 

// If-else chain with three conditions
alien_color = 'green';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}

// Another example with a different color
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}

// Yet another example with a different color
alien_color = 'red';

if (alien_color === 'green') {
    console.log('The player earned 5 points.');
} else if (alien_color === 'yellow') {
    console.log('The player earned 10 points.');
} else if (alien_color === 'red') {
    console.log('The player earned 15 points.');
}  


// Q28
// Stages of life

let age0=16
if (age0==2){console.log("The person is baby.")}
else if(age0==2 || age0<4){console.log("The person is a toddler.")}
else if(age0==4 || age0<13){console.log("The person is a kid.")}
else if(age0==13 || age0<20){console.log("The person is a teenager.")}
else if(age0==20 || age0<65){console.log("The person is a adult.")}
else if(age0==65 || age>65){console.log("The person is a elder.")}


// Q29
// Favourite fruits

// Task 1
let favorite_fruits:string[]=["Pomegranate", "Strawberry", "Apricot"]

// Task 2
if (favorite_fruits.includes("Strawberry")) {
    console.log("You really like strawberries!");
}
if (favorite_fruits.includes("Pomegranate")) {
    console.log("You really like pomegranates!")
}


if (favorite_fruits.includes("mango")) {
    console.log("You really like mangos!")
}


if (favorite_fruits.includes("Apricot")) {
    console.log("You really like apricots!")
}


if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!")
}


// Q30
// Hello admin

let usernames:string[]=["Zaima", "Laiba", "Zainab", "Admin", "Ayeza"]
for (let username of usernames)
{if(username=="Admin")
{console.log("Hello admin, would you like to see a status report?")}

else{console.log(`Hello ${username}, thank you for logging in again.`)}
}


// Q31
// No users

let users: string[] = []

// Check if the users array is empty
if (users.length === 0) {
    console.log("We need to find some users!")
}

// Remove all usernames and check again
users = [];

if (users.length === 0) {
    console.log("We need to find some users!");
}


// Q32
// Checking usernames

// Task 1
let current_users:string[]=["Aimalnoor", "Sheikhawidaad", "widaad.f", "ShakeelKashfi", "Ayan.Ali"]

// Task 2
let new_users:string[]=["S.brothers", "SheikhaWidaad", "Widaad.f", "IamWadi", "Nooor."]

// Convert current usernames to lowercase for case-insensitive comparison
let lowercased_current_users: string[] = current_users.map(user => user.toLowerCase())

// Task 3
for (let new_user of new_users) {
    let lowercased_new_user = new_user.toLowerCase()
    
   // Check if the lowercase version of the new username is in the list of lowercase current usernames
    if (lowercased_current_users.includes(lowercased_new_user)) {
        console.log(`The username "${new_user}" has already been used. Please enter a new username.`)
    } else {
        console.log(`The username "${new_user}" is available.`)
    }
}


// Q33
// Ordinal numbers

// Task 1
let numbers:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// Task 2
for(let number of numbers)

// Task 3
{let ordinal:string
 if (number==1)
{ordinal='st'}

else if (number==2)
{ordinal='nd'}

else if (number==3)
{ordinal='rd'}

else{ordinal='th'}


console.log(`${number}${ordinal}`)}


// Q34
// Pizzas

// Task 1
let favorite_pizzas:string[]=["Crust Pizza", "Fajita Pizza", "Malai boti Pizza"]

for (let Pizza of favorite_pizzas)
{console.log(Pizza)}

// Task 2
for (let pizza of favorite_pizzas)
{console.log(`I like ${pizza}.`)}

// Task 3
console.log("Pizza is an Italian dish. I like pizzas very much especially crust flavor is really delicious which I often eat. I really love pizzas.")


// Q35
// Animal

// Task 1
let animals:string[]=["Kangaroo", "Frog", "Rabbit"]

for (let animal of animals)
{console.log(animal)}

// Task 2
for(let animal of animals){
switch (animal){

case "Frog":
console.log("Frogs jump high with their strong legs.")
break

case "Kangaroo":
console.log("Kangaroos hop across the Australian plains.")
break

case "Rabbit":
console.log("Rabbits jump fast to stay safe.")
}
}


// Task 3

console.log("These animals use powerful legs to leap and hop with agility and speed.")


// Q36
// T-Shirts

function makeShirt(size: string, message: string): void {
    console.log(`Creating a shirt of size ${size} with the message: "${message}"`)
}

makeShirt('M', 'Bad Hair Day')


// Q37
// Large shirts

// Function to create a shirt with specified size and message
function make_Shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`Creating a shirt of size ${size} with the message: "${message}"`)
}

make_Shirt() // Large shirt with default message
make_Shirt('M') // Medium shirt with default message
makeShirt('S', 'Levis') // Small shirt with custom message


// Q38
// Cities
// Function to describe a city with its country
function describeCity(cityName: string, country: string = 'Australia') {
    console.log(`${cityName} is in ${country}.`)
}

describeCity('Karachi', 'Pakistan')  // Output: Karachi is in Pakistan.
describeCity('New York', 'USA')      // Output: New York is in USA.
describeCity('Sydney')       // Output: Sydney is in Default Country.



// Q39
// City names

function city_country(city:string, country:string){
    return `${city}, ${country}`
}

let location1 = city_country("Lahore", "Pakistan")
let location2 = city_country("Paris", "France")
let location3 = city_country("New York", "USA")

console.log(location1)
console.log(location2)
console.log(location3)


// Q40
// Albums

type Album = {
    artist: string
    title: string
    tracks?: number // Optional property
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title }
    if (tracks !== undefined) {
        album.tracks = tracks
    }
    return album
}

// Creating three albums without the number of tracks
const album1 = make_album("The Beatles", "Abbey Road")
const album2 = make_album("Pink Floyd", "The Dark Side of the Moon")
const album3 = make_album("Nirvana", "Nevermind")

// Creating an album with the number of tracks
const album4 = make_album("Taylor Swift", "1989", 13)

// Printing each album to verify the information
console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)


// Q41
// Magicians

let magicians: string[] = [
    "Harry Houdini",
    "David Copperfield",
    "Penn & Teller",
    "Dynamo",
    "Criss Angel"]

    function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician)
    })
}


console.log("Original Magicians:")
show_magicians(magicians)


// Q42
// Great magicians

// Function to modify the array of magicians by adding "the Great" to each name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i]
    }
}

// Create a copy of the original magicians array
let original_magicians: string[] = [...magicians]

// Modify the original magicians array
make_great(magicians)

// Call the function to show the modified magicians array
console.log("\nGreat Magicians:")
show_magicians(magicians)


// Q43
// Unchanged magicians

function make_great_copy(magicians: string[]): string[] {
    // Create a new array to hold the modified names
    let great_magicians: string[] = []
    
    // Iterate over each magician and add "the Great" to their name
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician)
    }
    
    // Return the new array with the modified names
    return great_magicians
}

// Reset the original magicians array to its initial state
magicians = [...original_magicians]

// Create a modified copy of the original magicians array
let great_magicians_copy: string[] = make_great_copy(original_magicians)

// Call the function to show the original magicians array (unchanged)
console.log("\nOriginal Magicians (Unchanged):")
show_magicians(original_magicians)


// Q44
// Sandwiches

// Task 1
function makeSandwich(...items: string[]): void {

// Task 2
    console.log("You have ordered a sandwich with the following items:")
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`)
    })
    console.log("Enjoy your sandwich!\n")
}

// Task 3

// First call: 3 items
makeSandwich("Ham", "Cheese", "Lettuce")

// Second call: 5 items
makeSandwich("Turkey", "Bacon", "Avocado", "Tomato", "Mayo")

// Third call: 2 items
makeSandwich("Peanut Butter", "Jelly")



// Q45
// Cars


// Task 1
function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): { [key: string]: any } {
    
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    }

    
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value
    })

    
    return car
}

// Task 2
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["sunroof", true])

// Task 3
console.log(myCar)


