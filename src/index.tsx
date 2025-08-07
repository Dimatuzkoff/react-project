import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './app/App.tsx';
import { BrowserRouter } from 'react-router';
import { StoreProvider } from './app/providers/store/StoreProvider.tsx';
import { ScrollToTop } from './shared/ui/ScrollToTop/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StoreProvider>
);


