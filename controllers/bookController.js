const Book = require("../models/Books");

// Ver todos los libros
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  console.log('📚 Todos los libros encontrados:', books); // Mostrar en terminal
  res.json(books);
};

// Agregar un libro nuevo
exports.addBook = async (req, res) => {
  const newBook = await Book.create(req.body);
  console.log('✅ Libro agregado:', newBook); // Mostrar el libro que se agregó
  res.json(newBook);
};

// Actualizar un libro (completo)
exports.updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  console.log(`🛠️ Libro con ID ${req.params.id} actualizado:`, updatedBook); // Mostrar libro actualizado
  res.json(updatedBook);
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  console.log(`❌ Libro con ID ${req.params.id} eliminado:`, deletedBook); // Mostrar libro eliminado
  res.json(deletedBook);
};
