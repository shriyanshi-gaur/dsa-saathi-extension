document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("get-hint");
  const resultDiv = document.getElementById("result");

  button.addEventListener("click", async () => {
    document.getElementById("emoji-loader").classList.remove("hidden");

    resultDiv.innerHTML = '';

    chrome.storage.sync.get(["geminiApiKey"], ({ geminiApiKey }) => {
      if (!geminiApiKey) {
        resultDiv.innerHTML =
          "❌ Gemini API Key not set. Please configure it in <a href='options.html' target='_blank'>Settings</a>.";
        return;
      }

      chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        chrome.tabs.sendMessage(tab.id, { type: "GET_LEETCODE_PROBLEM" }, async (res) => {
          if (chrome.runtime.lastError) {
            resultDiv.innerText = "⚠️ Cannot connect to LeetCode page. Reload the page and try again.";
            return;
          }

          if (!res || !res.problemText) {
            resultDiv.innerText = "⚠️ Could not extract LeetCode problem.";
            return;
          }

          const prompt = `
You are a friendly DSA mentor 🧑‍🏫 helping a student understand a LeetCode problem through stories and analogies 📖.

📌 Your goal is to:
- Explain how to approach the problem using a real-life story, example, or analogy 🧠
- Avoid any code ❌
- Use emojis naturally to make it fun 😊
- Mention the intuition, any patterns, and edge cases 🔍
- Conclude with a motivational note or tip ✨

📝 Here is the LeetCode problem description:
${res.problemText}
`;

          try {
            const geminiRes = await fetch(
              `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  contents: [{ role: "user", parts: [{ text: prompt }] }],
                  generationConfig: { temperature: 0.2 },
                }),
              }
            );

            const data = await geminiRes.json();
            const hint = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            resultDiv.innerText = hint || "❌ No hint generated.";
          } catch (err) {
            resultDiv.innerText = `❌ Error: ${err.message}`;
          }
        });
      });
    });
  });
});