import Header from "./Components/Header";
import { NavigationBar } from "./Components/NavigationBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Academics from "./Components/Academics";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import StudentAcademics from "./Components/StudentAcademics";
import FacultyAcademics from "./Components/FacultyAcademics";
import Logout from "./Components/Logout";
import ThirdyearBranches from "./Components/ThirdYear/ThirdyearBranches";
import Csit2ThirdYearSubjects from "./Components/ThirdYear/Csit2ThirdYearSubjects";
import { FacultysideAttandance } from "./Components/ThirdYear/attandance";
import AttendanceTable from "./Components/ThirdYear/AttandenceTable";


function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>
      <Route path='/student/academics' element={<Logout/>} />
      <Route path='/faculty/academics' element={<Logout/>} />
      <Route path='/3rdyear/branches' element={<Logout/>} />
      <Route path='/3rdyear/csit-2/subjects' element={<Logout/>} />
      <Route path='/3rdyear/csit-2/subjects/:sub' element={<Logout/>} />
      <Route path='/student/academics/attendance/' element={<Logout/>} />
      
      
      
      </Routes>
      <Header/>
        <NavigationBar/>
        
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/api/academics' element={<Academics/>} />
          <Route path='/student/academics/attendance' element={<AttendanceTable/>} />
          <Route path='/student/academics' element={<StudentAcademics/>} />
          <Route path='/faculty/academics' element={<FacultyAcademics/>} />
          <Route path='/3rdyear/branches' element={<ThirdyearBranches/>} />
          <Route path='/3rdyear/csit-2/subjects' element={<Csit2ThirdYearSubjects/> } />
          <Route path='/3rdyear/csit-2/subjects/:sub' element={<FacultysideAttandance/> } />
          
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );

}

export default App;
