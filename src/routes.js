import MainCourse from "./Pages/Courses/MainCourse/MainCourse";
import MainCategory from "./Pages/Categores/MainCategory/MainCategory";
import MainArticle from "./Pages/Articles/MainArticle/MainArticle";
import Home from "./Pages/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/articles/:articleId", element: <MainArticle /> },
  { path: "/categories/:categoryId", element: <MainCategory /> },
  { path: "/courses/:courseId", element: <MainCourse /> },
];
export default routes;
