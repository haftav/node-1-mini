var books = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        let book = req.body;
        book.id = id;
        books.push(req.body)
        id += 1
        res.status(200).send(books);
    },
    read: (req, res) => {
        res.status(200).send(books);
    },
    update: (req, res) => {
        let id = Number(req.params.id);
        let updated = req.body;

        books.forEach((el, i, arr) => {
            if (el.id === id) {
                arr[i] = updated;
            }
        })
        res.status(200).send(books);
    },
    delete: (req, res) => {
        let id = Number(req.params.id);
        let index = books.findIndex((book) => book.id === id);
        books.splice(index, 1);
        res.status(200).send(books);
    }
}