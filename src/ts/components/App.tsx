import { Navigate, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import IndexPage from "ts/pages/IndexPage";
import { PAGE_PATHS } from "ts/common/Constants";

const App = () => {
  return (
    <Container fluid className="app-container p-0" test-id="app">
      <Routes>
        <Route path="/*" element={<Navigate to={PAGE_PATHS.INDEX} />} />
        <Route path={PAGE_PATHS.INDEX} element={<IndexPage />} />
      </Routes>
    </Container>
  );
};

export default App;
