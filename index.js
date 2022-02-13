// const express = require('express');
// const index = express();
// const port = 3000;

// index.get('/main', (req, res) => {
//     res.sendfile('./layout/html/index.html')
// });
// index.get('/main/contacts', (req, res) => {
//     res.sendfile('./layout/html/contacts.html')
// });
// index.get('/main/api', (req, res) => {
//     res.sendfile('./layout/html/api.html')
// });

// index.listen(port, () => {
//     console.log(`Example app listenning  on port ${port}`);

// })

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const indexPath = path.resolve(`${__dirname}/../layout.`);
app.get('/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`${ indexPath }/html/${ file }`)
});
app.get('/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(`${ indexPath }/html/${ file }`)
});
app.get('/:file', (req, res) => {
const file = req.params.file;
res.sendFile(`${ indexPath }/html/${ file }`)
})
1)
app.getC / css /: file.,
    (req, res) = {
        const file = req.params.file res.sendFile(S { indexPath }
            /css/Sffilel.)
    }) app.listen(port, () = * console.log(Server is running on port: $iportY)