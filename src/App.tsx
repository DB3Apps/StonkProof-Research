import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              StonkProof Research
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                <p className="text-xl text-gray-500">
                  Advanced AI-driven market intelligence research lab
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <SpeedInsights />
    </>
  );
}

export default App;
