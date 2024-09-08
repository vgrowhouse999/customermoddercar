function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const artStyles = [/* list of art styles */];
const cars = [/* list of cars */];
const colors = [/* list of colors */];
const mods = [/* list of mods */];

function update() {
    const artStyle = getRandomElement(artStyles);
    const car = getRandomElement(cars);
    const color = getRandomElement(colors);
    const mod = getRandomElement(mods);

    const output = `The scene portrays the car, a ${car} painted in ${color} color to the tone of ${artStyle}. Car Mods are: ${mod}.`;
    
    document.getElementById('output').innerText = output;
}
