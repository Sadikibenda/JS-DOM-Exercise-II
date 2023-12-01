//Update the 'Coffee' item to say 'Fair Trade Coffee
let coffee = document.querySelectorAll('li')[1]
coffee.innerHTML = "Fair Trade Coffee"

//Remove 'Twinkies' from the list
let Twinkies = document.querySelectorAll('li')[3]
Twinkies.remove();

//Add an item 'Cheese Whiz'
let newitem = document.createElement('li')
let textnode = document.createTextNode('Cheese Whiz')

newitem.appendChild(textnode)
document.getElementById('list').appendChild(newitem)

//Clear the list and programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']

let list = document.getElementById('list')
list.innerHTML = '';

let array = ['protein powder', 'muscle milk', 'power bars']
let text = "<ul>";

for (let i = 0; i < array.length; i++) {
   text += "<li>" + array[i] + "</li>";
}

list.innerHTML = text //or I can type document.getElementById("list").innerHTML = text;

//Add the class 'important' to the muscle milk item.

let muscleMilkitem = document.querySelectorAll('li')[1]

muscleMilkitem.classList.add("important")

