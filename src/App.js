import 'tachyons';
import Navigation from './components/navigation/navigation.component';
import Logo from './components/logo/logo.component';
import Rank from './components/rank/rank.component';
import ImageLinkForm from './components/image-link-form/image-link-form.component';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
