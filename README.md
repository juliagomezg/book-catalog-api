# 📚 Book Catalog API

A simple RESTful API built with **Node.js, Express, and MongoDB Atlas** to manage a catalog of books. This project demonstrates backend development, MongoDB integration, and REST API design following clean code and SOLID principles.

---

## 🚀 Features

- ✅ Add new books
- 📖 Retrieve all books
- 📝 Update book details
- ❌ Delete books
- 🌐 RESTful API design

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (via Mongoose)
- **Tools:** Nodemon, dotenv

---

## 📂 Project Structure

book-catalog-api/ │ ├── controllers/ # API logic (CRUD operations) ├── models/ # Mongoose schemas ├── routes/ # API endpoints ├── config/ # MongoDB connection ├── .env # Environment variables (not uploaded) ├── .gitignore # Files to ignore in Git ├── index.js # App entry point └── LICENSE # MIT License



## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/juliagomezg/book-catalog-api.git
cd book-catalog-api
2. Install dependencies
bash
Copiar
Editar
npm install
3. Set up environment variables
Create a .env file in the root folder and add:

env
Copiar
Editar
MONGODB_URI=your_mongodb_connection_string
PORT=3000
⚠️ Make sure .env is in your .gitignore to keep secrets safe.

4. Run the API
bash
Copiar
Editar
npm run dev
💡 Usage
Base URL:
bash
Copiar
Editar
http://localhost:3000/api/books
API Endpoints:
Method	Endpoint	Description
GET	/api/books	Get all books
POST	/api/books	Add a new book
PUT	/api/books/:id	Update a book by ID
DELETE	/api/books/:id	Delete a book by ID
📝 Example Book JSON
json
Copiar
Editar
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "year": 1997,
  "genre": "Fantasy"
}
🎯 Future Improvements
✅ Input validation with Joi or express-validator
✅ Authentication with JWT
✅ Pagination and filtering for book lists
✅ Unit testing with Jest or Mocha
📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙋‍♀️ About Me
Hi! I'm Julia Gomez, an aspiring backend developer working on building real-world projects to showcase my skills in Node.js, MongoDB, and REST API development.
Feel free to connect with me on LinkedIn!
linkedin.com//in/juliagomezg