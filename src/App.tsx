import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppWrap, ContentWrap } from "./App.styled";

import CustomButtonMolecule from "./components/molecules/CustomButton.molecule/CustomButton.molecule";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <CustomButtonMolecule />
      </div>
    ),
  },
]);

function App() {
  return (
    <AppWrap>
      <RouterProvider router={router} />
    </AppWrap>
  );
}

export default App;
