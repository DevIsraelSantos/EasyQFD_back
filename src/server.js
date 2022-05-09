const app = require('./app');
const porta = process.env.PORT || 3001;

app.listen(porta, () => {console.log(`Online na porta : ${process.env.PORT || 3001}`)});

