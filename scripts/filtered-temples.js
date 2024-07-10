const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', function() {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...

	{
		templeName: "Laie Hawaii",
		location: "Laie, Hawaii",
		dedicated: "1915, June, 1",
		area: 42100,
		imageUrl:
		"https://photos.smugmug.com/LDS-Temples/Laie-Hawaii-Temple/i-Bpsswg3/17/MbLNF8ZVDmGpPSDmHXscm2RqzWwhLsVFNQnDWrb4r/XL/Fountain%20Sunset%20-%20Laie%20Hawaii%20Temple%20-%20Alan%20Fullmer-XL.jpg" 
	},

	{
		templeName: "Redlands California",
		location: "Redlands, California",
		dedicated: "2003, September, 14",
		area: 17300,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-37504-main.jpg" 
	}, 

	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10-12",
		area: 17300,
		imageUrl:
		"https://www.vbfa.com/wp-content/uploads/2023/04/rome-temple-hero.jpg" 
	},

	{
		templeName: "Red Cliffs Utah",
		location: "St. George, Utah",
		dedicated: "2024, March, 24",
		area: 96277,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/red-cliffs-utah-temple/red-cliffs-utah-temple-44958-main.jpg" 
	},

	{
		templeName: "Sapporo Japan",
		location: "Sapporo Japan",
		dedicated: "2016, August, 21",
		area: 48480,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg" 
	}
	
  ];

// Function to create and display temple cards https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1');

function toggleMenu() {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    h1.classList.toggle('show');
}

hamButton.addEventListener('click', toggleMenu);

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 740px)').matches) {
        h1.classList.remove('show');
    }
});



function createTempleCard(filteredTemples) {
    const container = document.querySelector('.image-grid');
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedication:</span> ${temple.dedicated}</p>
            <p><span class="label">Area:</span> ${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.alt}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// Initial display of all temples
window.onload = function () {
    createTempleCard(temples);
};

// Function to filter temples based on category
function filterTemples(category) {
    let filteredTemples = [];

    switch (category) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900"));
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000"));
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
            break;
    }

    createTempleCard(filteredTemples);
}

// Event listeners for navigation links
document.querySelector("[title='Home']").addEventListener("click", () => {
    filterTemples('all');
});

document.querySelector("[title='Old']").addEventListener("click", () => {
    filterTemples('old');
});

document.querySelector("[title='New']").addEventListener("click", () => {
    filterTemples('new');
});

document.querySelector("[title='Large']").addEventListener("click", () => {
    filterTemples('large');
});

document.querySelector("[title='Small']").addEventListener("click", () => {
    filterTemples('small');
});