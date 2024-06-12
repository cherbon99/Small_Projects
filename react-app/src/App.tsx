import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

function App() {
  let items = ["New York", "San Fran", "Salt Lake", "Tokyo", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>

      <button onClick={() => console.log("Clicked")}>My Button</button>
    </div>
  );
}

export default App;
