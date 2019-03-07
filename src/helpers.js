export function randomName() {
    return (`${randomItem(adjectiveOne)} ${randomItem(adjectiveTwo)} ${randomItem(noun)}`);
}

const randomItem = function(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

const adjectiveOne = [
    "Adorable",
    "Delightful",
    "Homely",
    "Adventurous",
    "Determined",
    "Hungry",
    "Attractive",
    "Eager",
    "Jealous",
    "Smiling",
    "Average",
    "Blushing",
    "Expensive", 	
    "Lovely", 	
    "Talented",
    "Bored", 	
    "Exuberant", 	
    "Lucky", 	
    "Tame",
    "Brave",
    "Fair",
    "Magificent",
    "Tense",
    "Breakable",	
    "Faithful",	
    "Misty",
    "Terrible",
    "Courageous",
    "Gorgeous",
    "Panicky",
    "Wandering",
    "Crazy",
    "Graceful",
    "Perfect",
    "Weary",
    "Creepy",
    "Plain",
    "Wicked",
    "Zany",
    "Defeated",
    "Hilarious",
    "Zealous",
]

const adjectiveTwo = [
    "Bright",
    "Famous",
    "Modern",
    "Tasty",
    "Busy",
    "Fancy",
    "Motionless",
    "Thankful",
    "Calm",
    "Fierce",
    "Mushy",
    "Thoughtless",
    "Careful",
    "Filthy",
    "Mysterious",
    "Tired",
    "Clean",
    "Nervous",
    "Clear",
    "Frantic",
    "Nice",
    "Clever",
    "Friendly",
    "Nutty",
    "Uninterested",
    "Handsome",
    "Powerful",
    "Worrisome",
    "Happy",
    "Precious",
    "Worried",
    "Dangerous",
    "Healthy",
    "Prickly",
    "Dark",
    "Helpful",
    "Proud",
    "Puzzled",
]

const noun = [
    "Toys",
    "Book",
    "Crayon",
    "Pencil",
    "Dog",
    "Cat",
    "Cup",
    "Music",
    "Apple",
    "Stroller",
    "Bike",
    "Markers",
    "Bag",
    "Floor",
    "Car",
    "Train",
    "Truck",
    "Machine",
    "Coney",
    "Cards",
    "Kitten",
    "Spider",
    "Oranges",
    "Pig",
    "Horse",
    "Mouse",
    "Pizza",
    "Eggs",
    "Wheel",
    "Door",
    "Window",
    "Table",
    "Basketball Hoop",
    "Dresser",
    "Picture Frame",
    "Socks",
    "Television",
    "Handle",
    "Crib",
    "Bed",
    "Mattress",
    "Pillow",
    "Grass",
    "Slide",
    "Hula hoop",
    "Basket",
]