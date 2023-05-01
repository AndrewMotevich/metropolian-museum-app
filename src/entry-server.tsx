import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StaticRouter } from 'react-router-dom/server';

export function render(req, res, url) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/src/assets/react.svg" />
        <link rel="stylesheet" href="../dist/client/assets/index.css"></link>
        <title>React components</title>
      </head>

      <body>
        <div id="root">
          <Provider store={store}>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </Provider>
        </div>
      </body>
    </html>,
    {
      bootstrapModules: ['../dist/client/assets/index.js'],
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        stream.pipe(res);
      },
    }
  );
  return stream;
}
