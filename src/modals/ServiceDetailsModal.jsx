import React, { useState, useCallback } from 'react';
import { ArrowRight, X } from 'lucide-react';

const ServiceDetailsModal = ({ service, onClose }) => {
  // All hooks at the top
  const [projectIdeaInput, setProjectIdeaInput] = useState('');
  const [generatedProjectIdea, setGeneratedProjectIdea] = useState('');
  const [studyQuestionInput, setStudyQuestionInput] = useState('');
  const [studyAssistantResponse, setStudyAssistantResponse] = useState('');
  const [isLoadingLLM, setIsLoadingLLM] = useState(false);
  const [llmError, setLlmError] = useState('');
  const [isClosing, setIsClosing] = useState(false); // New state for managing exit animation

  const handleCloseAnimation = useCallback(() => {
    setIsClosing(true);
    // Duration of modal-slide-out animation is 0.5s, modal-fade-out is 0.4s.
    // Use the longer duration to ensure the animation completes before unmounting.
    setTimeout(() => {
      onClose(); // Call parent onClose after animation
    }, 500);
  }, [onClose]);

  if (!service) return null;

  const microLessonCode = `
# Basic Python Micro-Lesson: Introduction to Functions

# A function is a block of code which only runs when it is called.
# You can pass data, known as parameters, into a function.

def greet(name):
  """This function prints a greeting message."""
  print(f"Hello, {name}!")

# Call the function
greet("ByteHub Student")

# You can call the function multiple times
greet("Future Developer")

# Functions help organize code and make it reusable.
  `;

  // Function to call Gemini API for Project Idea Generation
  const handleGenerateProjectIdea = async () => {
    setIsLoadingLLM(true);
    setLlmError('');
    setGeneratedProjectIdea('');

    const prompt = `As a high-tech software development company, generate a concise project idea, key features, and a simple roadmap based on the following problem statement: "${projectIdeaInput}"
    
    Format your response clearly with headings for "Project Idea", "Key Features", and "Simple Roadmap". Be innovative and practical.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // Canvas will automatically provide this
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        setGeneratedProjectIdea(result.candidates[0].content.parts[0].text);
      } else {
        setLlmError("No valid response from AI. Please try again.");
        console.error("Unexpected LLM response structure:", result);
      }
    } catch (error) {
      setLlmError("Failed to connect to AI. Please check your network or try again later.");
      console.error("Error calling Gemini API for project idea:", error);
    } finally {
      setIsLoadingLLM(false);
    }
  };

  // Function to call Gemini API for Study Assistant
  const handleAskStudyAssistant = async () => {
    setIsLoadingLLM(true);
    setLlmError('');
    setStudyAssistantResponse('');

    const prompt = `I am learning Python. Given the following code snippet and my question, please provide a clear explanation.

Code Snippet:
\`\`\`python
${microLessonCode}
\`\`\`

My Question: "${studyQuestionInput}"

Provide a concise and helpful explanation, referencing the code snippet if relevant.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = ""; // Canvas will automatically provide this
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
       if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        setStudyAssistantResponse(result.candidates[0].content.parts[0].text);
      } else {
        setLlmError("No valid response from AI. Please try again.");
        console.error("Unexpected LLM response structure:", result);
      }
    } catch (error) {
      setLlmError("Failed to connect to AI. Please check your network or try again later.");
      console.error("Error calling Gemini API for study assistant:", error);
    } finally {
      setIsLoadingLLM(false);
    }
  };


  const renderDemoContent = (demoType) => {
    switch (demoType) {
      case "dashboard":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner overflow-hidden">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">Simulated Financial Overview</h4>
            <div className="flex justify-around items-end h-32 mb-4">
              {[60, 85, 70, 95, 75, 80].map((height, i) => (
                <div
                  key={i}
                  className="w-8 bg-blue-500 rounded-t-sm bar-chart-bar"
                  style={{ '--final-height': `${height}%`, animationDelay: `${0.1 * i}s` }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center">Live data feeds and actionable insights displayed visually.</p>
          </div>
        );
      case "patientFlow":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">Patient Journey Simulation</h4>
            <div className="relative flex justify-between items-center py-4 px-2 text-gray-300 text-sm">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">📋</span> Admission
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🩺</span> Diagnosis
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">💊</span> Treatment
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400" />
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">✅</span> Discharge
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">Seamless transitions and comprehensive record keeping at each stage.</p>
          </div>
        );
      case "discoveryTool":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner text-center">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">✨ Intelligent Project Idea Generator</h4>
            <textarea
              className="w-full h-32 p-3 bg-gray-900 text-blue-100 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Describe the problem you are trying to solve or your business need..."
              value={projectIdeaInput}
              onChange={(e) => setProjectIdeaInput(e.target.value)}
              disabled={isLoadingLLM}
            ></textarea>
            <button
              onClick={handleGenerateProjectIdea}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 btn-hover-effect flex items-center justify-center mx-auto mb-4"
              disabled={isLoadingLLM || !projectIdeaInput.trim()}
            >
              {isLoadingLLM ? (
                <>
                  <svg className="spinner w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>Generate Idea ✨</>
              )}
            </button>
            {llmError && <p className="text-red-400 text-sm mt-2">{llmError}</p>}
            {generatedProjectIdea && (
              <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-blue-800 text-left text-blue-200 whitespace-pre-wrap">
                <h5 className="text-lg font-semibold text-blue-300 mb-2">Generated Project Idea:</h5>
                {generatedProjectIdea}
              </div>
            )}
          </div>
        );
      case "aiVisualizer":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">AI Integration Paths</h4>
            <svg width="100%" height="120" viewBox="0 0 400 120" className="mt-4">
              <path d="M10 60 Q 100 20, 200 60 T 390 60" fill="none" stroke="#00BFFF" strokeWidth="3" className="line-graph-path" style={{ animationDelay: '0.1s' }} />
              <circle cx="10" cy="60" r="5" fill="#00BFFF" />
              <circle cx="200" cy="60" r="5" fill="#00BFFF" style={{ animationDelay: '0.5s' }} />
              <circle cx="390" cy="60" r="5" fill="#00BFFF" style={{ animationDelay: '1s' }} />
              <text x="10" y="80" fill="#00BFFF" fontSize="12" textAnchor="middle">Data In</text>
              <text x="200" y="80" fill="#00BFFF" fontSize="12" textAnchor="middle">Processing</text>
              <text x="390" y="80" fill="#00BFFF" fontSize="12" textAnchor="middle">Insights Out</text>
            </svg>
            <p className="text-sm text-gray-400 mt-4">Visualizing the flow from raw data to actionable intelligence.</p>
          </div>
        );
      case "portfolio":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner text-center">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">Dynamic Project Showcase</h4>
            <div className="flex justify-center items-center space-x-4 h-24">
              <img src="https://placehold.co/80x80/0A0A0A/4A90E2?text=Web" alt="Web app preview" className="rounded-lg border border-blue-600 animate-in delay-100" />
              <img src="https://placehold.co/80x80/0A0A0A/4A90E2?text=Mobile" alt="Mobile app preview" className="rounded-lg border border-blue-600 animate-in delay-200" />
              <img src="https://placehold.co/80x80/0A0A0A/4A90E2?text=UI/UX" alt="UI/UX preview" className="rounded-lg border border-blue-600 animate-in delay-300" />
            </div>
            <p className="text-sm text-gray-400 mt-4">A curated selection of our design and development excellence.</p>
          </div>
        );
      case "microLesson":
        return (
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-700 shadow-inner text-center">
            <h4 className="text-xl font-semibold text-blue-200 mb-4">✨ AI-Powered Study Assistant</h4>
            <div className="bg-gray-950 p-4 rounded-lg text-left font-mono text-sm text-green-400 mb-4 max-h-48 overflow-y-auto border border-blue-900">
              <pre className="whitespace-pre-wrap">
                <code>
                  {microLessonCode}
                </code>
              </pre>
            </div>
            <textarea
              className="w-full h-24 p-3 bg-gray-900 text-blue-100 rounded-md border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Ask a question about this code, e.g., 'What is the purpose of the 'def' keyword?'"
              value={studyQuestionInput}
              onChange={(e) => setStudyQuestionInput(e.target.value)}
              disabled={isLoadingLLM}
            ></textarea>
            <button
              onClick={handleAskStudyAssistant}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 btn-hover-effect flex items-center justify-center mx-auto mb-4"
              disabled={isLoadingLLM || !studyQuestionInput.trim()}
            >
              {isLoadingLLM ? (
                <>
                  <svg className="spinner w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Asking AI...
                </>
              ) : (
                <>Ask AI ✨</>
              )}
            </button>
            {llmError && <p className="text-red-400 text-sm mt-2">{llmError}</p>}
            {studyAssistantResponse && (
              <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-blue-800 text-left text-blue-200 whitespace-pre-wrap">
                <h5 className="text-lg font-semibold text-blue-300 mb-2">AI's Explanation:</h5>
                {studyAssistantResponse}
              </div>
            )}
          </div>
        );
      default:
        return <p className="text-blue-200">No specific demo content available for this service yet. Stay tuned!</p>;
    }
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 ${isClosing ? 'modal-overlay fade-out' : 'modal-overlay'}`}>
      <div className={`bg-gray-900 rounded-xl shadow-2xl border border-blue-700 p-8 w-full max-w-sm sm:max-w-md lg:max-w-2xl transform scale-95 ${isClosing ? 'modal-content slide-out' : 'modal-content'}`}> {/* Adjusted max-width for responsiveness */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-300">{service.learnMoreAction.title}</h2>
          <button onClick={handleCloseAnimation} className="text-gray-400 hover:text-white transition-colors duration-200">
            <X className="w-8 h-8" />
          </button>
        </div>
        <p className="text-blue-100 text-lg leading-relaxed mb-8">
          {service.learnMoreAction.description}
        </p>

        {/* Dynamic Demo Content */}
        {renderDemoContent(service.learnMoreAction.demoType)}

        <div className="flex justify-center mt-8">
            <button
                onClick={handleCloseAnimation}
                className="px-8 py-3 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-900 transition duration-300 btn-hover-effect flex items-center justify-center"
            >
                <ArrowRight className="rotate-180 mr-2 w-5 h-5" /> Back to All Services
            </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsModal;
