import { useEffect, lazy, Suspense } from "react";
import SearchBox from "./components/SearchBox";
const Cards = lazy(() => import("./components/Cards"));
import Loader from "./components/Loader";
import { Flex } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { SWRConfig } from "swr";
//import { useGlobalContext } from './context';
import Cookies from "universal-cookie";

function App() {
  const navigate = useNavigate();
  //const { logged } = useGlobalContext();
  const cookies = new Cookies();
  const isLogged = cookies.get("logged");
  useEffect(() => {
  if (isLogged==="false" || isLogged==undefined) {
      //console.log("loguea3")
      navigate("/");
      //initialSearch();
    } 
  });

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
      <SearchBox placeholder={"Search GIPHY"} />
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
              <Cards />
            </SWRConfig>
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </>
  );

}

export default App;
