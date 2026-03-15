/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AllPrompts from './pages/AllPrompts';
import PromptDetail from './pages/PromptDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Tutorials from './pages/Tutorials';
import Pricing from './pages/Pricing';
import AICreationEdit from './pages/AICreationEdit';
import ImageToPrompt from './pages/ImageToPrompt';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prompts" element={<AllPrompts />} />
          <Route path="prompts/:id" element={<PromptDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="tools/edit" element={<AICreationEdit />} />
          <Route path="tools/image-to-prompt" element={<ImageToPrompt />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
