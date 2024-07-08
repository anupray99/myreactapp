// import Student from './Student';
import ContextDemo from './ContextDemo';
import MyProvider from './Context/MyProvider';
import Student from './Student';
function App() {
  return (
    <MyProvider>
      <div>
        <Student />
        <ContextDemo />
      </div>
    </MyProvider>

  );
}

export default App;


