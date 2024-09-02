import { Provider } from "react-redux"
import store from "./store"
import ThemeProviderComponent from "./context/ThemeContext"
import RoutesPage from "./routes"

function App() {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <RoutesPage />
      </ThemeProviderComponent>
    </Provider>
  )
}

export default App
