import { useEffect } from "react";
import { BodyArea } from "./components/bodyArea/bodyArea"
import { Header } from "./components/headers/header"
import { useMainViewStore } from "./stores/mainViewStore";
import { ErrorPage } from "./pages/errorPage/errorPage";
import { useErrorPageStore } from "./stores/errorPageStore";
import { CounterPage } from "./pages/counterPage/counterPage";
import { TextAreaPage } from "./pages/textAreaPage/textAreaPage";

function App() {
  const {
    currentPage,
    registeredPages,
    registerPage,
    initializePage
  } = useMainViewStore();

  const {
    setErrorMessage
  } = useErrorPageStore();
  
  useEffect(() => {
    registerPage("error", <ErrorPage />);
    registerPage("idle", <CounterPage />);
    registerPage("textArea", <TextAreaPage />);

    initializePage();

    if(Array.from(registeredPages.keys()).filter(id => id !== "error" && "idle").length === 0) {
      setErrorMessage("No idle page registered");
    }
  }, [])

  return (
    <div className="flex flex-col h-full">
      <Header />
      <BodyArea>
        {currentPage}
      </BodyArea>
    </div>
  )
}

export default App
