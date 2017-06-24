import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'Main';

// App css
require('style-loader!css-loader!sass-loader!appStyles');


ReactDOM.render(
  <div>
    <Main />
  </div>,
  document.getElementById('app')
);