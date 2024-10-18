# phase-1-final-project

# Rome Gardens Online Booking System

## Overview
This is a simple web application for booking rooms at **Rome Gardens**, a luxurious hotel in Nairobi. The app allows users to reserve a room by filling out a form, view the list of guests, and remove guests from the list. Data is stored and retrieved from a mock JSON database hosted on Render using `json-server`.

## Features

- Make Reservations: Users can submit a form to add a reservation with guest details.
- View Guests: All registered guests are displayed in a list.
- Remove Guests: Guests can be removed from the list with a click.
- Edit Guests: Editable form for updating guest information.

## Technologies Used

- **HTML**: Provides the structure and layout of the web page.
- **CSS**: Handles the styling and visual aspects of the website.
- **JavaScript**: Adds interactivity and handles form submission, guest list management, and data fetching.
- **JSON Server**: A fake REST API to store and serve guest data, hosted on Render.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of HTML, CSS, and JavaScript.

### Installation Steps
1.**Fork the Repository**
-Click on the "Fork" button at the top right corner of the repository.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/phase-1-final-project.git
   cd phase-1-final-project

3. Install dependencies: Install json-server if running locally:
4. Run the JSON server locally (Optional for local testing):
5. Open index.html in your browser to interact with the application.


**How It Works**

Booking a Guest:
The user fills in their full name, date of presence, national ID, and selects a payment method.
Upon submitting the form, the guest details are sent via a POST request to the API.
The guest is added to the guest list dynamically.

Displaying Guests:
When the page loads, a GET request is made to fetch the list of guests from the server, and they are displayed on the page.

Removing a Guest:
Each guest has a "Remove" button that allows the user to delete the guest from the list via a DELETE request.


**Usage**
Once the project is set up, you can test the following features:

1. Add a New Guest: Fill out the reservation form and click "Reserve" to add a guest to the guest list.
2. View All Guests: See all registered guests in the guest list below the form.
3. Remove a Guest: Click the "Remove" button next to any guest to delete them from the list.


**Contributing**
1. Fork this repository.
2. Create Your Feature Branch.


**License**
This project is licensed under the MIT License.

Author
Rome Ojuro Levin
Email: otienorome2@gmail.com


