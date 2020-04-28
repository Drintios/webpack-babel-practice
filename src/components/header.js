const Header = () => {
  const element = document.createElement('header');

  element.innerHTML = `
    <h1>header title</h1>
    <ul>
      <li>header element</li>
      <li>header element</li>
      <li>header element</li>
    </ul>
  `;

  return element;
}

export default Header;