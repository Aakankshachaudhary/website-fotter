import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="footer">
        <div className="firstfooter">
          <h3>Laxmi Devi Institute of <br />
             Engineering & Technology
            
           </h3>
           <h5>Alwar-Tijara-Delhi-highway <br />
           chikani,Alwar,Rajasthan <br />
           India-301028
           <h4>+91-7073477274
           +91-9829103101</h4>
           <h5>director@lietalwar.org</h5>

           </h5><br /> <br />
           <h5>copyright All Right Reserved 2023,LIET</h5>
           
        </div>
        <div className="secondfooter"><a href=""> <h4>Quick links</h4></a> <br />
        About us <br />
          Admission <br />
          Apply @LIET <br />
          board of managment <br />
          Grievance of Redressal

      
        </div>

        <div className="thirdfooter"><a href=""> <h4>Courses </h4></a> <br />

             B.tech <br />

             M.tech <br />
             polytechnic <br />
             MBA <br />
        </div>
        <div className="fourthfooter"><a href=""> <h4>External links </h4></a><br />
           AICTE <br />
           BTU <br />
           BTER <br />
           DELENT <br />

        </div>
        
        
      </div>
    
    </>
  );
}

export default App;
