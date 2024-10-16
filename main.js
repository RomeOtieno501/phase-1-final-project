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
        fetch('http://localhost:3000/guests')
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
    
        fetch('http://localhost:3000/guests', {
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
});