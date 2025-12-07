import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Zap, MessageSquare, Send } from 'lucide-react';

const Demo = () => {
  const [chatbotQuestion, setChatbotQuestion] = useState('');
  const [chatbotAnswer, setChatbotAnswer] = useState('');
  const [chatbotLoading, setChatbotLoading] = useState(false);
  
  const [apiQuestion, setApiQuestion] = useState('How does your project use AI?');
  const [apiTestResult, setApiTestResult] = useState('');
  const [apiTestLoading, setApiTestLoading] = useState(false);

  const handleChatbotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatbotQuestion.trim()) return;
    
    setChatbotLoading(true);
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: chatbotQuestion })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `Server error: ${response.status} ${response.statusText}` }));
        setChatbotAnswer(`Error: ${errorData.error || `Server returned ${response.status}`}`);
        return;
      }
      
      const data = await response.json();
      setChatbotAnswer(data.answer || 'Error getting response');
    } catch (error) {
      setChatbotAnswer('Error: Could not connect to API');
    } finally {
      setChatbotLoading(false);
    }
  };

  const handleApiTest = async () => {
    if (!apiQuestion.trim()) return;
    
    setApiTestLoading(true);
    setApiTestResult('');
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: apiQuestion })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `Server error: ${response.status} ${response.statusText}` }));
        setApiTestResult(`Error: ${errorData.error || `Server returned ${response.status}`}`);
        return;
      }
      
      const data = await response.json();
      setApiTestResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setApiTestResult('Error: Could not connect to API');
    } finally {
      setApiTestLoading(false);
    }
  };


  return (
    <div className="min-h-screen text-white font-sans" style={{ background: 'linear-gradient(to bottom right, #4E56C0, #9B5DE0, #D78FEE)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-20 backdrop-blur-md z-50 border-b border-white border-opacity-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 cursor-pointer">
              <div className="bg-white bg-opacity-10 p-2 rounded-xl border border-white border-opacity-20">
                <img src="/logo.png" alt="Silta Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Silta - the Bridge</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Demo <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">Experience</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Experience Silta's face recognition technology in action
            </p>
          </div>

          {/* Demo Videos Section */}
          <div className="space-y-8 mb-12">
            {/* Pitch Video */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
              <h2 className="text-3xl font-bold mb-4">Pitch Video</h2>
              <p className="text-lg text-gray-200 mb-6">
                Learn about Silta's mission and vision
              </p>
              <div className="rounded-2xl overflow-hidden border border-white border-opacity-20 shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/CrahnhAAr0Q"
                    title="Silta Pitch Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Demo Video */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
              <h2 className="text-3xl font-bold mb-4">Demo Video</h2>
              <p className="text-lg text-gray-200 mb-6">
                Watch Silta's face recognition technology in action
              </p>
              <div className="rounded-2xl overflow-hidden border border-white border-opacity-20 shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/tOJCP0sMnXk"
                    title="Silta Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Real-Life Video */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
              <h2 className="text-3xl font-bold mb-4">Real-Life Application</h2>
              <p className="text-lg text-gray-200 mb-6">
                See how Silta helps dementia patients in real-world scenarios
              </p>
              <div className="rounded-2xl overflow-hidden border border-white border-opacity-20 shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/BaWTdfqv8l8"
                    title="Silta Real-Life Application"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* What is Being Shown */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">What is Being Shown</h2>
            <div className="space-y-4 text-lg text-gray-200">
              <p>
                Silta is a mobile application designed to help individuals with dementia recognize their loved ones through AI-powered face recognition. The demo showcases:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Real-time Face Recognition:</strong> The app uses the device camera to identify faces in real-time</li>
                <li><strong>Contextual Information Display:</strong> When a face is recognized, the app displays the person's name and relationship to the user</li>
                <li><strong>Privacy-First Architecture:</strong> All facial recognition processing happens locally on the device</li>
                <li><strong>Simple, Accessible Interface:</strong> Large text and high-contrast design optimized for users with cognitive impairments</li>
              </ul>
            </div>
          </div>

          {/* How It Relates to Problem and Solution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">How It Relates to Problem and Solution</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-red-200">The Problem</h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-200 ml-4">
                  <li>55 million people worldwide live with dementia, with numbers expected to triple by 2050</li>
                  <li>Dementia patients often cannot recognize even their closest family members</li>
                  <li>This leads to severe anxiety, social withdrawal, and caregiver burnout</li>
                  <li>Finland has the highest dementia rate in the world, inspiring our name "Silta" (Bridge in Finnish)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-green-200">Our Solution</h3>
                <p className="text-lg text-gray-200 mb-3">
                  Silta serves as a digital bridge, reconnecting patients with their loved ones by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-200 ml-4">
                  <li>Providing instant recognition of familiar faces</li>
                  <li>Displaying names and relationships in clear, accessible text</li>
                  <li>Operating entirely offline to protect user privacy</li>
                  <li>Reducing patient anxiety and improving social interactions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stack, Technologies, and AI Solutions */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">Stack, Technologies, and AI Solutions Used</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Frontend</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 ml-4">
                  <li>React 19.2.0 with TypeScript</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Vite as build tool</li>
                  <li>Lucide React for icons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">AI/ML Technologies</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 ml-4">
                  <li>face-api.js (TensorFlow.js) for face recognition</li>
                  <li>Real-time vector embedding generation (Float32Array descriptors)</li>
                  <li>In-memory data storage (React state)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-green-300">Architecture</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 ml-4">
                  <li>Edge AI processing (face-api.js runs in the browser)</li>
                  <li>Offline-first design (no external API calls)</li>
                  <li>Cross-platform ready (React Native planned for mobile deployment)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-yellow-300">Deployment</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200 ml-4">
                  <li>Web-based prototype demonstration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Roadmap Stage */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">Roadmap Stage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Current Stage: <span className="text-yellow-300">Prototype</span></h3>
                <p className="text-lg text-gray-200 mb-4">
                  We are currently in the <strong>Prototype</strong> phase, having completed:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-200 ml-4">
                  <li>✅ Core face recognition engine development</li>
                  <li>✅ UI/UX design and implementation</li>
                  <li>✅ Web-based prototype demonstration</li>
                  <li>✅ Basic API endpoints for chatbot and AI interactions</li>
                  <li>✅ Website content integration for intelligent responses</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Next Steps</h3>
                <div className="space-y-4">
                  <div className="bg-black bg-opacity-30 rounded-xl p-4 border border-white border-opacity-10">
                    <h4 className="text-xl font-bold mb-2">Q1 2026 - MVP Pilot</h4>
                    <p className="text-gray-200">Closed beta testing with 50 families in Tashkent</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
                      <li>Integration of voice note features</li>
                      <li>Performance optimization</li>
                      <li>User feedback collection</li>
                    </ul>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-xl p-4 border border-white border-opacity-10">
                    <h4 className="text-xl font-bold mb-2">Q2 2026 - Public Launch</h4>
                    <p className="text-gray-200">Official release on App Store & Play Store</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
                      <li>Central Asian market deployment</li>
                      <li>Partnership with local health clinics</li>
                      <li>Marketing and user acquisition</li>
                    </ul>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-xl p-4 border border-white border-opacity-10">
                    <h4 className="text-xl font-bold mb-2">2027 - Global Expansion</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mt-2">
                      <li>Localization for European markets (starting with Finland)</li>
                      <li>Enterprise API for care homes</li>
                      <li>Advanced features and analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo Link */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-12 text-center border border-white border-opacity-20 mb-8">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">Try the Live MVP</h3>
            <p className="text-lg text-gray-200 mb-6">
              Test Silta's face recognition technology in our working prototype
            </p>
            <a
              href="https://silta-prototype.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:scale-105"
            >
              Open MVP Prototype
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Bonus Features: API Testing */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Chatbot API */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-purple-300" />
                <h3 className="text-2xl font-bold">Chatbot</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Try our rule-based chatbot that answers questions about Silta.
              </p>
              <form onSubmit={handleChatbotSubmit} className="space-y-4">
                <input
                  type="text"
                  value={chatbotQuestion}
                  onChange={(e) => setChatbotQuestion(e.target.value)}
                  placeholder="e.g., What does your project do?"
                  className="w-full px-4 py-3 rounded-xl bg-black bg-opacity-30 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                  type="submit"
                  disabled={chatbotLoading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {chatbotLoading ? 'Loading...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Ask Chatbot
                    </>
                  )}
                </button>
              </form>
              {chatbotAnswer && (
                <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-xl border border-white border-opacity-10">
                  <p className="text-gray-200 whitespace-pre-wrap">{chatbotAnswer}</p>
                </div>
              )}
            </div>

            {/* API Ask Link */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-6">
                <ExternalLink className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-bold">API Ask</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Test our AI-powered API endpoint. Enter your question and click the button to make a test request.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Question:</label>
                  <input
                    type="text"
                    value={apiQuestion}
                    onChange={(e) => setApiQuestion(e.target.value)}
                    placeholder="e.g., How does your project use AI?"
                    className="w-full px-4 py-3 rounded-xl bg-black bg-opacity-30 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <button
                  onClick={handleApiTest}
                  disabled={apiTestLoading || !apiQuestion.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg hover:scale-105"
                >
                  {apiTestLoading ? 'Testing...' : (
                    <>
                      <ExternalLink className="w-5 h-5" />
                      Test API Ask Endpoint
                    </>
                  )}
                </button>
              </div>
              <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-xl border border-white border-opacity-10">
                <p className="text-sm text-gray-400 mb-2">Endpoint:</p>
                <code className="text-blue-300 text-sm">POST /api/ask</code>
              </div>
              {apiTestResult && (
                <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-xl border border-white border-opacity-10">
                  <p className="text-sm text-gray-400 mb-2">Response:</p>
                  <pre className="text-xs text-gray-200 bg-black bg-opacity-50 p-3 rounded overflow-x-auto whitespace-pre-wrap">
                    {apiTestResult}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demo;

