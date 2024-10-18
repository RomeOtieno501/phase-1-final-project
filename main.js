document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('guestForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const dateOfPresence = document.getElementById('dateOfPresence').value;
        const nationalId = document.getElementById('nationalId').value;
        const paymentMethod = document.getElementById('paymentMethod').value;

        addGuest(fullName, dateOfPresence, nationalId, paymentMethod);
    });

    function fetchGuests() {
        fetch('https://json-server-6-89ab.onrender.com/guests')
            .then(response => response.json())
            .then(guests => {
                guests.forEach(guest => {
                    addGuestToDOM(guest.fullName, guest.dateOfPresence, guest.nationalId, guest.paymentMethod, guest.id);
                });
            })
            .catch(error => console.error('Error fetching guests:', error));
    }
    fetchGuests();

    function addGuest(fullName, dateOfPresence, nationalId, paymentMethod) {
        const guest = { fullName, dateOfPresence, nationalId, paymentMethod };

        fetch('https://json-server-6-89ab.onrender.com/guests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guest)
        })
        .then(response => response.json())
        .then(newGuest => {
            addGuestToDOM(newGuest.fullName, newGuest.dateOfPresence, newGuest.nationalId, newGuest.paymentMethod, newGuest.id);
        })
        .catch(error => console.error('Error adding guest:', error));
    }

    function addGuestToDOM(fullName, dateOfPresence, nationalId, paymentMethod, id) {
        const guestList = document.getElementById('guestList');
        const guestDiv = document.createElement('div');
        guestDiv.className = 'guest';
        guestDiv.dataset.id = id;
        guestDiv.innerHTML = `
            <p>Name: ${fullName}</p>
            <p>Date of Presence: ${dateOfPresence}</p>
            <p>National ID: ${nationalId}</p>
            <p>Payment Method: ${paymentMethod}</p>
            <button id='remove' onclick="removeGuest(this)">Remove</button>
        `;
        guestList.appendChild(guestDiv);
    }
});

function removeGuest(button) {
    const guestDiv = button.parentElement;
    const id = guestDiv.dataset.id;

    fetch(`https://json-server-6-89ab.onrender.com/guests/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        guestDiv.remove();
    })
    .catch(error => console.error('Error removing guest:', error));
}
