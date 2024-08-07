import {useEffect, useState} from 'react';
import Main from './components/Main/Main';
import FadeIn from './shared/animations/FadeIn';
import Header from './components/header/Header';
import {PreLoader} from './shared/ui/Loader';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <div className='App'>
        {loading ? (
          <PreLoader title='#React App' size={30} />
        ) : (
          <FadeIn>
            {/* NOTE: Set Custom components here */}
            <Main />
          </FadeIn>
        )}
      </div>
    </>
  );
};

export default App;
