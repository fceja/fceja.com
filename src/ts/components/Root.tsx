import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "ts/components/App";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
