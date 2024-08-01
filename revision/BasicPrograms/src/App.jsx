import TodoListComponent from "./components/TodoListComponent";
import Counter from "./components/Counter";
import Dialogue from "./components/Dialogue";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Searchbar from "./components/Searchbar";
import ImageSlider from "./components/ImageSlider";
import Ratingcomponent from "./components/Ratingcomponent";
import Notestabs from "./components/Notestabs";
import "./App.css";

const App = () => {
  return (
    <div>
      <Counter />
      <TodoListComponent />
      <Dialogue />
      <Accordion />
      <Dropdown />
      <Searchbar />
      <ImageSlider />
      <Ratingcomponent />
      <Notestabs />
    </div>
  );
};

export default App;
