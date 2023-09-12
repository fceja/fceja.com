import { Navigate, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import HomePage from "ts/pages/HomePage";
import { PAGE_PATHS } from "ts/common/Constants";

const App = () => {
  return (
    <Container fluid className="app-container p-0">
      <Routes>
        <Route path="/*" element={<Navigate to={PAGE_PATHS.HOME} />} />
        <Route path={PAGE_PATHS.HOME} element={<HomePage />} />
      </Routes>
    </Container>
  );
};

export default App;
