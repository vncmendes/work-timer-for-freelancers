import { Routes, Route } from "react-router-dom";
import { History } from "./pages/History/index";
import { Home } from "./pages/Home/index";
import { DefaultLayout } from "./layouts/DefaultLayout/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  );
}

// <Route>
//   <Route path="/admin" element={<AdminLayout />} />
//   <Route path="/products" element={<AdminLayout />} />
// </Route>
// esse código seta cfg para rota/layout de admin; a 2ª rota: products herdaria o /admin,
// ficando automaticamente /admin/products. Dentro do <Routes>
