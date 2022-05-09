import React from 'react'

import { About } from '../src/container'
import { Footer } from '../src/container'
import { Header } from '../src/container'
import { Skills } from '../src/container'
import { Testimonial } from '../src/container'
import { Work } from '../src/container'

const App = () => {
  return (
    <div>
      <About />
      <Footer />
      <Header />
      <Testimonial />
      <Skills />
      <Work />
    </div>
  )
}

export default App
