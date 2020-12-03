import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Here is my app!</h1>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/signup' component={SignUpScreen} />
          <Route path='/signin' component={SignInScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
