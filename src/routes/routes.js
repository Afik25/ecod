import MainLayout from "../MainLayout";
import PersistLogin from "../hooks/context/state/PersistLogin";
import RequireAuth from "../hooks/context/state/RequireAuth";
//
// pages
import Home from "../pages/home/Home";
import CourseReading from "../pages/course/CourseReading";
import ReadingContent from "../pages/reading-content/ReadingContent";
import PreviewContent from "../pages/reading-content/PreviewContent";

const ROLES = {
  admin: "admin",
  manager: "manager",
  user: "user",
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cours/reading", element: <CourseReading /> },
      { path: "/reading/content", element: <ReadingContent /> },
      { path: "/reading/content/preview", element: <PreviewContent /> },
    ],
  },
];
