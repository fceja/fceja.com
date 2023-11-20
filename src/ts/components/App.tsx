import Container from "react-bootstrap/Container";
import { Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "@pages/ProjectsPage";
import { PAGE_PATHS } from "@common/Constants";

const App = () => {
  return (
    <Container fluid className="app-container p-0" id="app">
      <Routes>
        <Route path="/*" element={<Navigate to={PAGE_PATHS.INDEX} />} />
        <Route path={PAGE_PATHS.INDEX} element={<IndexPage />} />
      </Routes>
    </Container>
  );
};

export default App;
