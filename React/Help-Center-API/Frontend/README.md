### MERN-Stack APP:

**Title:** Help Center API

**Objective:**  
Create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API should allow users to create, retrieve these cards.

**Blueprint of home page:**

## Screenshots 🖼️

### 01. Navbar & Searchbox.

![Screenshot 1](<images/Screenshot 2024-08-22 174845.png>)

### 02. Cards.

![Screenshot 2](<images/Screenshot 2024-08-22 174910.png>)

### 03. Footer.

![Screenshot 3](<images/Screenshot 2024-08-22 174925.png>)

### 04. iPhone 14 pro max view.

![Screenshot 4](<images/Screenshot 2024-08-22 175050.png>)

### 05. Serfsce Duo view.

![Screenshot 5](<images/Screenshot 2024-08-22 175145.png>)

### 06. Nest Hub Max view.

![Screenshot 6](<images/Screenshot 2024-08-22 181809.png>)

###Under Developement!

**Project Remaining Requirements:**

1. **Set up the project:**

   - Create a new Node.js project using Express.js.
   - Set up a basic server with a single endpoint to check if the server is running (e.g., `GET /ping`).

2. **Create a Card Model:**

   - Model for a card. Each card has the following fields:
     - `id` (string): A unique identifier for the card.
     - `title` (string): The title of the card (e.g., "Branches").
     - `description` (string): A brief description of what the card represents (e.g., "Abstract Branches lets you manage, version, and document your designs in one place.").

3. **Build the API Endpoints:**

   - **Create a card:** Endpoint to add a new card to the help center.
     - `POST /cards`: This should accept the card details (title, description, link) in the request body and create a new card.
   - **Get all cards:** Endpoint to retrieve all the cards.
     - `GET /cards`: Returns a list of all cards in the help center.
   - **Get a specific card:** Endpoint to retrieve the details of a single card by its title.
     - `GET /cards/:title`: Returns the details of a specific card.

4. **Error Handling:**
   - Error handling for cases such as trying to access a non-existent card, validation errors, and server errors.
