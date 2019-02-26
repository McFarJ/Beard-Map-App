import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>My first app</h1>
        <nav>
          <ul><li>twitter</li><li>FB</li></ul>
        </nav>
      </header>
    )
  }
}

const Footer = () => {
  return (
    <footer>
      <p>twist a nip</p>
    </footer>
  )
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
