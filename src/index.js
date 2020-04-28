import Header from './components/header.js';
import BodyComponent from './components/body-component.js';

function App() {
  return BodyComponent();
}

const components = [
  Header,
  App
];

(() => {
  for (const component of components) {
    document.querySelector('#app').appendChild(component());
  }
})();