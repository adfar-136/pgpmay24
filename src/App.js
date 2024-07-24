import About from "./components/About"
import Blog from "./components/Blog";
import Contact from "./components/Contact"
function App(){
  var visible = true;
  return (
    <>
     <h1>React App</h1>
     {visible ? <About/>:<Contact/>}
     {visible && <Blog/>}
    </>
  )
}

// export {App}
export default App