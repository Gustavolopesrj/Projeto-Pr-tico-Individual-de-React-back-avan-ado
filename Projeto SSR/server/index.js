require('ignore-styles')

// Requisitando as dependencias do babel
require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})
// Chamando a conexão com o servidor
require('./server')