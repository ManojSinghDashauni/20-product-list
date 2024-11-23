import { Provider } from "react-redux";
import store from "./store/store";
import { Cart } from "./components/Cart";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <div className="container__left">
            <h1 className="heading--1">Desserts</h1>
            <Card />
          </div>
          <div className="container__right">
            <Cart />
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
