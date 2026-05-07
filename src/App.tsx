import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <div className="app">
        <header>
          <h1>StonkProof Research</h1>
          <p>Advanced AI-driven market intelligence research lab.</p>
        </header>
        <main>
          <section>
            <h2>Welcome to StonkProof Research</h2>
            <p>Your advanced platform for AI-driven market intelligence.</p>
          </section>
        </main>
      </div>
      <Analytics />
    </>
  )
}

export default App
