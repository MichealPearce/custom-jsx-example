function Example() {
  return (
    <div className="test">
      Hello, World!
      <br />
      <button onclick="alert('Hello, There!')">Click Me!</button>
    </div>
  );
}

const app = document.getElementById("app");
app?.append(<Example />);
