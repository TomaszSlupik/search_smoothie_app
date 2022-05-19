const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const photoTwo = document.querySelector(".photoTwo");
const eight = document.querySelector(".eight");
const form = document.querySelector(".form");
const btn1 = document.querySelector(".btn1");
const mouse = document.querySelector(".mouse");
const back = document.querySelector(".back");
const ul = document.querySelectorAll('ul')

const iceSmoothie = () => {
	photoTwo.setAttribute("src", "./img/ice.jpg");
};

const green = () => {
	photoTwo.setAttribute("src", "./img/green.jpg");
};

const protein = () => {
	photoTwo.setAttribute("src", "./img/protein.jpg");
};

const mango = () => {
	photoTwo.setAttribute("src", "./img/mango.jpg");
};

const spinach = () => {
	photoTwo.setAttribute("src", "./img/spinach.jpg");
};
const chia = () => {
	photoTwo.setAttribute("src", "./img/chia.jpg");
};
const vegan = () => {
	photoTwo.setAttribute("src", "./img/vegan.jpg");
};

const banana = () => {
	photoTwo.setAttribute("src", "./img/banana.jpeg");
};

const check = (e) => {
	const inputText = e.target.value.toLowerCase();

	ul.forEach(item => {
		const task = item.textContent;
		if (task.toLowerCase().indexOf(inputText) !== -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
};


const backProces = () => {
    form.value=""
	two.textContent = "Zielone smoothie";
	three.textContent = "Wysokobiałkowe smoothie";
	four.textContent = "Mango smoothie";
	five.textContent = "Smoothie ze szpinakiem";
	six.textContent = "Owocowe smoothie z chia";
	seven.textContent = "Wegańskie kakaowe smoothie";
	eight.textContent = "Smoothie bananowe";
};

const enterKey = (e) => {
	if (e.key === "Enter") {
		check();
	}
};

two.addEventListener("click", green);
three.addEventListener("click", protein);
four.addEventListener("click", mango);
five.addEventListener("click", spinach);
six.addEventListener("click", chia);
seven.addEventListener("click", vegan);
eight.addEventListener("click", banana);
btn1.addEventListener("click", check);
form.addEventListener("keyup", check);
form.addEventListener("keyup", enterKey);
back.addEventListener("click", backProces);
