chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_LEETCODE_PROBLEM") {
    try {
      const meta = document.querySelector('meta[name="description"]');
      const problemText = meta?.content || null;

      if (problemText) {
        console.log("✅ Extracted from meta:", problemText);
        sendResponse({ problemText });
      } else {
        console.warn("⚠️ Meta tag not found.");
        sendResponse({ problemText: null });
      }
    } catch (err) {
      console.error("❌ Meta extraction error:", err);
      sendResponse({ problemText: null });
    }

    return true; // Keep async
  }
});
