import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Dashboard } from "./pages/Dashboard";
import { CourseView } from "./pages/CourseView";
import { LessonView } from "./pages/LessonView";
import { Login } from "./pages/Login";
import { Resources } from "./pages/Resources";
import { Premium } from "./pages/Premium";
import { Literature } from "./pages/Literature";
import { Blog } from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background font-body-md text-on-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/courses/:courseId" element={<CourseView />} />
            <Route path="/lessons/:lessonId" element={<LessonView />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
