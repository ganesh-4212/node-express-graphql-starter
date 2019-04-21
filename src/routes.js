import { AuthorService, BookService } from './service';

export default function routesConfig(app) {
  app.post('/api/authors', async (req, res) => {
    try {
      const author = await AuthorService.createAuthor(req.body);
      res.status(201).send(author);
    } catch (ex) {
      res.send(ex);
    }
  });

  app.get('/api/authors/:id', async (req, res) => {
    const author = await AuthorService.getById(req.params.id);
    res.send(author);
  });

  app.get('/api/books/:isbn', async (req, res) => {
    const book = await BookService.getBook(req.params.isbn);
    res.send(book);
  });

  app.get('/api/books/', async (req, res) => {
    const books = await BookService.getAllBooks();
    res.send(books);
  });

  app.post('/api/books/', async (req, res) => {
    const book = await BookService.createBook(req.body);
    res.send(book);
  });
}
