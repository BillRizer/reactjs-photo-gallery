import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { GalleryPage } from "../../presentation/Gallery/pages";
import { AboutPage } from "../../presentation/pages/AboutPage";
import { NotAllowedPage } from "../../presentation/pages/NotAllowedPage";
import { NotFoundPage } from "../../presentation/pages/NotFoundPage";
import { LayoutContainer } from "../../presentation/shared/containers/Layout";
import {Provider, useDataFromPexels} from '../../presentation/Gallery/hooks/data-from-pexels'

export const RoutesComponent = ()=> {
  return (
    <Routes>
    <Route path="/" element={<LayoutContainer></LayoutContainer>}>
      <Route index element={<Provider><GalleryPage/></Provider>} />
      
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/dashboard" element={<>dashboard</>} />
      
      <Route path="/not-allowed" element={<NotAllowedPage></NotAllowedPage>} />
      <Route path="/*" element={<NotFoundPage></NotFoundPage>} />
    </Route>
  </Routes>
    )
}
