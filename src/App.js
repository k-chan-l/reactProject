import './App.css';
import {Counter} from "./features/counter/Counter";
import Main from './pages/Main';
import Invoices from "./pages/invoices";
import Invoice from "./pages/invoice";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Http} from "./features/http/Http";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Main />}>
                  <Route path={"counter"} element={<Counter />}/>
                  <Route path={"http"} element={<Http />}/>
                  <Route path={"invoices"} element={<Invoices />}>
                      <Route
                          index
                          element={
                              <main style={{ padding: "1rem" }}>
                                  <p>Select an invoice</p>
                              </main>
                          }
                      />{/*index는 부모의 주소를 공유 하기 때문에 처음 시작페이지 사용에 적합*/}
                      <Route path={":invoiceId"} element={<Invoice />} />
                  </Route>{/*invoiceID라는 변수(Nested 된 URL부분)를 가져감*/}
                  <Route
                      path="*"
                      element={
                          <main style={{ padding: "1rem" }}>
                              <p>There's nothing here!</p>
                          </main>
                      }
                  />{/* 패스가 *일 경우는 지정된 다른 링크외 모든 링크 접속시 이곳으로 이동*/}
              </Route>
          </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
