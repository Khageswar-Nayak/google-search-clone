import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
// import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";
import { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SearchResult = lazy(() => import("./components/SearchResult"));
const SearchResultInMobile = lazy(() =>
  import("./components/SearchResultInMobile")
);

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />

          <Route
            path="/:query/:startIndex"
            exact
            element={
              <Suspense
                fallback={
                  <div class="flex justify-center items-center h-screen">
                    <CircularProgress />
                  </div>
                }
              >
                <div className=" hidden md:block">
                  <SearchResult />
                </div>
                <div className="  md:hidden">
                  <SearchResultInMobile />
                </div>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
