document.addEventListener("DOMContentLoaded", () => {  
    document.getElementById('guestForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const fullName = document.getElementById('fullName').value;
        const dateOfPresence = document.getElementById('dateOfPresence').value;
        const nationalId = document.getElementById('nationalId').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
    
        addGuest(fullName, dateOfPresence, nationalId, paymentMethod);
    });
})