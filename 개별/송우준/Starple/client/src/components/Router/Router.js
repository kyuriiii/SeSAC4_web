import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Redirect,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";
// css
import "../../styles/common.scss";

// page component
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import SuccessSignUpPage from "../../pages/SuccessSignUpPage/SuccessSignUpPage";
import FindIdPage from "../../pages/FindIdPage/FindIdPage";
import ResetPw1Page from "../../pages/ResetPw1Page/ResetPw1Page";
import ResetPw2Page from "../../pages/ResetPw2Page/ResetPw2Page";
import ModifyPage from "../../pages/ModifyPage/ModifyPage";
import DiaryWrite from "../../pages/Diary/Write/DiaryWrite";
import WorkSpaceMain from "../../pages/WorkSpace/Main/WorkSpaceMain";
import MakePlanetPage from "../../pages/MakePlanetPage/MakePlanetPage";
import DiaryMain from "../../pages/Diary/Main/DiaryMain";
import DiaryRead from "../../pages/Diary/Read/DiaryRead";
import AlbumIndividual from "../../pages/Album/Individual/AlbumIndividual";
import AlbumMain from "../../pages/Album/Main/AlbumMain";
import Page404 from "../../pages/Page404/Page404";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Contact from "../../pages/Contact/Contact";
// test component
import JinseTest from "../Test/JinseTest/JinseTest";
import SionTest from "../Test/SionTest/SionTest";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const authorizedRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/welcome",
    element: <SuccessSignUpPage />,
  },
  {
    path: "/findid",
    element: <FindIdPage />,
  },
  {
    path: "/resetpw1",
    element: <ResetPw1Page />,
  },
  {
    path: "/resetpw2",
    element: <ResetPw2Page />,
  },
  {
    path: "/modifyInfo",
    element: <ModifyPage />,
  },
  {
    path: "/page404",
    element: <Page404 />,
  },
  {
    path: "/sionTest",
    element: <SionTest />,
  },

  {
    path: "/jinseTest",
    element: <JinseTest />,
  },
  {
    path: "/workspace/main",
    element: <WorkSpaceMain />,
  },
  {
    path: "/workspace/create",
    element: <MakePlanetPage />,
  },
  {
    path: "/diary/main",
    element: <DiaryMain />,
  },
  {
    path: "/diary/Read",
    element: <DiaryRead />,
  },
  {
    path: "/diary/write",
    element: <DiaryWrite />,
  },

  {
    path: "/album/main",
    element: <AlbumMain />,
  },
  ,
  {
    path: "/album/individual",
    element: <AlbumIndividual />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const unauthorizationRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/welcome",
    element: <SuccessSignUpPage />,
  },
  {
    path: "/findid",
    element: <FindIdPage />,
  },
  {
    path: "/resetpw1",
    element: <ResetPw1Page />,
  },
  {
    path: "/resetpw2",
    element: <ResetPw2Page />,
  },
]);

const Router = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(
      localStorage.getItem("token") !== null
        ? localStorage.getItem("token")
        : ""
    );
  }, [token]);

  return (
    <>
      <BrowserRouter>
        {token !== null ? (
          // <RouterProvider router={authorizedRouter} />
          // 토큰이 있을 경우
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<SignUpPage />}></Route>
            <Route path="/welcome" element={<SuccessSignUpPage />}></Route>
            <Route path="/findid" element={<FindIdPage />}></Route>
            <Route path="/resetpw1" element={<ResetPw1Page />}></Route>
            <Route path="/resetpw2" element={<ResetPw2Page />}>
              <Route path=":uid" element={<ResetPw2Page />} />
            </Route>
            <Route path="/modifyInfo" element={<ModifyPage />}></Route>
            <Route path="/sionTest" element={<SionTest />}></Route>
            <Route path="/jinseTest" element={<JinseTest />}></Route>
            <Route path="/diary/write" element={<DiaryWrite />}>
              <Route path=":planet/:category" element={<DiaryWrite />} />
            </Route>
            <Route path="/diary/main" element={<DiaryMain />}>
              <Route path=":planet/:category" element={<DiaryMain />} />
            </Route>
            <Route path="/diary/read" element={<DiaryRead />}>
              <Route path=":planet/:category/:postId" element={<DiaryMain />} />
            </Route>
            <Route path="/workspace/main" element={<WorkSpaceMain />}></Route>
            <Route
              path="/workspace/create"
              element={<MakePlanetPage />}
            ></Route>
            <Route
              path="/album/main/:planet/:category"
              element={<AlbumMain />}
            ></Route>
            <Route
              path="/album/individual"
              element={<AlbumIndividual />}
            ></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        ) : (
          // <RouterProvider router={unauthorizationRouter} />
          // 토큰이 없을 경우
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<SignUpPage />}></Route>
            <Route path="/welcome" element={<SuccessSignUpPage />}></Route>
            <Route path="/findid" element={<FindIdPage />}></Route>
            <Route path="/resetpw1" element={<ResetPw1Page />}></Route>
            <Route path="/resetpw2" element={<ResetPw2Page />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default Router;
