
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Inline from './components/Inline';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Stylesheet from './components/Stylesheet';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
// import './appStyles.css'
// import './appStyles.module.css'

function App() {
  return (
    <div className='App'>
      {/* <h1 className='error'>Error</h1>
      <h1 className={Styles.success}>success</h1> */}
    {/* <Greet name="Bruce" heroName="batman"/>
    <Greet name="clark" heroName="batman"/>
    <Greet name="Diana"/>
    <button>Action</button>
    <Greet name="alexa">
      <p>This is a child of amazon</p>
    </Greet>
    <Welcome name="Bruce" heroName="batman"/>
    <Welcome name="clark" heroName="batman"/>
    <Welcome name="slark" heroName="superman"/> 
    <Message/>

 <FunctionClick/>
 <ClassClick/>
 <EventBind/>
 <ParentComponent/>
 <UserGreeting/> */}
 {/* <NameList></NameList>
<Stylesheet primary={true}></Stylesheet>
<Inline></Inline> */}
<Counter/>
<ParentComponent/>
  </div>
  );
}

export default App;
