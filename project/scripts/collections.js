const items = [
    {
        name: 'Crush On You Ring',
        price: 105,
        stones: 'Ruby & Garnet',
        description: 'Vitality & Passion',
        imageUrl: "images/ring-hearts.webp"
        
    },
    {
        name: 'Harlow Ring',
        price: 126,
        stones: 'Raw Black Obsidian & White Sapphire',
        description: 'Strenght & Potencial',
        imageUrl: 'images/black-ring.webp'
    },
    {
        name: 'Crush On You Ring',
        price: 105,
        stones: 'Rose Quartz & Garnet',
        description: 'Self-love & Passion',
        imageUrl: 'images/light-hearts-ring.webp'
    },
    {
        name: 'Rose Quartz Flow Ring & Stardust Band',
        price: 220.65,
        stones: 'Raw Rose Quartz & White Sapphire',
        description: 'Self-love & Potencial',
        imageUrl: 'images/silver-stack.webp'
    },
    {
        name: 'Wild Child Necklace',
        price: 178.75,
        stones: 'Moonstone & White Topaz',
        description: 'Intuition & Awareness',
        imageUrl: 'images/gold-necklace.webp'
    },
    {
        name: 'Moonstone Bracelet Stack',
        price: 61.95,
        stones: 'Raw Moonstone',
        description: 'Intuition',
        imageUrl: 'images/bracelet-set.webp'
    }
];
let sortOrder = 'asc';

function displayItems(sortedItems) {
    const container = document.querySelector('.image-grid');
    container.innerHTML = '';
    if (sortedItems.length === 0) {
        container.innerHTML = '<p>No items available.</p>';
    } else {
        sortedItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}" loading="lazy">
                <h3>${item.name}</h3>
                <p>${item.stones}</p>
                <p>${item.description}</p>
                <p>$${item.price} USD</p>
            `;
            container.appendChild(div);
        });
    }
}

function updateSortStatus() {
    const sortStatus = document.querySelector('#sortStatus');
    if (sortOrder === 'asc') {
        sortStatus.textContent = 'Sorted by lowest to highest';
    } else {
        sortStatus.textContent = 'Sorted by highest to lowest';
    }
}

displayItems(items);
updateSortStatus();

document.querySelector('#sortButton').addEventListener('click', () => {
    if (items.length > 1) {
        if (sortOrder === 'asc') {
            items.sort((a, b) => b.price - a.price);
            sortOrder = 'desc';
        } else {
            items.sort((a, b) => a.price - b.price);
            sortOrder = 'asc';
        }
        displayItems(items);
        updateSortStatus();
    } else {
        alert('Not enough items to sort.');
    }
});