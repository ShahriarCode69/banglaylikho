import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa6";

const Chatbox = () => {
  const [banglishInput, setBanglishInput] = useState(() => {
    const saved = localStorage.getItem("banglishInput");
    return saved ? JSON.parse(saved) : "";
  });
  const [banglaOutput, setBanglaOutput] = useState(() => {
    const saved = localStorage.getItem("banglaOutput");
    return saved ? JSON.parse(saved) : "";
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");


  useEffect(() => {
    localStorage.setItem('banglishInput', JSON.stringify(banglishInput));
  }, [banglishInput])
  useEffect(() => {
    localStorage.setItem('banglaOutput', JSON.stringify(banglaOutput));
  }, [banglaOutput])

  const handleInputChange = (e) => {
    setBanglishInput(e.target.value);
  };

  const handleConvert = async () => {
    if (!banglishInput.trim() || isLoading) return;

    if (typeof window.puter?.ai?.chat !== "function") {
      setBanglaOutput(
        "Error: Puter.js AI features are not available. Ensure the Puter.js script is loaded.",
      );
      return;
    }

    setIsLoading(true);
    setBanglaOutput("🔄 Translating...");

    try {
      const systemPrompt =
        "You are an expert Banglish (Bengali written in the Roman alphabet) to pure Bengali (Bangla script) transliterator and translator. Your task is to take the user's romanized input and provide the most accurate, grammatically correct, and natural sounding written Bengali (Bangla script) equivalent. Do not include any extra commentary, English text, or headers. Only output the pure Bengali text.";

      const userQuery = banglishInput.trim();

      const response = await window.puter.ai.chat(
        [
          { role: "system", content: systemPrompt },
          { role: "user", content: userQuery },
        ],
        { model: "gpt-4o" },
      );

      if (response?.message?.content) {
        setBanglaOutput(response.message.content.trim());
      } else {
        setBanglaOutput("Translation failed or unexpected response format.");
      }
    } catch (error) {
      console.error("Puter.js AI Chat Error:", error);
      setBanglaOutput(
        `অনুবাদ ব্যর্থ হয়েছে। (Translation failed). Error: ${
          error.message || "Check console for details."
        }`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!banglaOutput.trim()) return;

    // Create temp textarea for copying
    const textarea = document.createElement("textarea");
    textarea.value = banglaOutput;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    // Show toast
    setCopySuccess("✅ Copied to clipboard!");

    setBanglishInput("")
    // Clear output
    setBanglaOutput("");

    // Hide toast after 2s
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <section className="relative mt-12 space-y-4 flex-center flex-col">
      <textarea
        onChange={handleInputChange}
        value={banglishInput}
        className="w-full rounded-lg border p-3 text-gray-800 bg-white"
        placeholder="Type Banglish here..."
      />
      <button
        onClick={handleConvert}
        disabled={!banglishInput.trim() || isLoading}
        className={`rounded-full bg-primary mx-auto px-10 py-3 font-semibold text-white shadow-md transition-all hover:bg-secondary focus:ring-4 focus:ring-indigo-500/50 ${
          !banglishInput.trim() || isLoading
            ? "cursor-not-allowed"
            : ""
        }`}
      >
        {isLoading ? "Translating..." : "Convert to Pure Bangla (বাংলা)"}
      </button>

      {banglaOutput && !banglaOutput.includes("Translating") && (
        <div className="relative w-full">
          <textarea
            readOnly
            value={banglaOutput}
            className="min-h-56 w-full cursor-default resize-none rounded-xl border border-gray-300 bg-white p-4 font-['Shonar_Bangla'] text-xl text-gray-800 shadow-inner"
            lang="bn"
          />
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 rounded-lg p-2 text-gray-400 transition-colors hover:text-secondary"
            title="Copy to Clipboard"
          >
            <FaCopy size={26}/>
          </button>
        </div>
      )}

      {copySuccess && (
        <div className="animate-fade-in fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-accent px-6 py-3 text-sm text-white shadow-lg">
          {copySuccess}
        </div>
      )}
    </section>
  );
};

export default Chatbox;
