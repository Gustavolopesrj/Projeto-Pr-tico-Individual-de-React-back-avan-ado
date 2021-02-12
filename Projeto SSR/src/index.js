import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// Colocando o hydrate para renderizar o arquivo no lado do servidor e permitir a nossa pagina ser pesquisada pelo SEO;
ReactDOM.hydrate(<App />, document.getElementById('root'));


