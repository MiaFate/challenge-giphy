import { useState, useEffect, lazy, Suspense } from "react";
import SearchBox from "./components/SearchBox";
const Cards = lazy(() => import("./components/Cards"));
import Loader from "./components/Loader";
import { Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";


function App() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logged") === "true") {
      console.log("loguea3")
      //initialSearch();
    } else {
      navigate("/");
    }
  }, []);

  const ErrorFallback = ({ error }) => {
    console.log(error)
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <h1>{`${error}`}</h1>
      </Flex>
    )
  }

  return (
    <>
      <h1>Giphy Challenge ADV JS Study Group</h1>
      <SearchBox placeholder={"Search GIPHY"} setText={setText} />
      <Flex direction='column' align='center'>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loader />}>
            <SWRConfig
              value={{
                fetcher: (...args) =>
                  fetch(...args).then((res) => {
                    if (res.ok) {
                      return res.json();
                    } else {
                      throw new Error("Fetch failed");
                    }
                  }),
              }}
            >
            {console.log("app")}
              <Cards query={text} />
            </SWRConfig>
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </>
  );

}

export default App;
