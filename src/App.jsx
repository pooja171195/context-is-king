import React from "react";
import {Routes,Route} from "react-router-dom";
import { Form_one } from "./Pages/Form1";
import { Form_Two } from "./Pages/Form2";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";

function App(){
return (
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/registration/two" element={<Form_Two/>}/>
  <Route path="/registration/one" element={<Form_one/>}/>
  <Route path="/users" element={<Users/>}/>
</Routes>
</>
);
}
export default App;
