import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <h1>
        Me react app working!!<br></br>
        А Женя -Хуй с горы!<br></br>
        Очень хочет прогать...<br></br>
        Давайте посмотрим, получится ли у него?{" "}
        {new Date().toLocaleDateString()}
    </h1>
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById('root')
);
