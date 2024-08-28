import { Provider } from "react-redux"
import store from "./store"
import Home from "./pages/Home"
import ThemeProviderComponent from "./context/ThemeContext"

function App() {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <Home />
      </ThemeProviderComponent>
    </Provider>
  )
}

export default App
