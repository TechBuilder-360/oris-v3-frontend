import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignupInterface } from '../screens/authentication/SignupInterface/SignupInterface';
import Home from '../screens';
import { SigninInterface } from '../screens/authentication/SigninInterface/SigninInterface';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*NOT FOUND */}
          <Route path="*" element={null} />
          <Route path="" element={<Home />} />
          <Route path="register" element={<SignupInterface />} />
          <Route path="login" element={<SigninInterface />} />
          {/* Admin dashboard Routes */}

          {/* <Route
						path="/dashboard/admin"
						element={
							<ProtectedRoute allowRoles={["admin"]}>
								component goes here........
							</ProtectedRoute>
						}
					/>   */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
