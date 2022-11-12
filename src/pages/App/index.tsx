import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

const OrderCardPage = lazy(() => import("../OrderCard"));
const DashboardLayout = lazy(() => import("../../layout/Dashboard"));
const DashboardPage = lazy(() => import("../Dashboard"));

function App() {
  return (
    <Suspense fallback={<div className="h-full w-full"> Loading...</div>}>
      <Routes>
        <Route path="/">
          <Route index element={<OrderCardPage />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Outlet />
            </DashboardLayout>
          }
        >
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
