const BodyComponent = () => {
  const element = document.createElement('div');

  element.innerHTML = `
    <div>This is a test</div>
  `;

  return element;
}

export default BodyComponent;