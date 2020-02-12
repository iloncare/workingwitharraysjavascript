var warriors = [
  {
    name: "Bob",
    damage: 2,
    health: 10,
    warrior: true
  },
  {
    name: "Jerry",
    damage: 1,
    health: 12,
    warrior: true
  },
  {
    name: "Mavis",
    damage: 2,
    health: 10,
    warrior: true,
    color: "red"
  },
  {
    name: "Morty",
    damage: 4,
    health: 10,
    warrior: true
  },
  {
    name: "Shorty",
    damage: 10,
    health: 3,
    warrior: false
  },
  {
    name: "Porty",
    damage: 1,
    health: 14,
    warrior: true
  },
  {
    name: "Perry",
    damage: 2,
    health: 9,
    warrior: true
  },
  {
    name: "Larry",
    damage: 2,
    health: 17,
    warrior: false,
    color: "red"
  }
];

for (var i = 0; i < warriors.length; i++) {
  if (warriors[i].warrior && warriors[i].damage >= 2 && warriors[i].health >= 10) {
    var ele = document.createElement("div");
    var nameElement = document.createElement("h3");
    var damageElement = document.createElement("h3");
    var healthElement = document.createElement("h3");

    nameElement.innerHTML = "Name: " + warriors[i].name;
    nameElement.style.color = warriors[i].color;
    damageElement.innerHTML = "Damage: " + warriors[i].damage;
    healthElement.innerHTML = "Health: " + warriors[i].health;
    

    ele.appendChild(nameElement);
    ele.appendChild(damageElement);
    ele.appendChild(healthElement);

    document.body.appendChild(ele);
  }
}