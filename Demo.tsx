import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Zap, MessageSquare, Code, Send } from 'lucide-react';

const Demo = () => {
  const [chatbotQuestion, setChatbotQuestion] = useState('');
  const [chatbotAnswer, setChatbotAnswer] = useState('');
  const [chatbotLoading, setChatbotLoading] = useState(false);
  
  const [apiQuestion, setApiQuestion] = useState('How does your project use AI?');
  const [apiAnswer, setApiAnswer] = useState('');
  const [apiLoading, setApiLoading] = useState(false);

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
      const data = await response.json();
      setChatbotAnswer(data.answer || 'Error getting response');
    } catch (error) {
      setChatbotAnswer('Error: Could not connect to API');
    } finally {
      setChatbotLoading(false);
    }
  };

  const handleApiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiQuestion.trim()) return;
    
    setApiLoading(true);
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: apiQuestion })
      });
      const data = await response.json();
      setApiAnswer(data.answer || 'Error getting response');
    } catch (error) {
      setApiAnswer('Error: Could not connect to API');
    } finally {
      setApiLoading(false);
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
                <img src="/logo.png" alt="Silta Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Silta</span>
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

          {/* Demo Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20 mb-8">
            <h2 className="text-3xl font-bold mb-6">Interactive Demo</h2>
            <p className="text-lg text-gray-200 mb-8">
              Experience the full Silta MVP prototype with live face recognition capabilities.
            </p>
            
            {/* MVP Link */}
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
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Real-time Recognition</h3>
              <p className="text-gray-200">See how Silta identifies faces instantly</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-gray-200">All processing happens locally on your device</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-3">Easy to Use</h3>
              <p className="text-gray-200">Simple interface designed for accessibility</p>
            </div>
          </div>

          {/* Bonus Features: API Testing */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Chatbot API */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-purple-300" />
                <h3 className="text-2xl font-bold">Chatbot API</h3>
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

            {/* AI Ask API */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-blue-300" />
                <h3 className="text-2xl font-bold">AI Ask API</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Demonstrate how our system interacts with AI-powered endpoints.
              </p>
              <form onSubmit={handleApiSubmit} className="space-y-4">
                <input
                  type="text"
                  value={apiQuestion}
                  onChange={(e) => setApiQuestion(e.target.value)}
                  placeholder="e.g., How does your project use AI?"
                  className="w-full px-4 py-3 rounded-xl bg-black bg-opacity-30 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  disabled={apiLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {apiLoading ? 'Loading...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Ask AI
                    </>
                  )}
                </button>
              </form>
              {apiAnswer && (
                <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-xl border border-white border-opacity-10">
                  <p className="text-gray-200 whitespace-pre-wrap">{apiAnswer}</p>
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

