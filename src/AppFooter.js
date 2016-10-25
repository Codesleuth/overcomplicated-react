import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function AppFooter(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Overcomplicated</strong> by <a href="http://www.codesleuth.co.uk">David Wood</a>.
            The source code is licensed <a href="http://opensource.org/licenses/mit-license">MIT</a>.
          </p>
          <p>
            <a className="icon" href="https://github.com/Overcomplicated/website">
              <i className="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
