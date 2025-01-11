import { BodyArea } from "./components/bodyArea/bodyArea"
import { Header } from "./components/headers/header"
import { useMainViewStore } from "./stores/mainViewStore";

function App() {
  const {
    currentPage
  } = useMainViewStore();
  return (
    <div>
      <Header />
      <BodyArea>
        {currentPage}
      </BodyArea>
    </div>
  )
}

export default App
