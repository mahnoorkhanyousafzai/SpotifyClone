class ScrollableList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.items = []; // Store items with their categories
        this.allItems = []; // Store all items to show when "show all" is clicked
    }

    // Method to add a new list item
    addListItem(imageSrc, title, subtitle) {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.dataset.subtitle = subtitle; // Store subtitle for filtering

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = title;
        img.className = 'item-image';

        const infoContainer = document.createElement('div');
        infoContainer.className = 'item-info';

        const itemTitle = document.createElement('p');
        itemTitle.className = 'item-title';
        itemTitle.textContent = title;

        const itemSubtitle = document.createElement('p');
        itemSubtitle.className = 'item-subtitle';
        itemSubtitle.textContent = subtitle;

        infoContainer.appendChild(itemTitle);
        infoContainer.appendChild(itemSubtitle);
        listItem.appendChild(img);
        listItem.appendChild(infoContainer);

        this.items.push(listItem); // Add to the list of items
        this.allItems.push(listItem.cloneNode(true)); // Clone and store for "show all"
        this.container.appendChild(listItem); // Add to the container
    }

    // Method to filter items by category
    showCategory(category) {
        this.container.innerHTML = ''; // Clear current items
        this.items.forEach(item => {
            if (item.dataset.subtitle === category) {
                this.container.appendChild(item);
            }
        });
    }

    // Method to show all items
    showAll() {
        this.container.innerHTML = ''; // Clear current items
        this.allItems.forEach(item => this.container.appendChild(item.cloneNode(true)));
    }
}

// Create an instance of ScrollableList
const myList = new ScrollableList('scrollableList');

// Example data
const playlists = [
    { image: 'images/1.png', title: 'Liked Songs', subtitle: 'Playlist' },
    { image: 'images/2.png', title: 'Daily Mix', subtitle: 'Playlist' },
];

const artists = [
    { image: 'images/3.png', title: 'Lana Del Rey', subtitle: 'Artist' },
    { image: 'images/4.png', title: 'Halsey', subtitle: 'Artist' },
    { image: 'images/5.png', title: 'The Weekend', subtitle: 'Artist' },
    { image: 'images/6.jpeg', title: 'Taylor Swift', subtitle: 'Artist' },
    { image: 'images/6.png', title: 'Selena Gomez', subtitle: 'Artist' },
    { image: 'images/7.jpg', title: 'Dua Lipa', subtitle: 'Artist' },
    { image: 'images/8.jpeg', title: 'Karan Aujla', subtitle: 'Artist' },
    { image: 'images/9.jpeg', title: 'Diljit Donanjh', subtitle: 'Artist' },
];

const albums = [
    { image: 'images/10.png', title: 'reputation', subtitle: 'Album' },
    { image: 'images/11.png', title: 'Ultraviolences', subtitle: 'Album' },
];

// Add items to the list
playlists.forEach(item => myList.addListItem(item.image, item.title, item.subtitle));
artists.forEach(item => myList.addListItem(item.image, item.title, item.subtitle));
albums.forEach(item => myList.addListItem(item.image, item.title, item.subtitle));

// Update the list based on the selected category
function updateList(category) {
    if (category === 'All') {
        myList.showAll();
    } else {
        myList.showCategory(category);
    }
}

// Event listeners for category buttons
document.getElementById('playlist').addEventListener('click', () => updateList('Playlist'));
document.getElementById('artist').addEventListener('click', () => updateList('Artist'));
document.getElementById('album').addEventListener('click', () => updateList('Album'));
document.getElementById('cross').addEventListener('click', () => updateList('All'));



