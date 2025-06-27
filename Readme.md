# 💡 DSA Saathi — LeetCode Hints Using Gemini AI

Hey there, future coding superstar! ✨  
**DSA Saathi** is your AI-powered study buddy that gives **conceptual, story-driven hints** on LeetCode problems — right when you need them, while you're solving!

Built as a Chrome Extension using the **Gemini API by Google**, DSA Saathi makes Data Structures and Algorithms feel like a conversation, not a wall of code.

---

## 🧠 What It Does

When you're on a LeetCode problem page, just click **“Get DSA Hint”** in the extension popup.

You’ll receive:
- 📖 **A real-world analogy or story** to help visualize the problem
- 🔍 **Edge case awareness** and problem intuition
- 🧭 **Hints without giving away the code**
- ✨ All wrapped in an easy-to-understand format with friendly emojis!

---

## 💻 Example Response

> “Imagine you're planning a party 🎉 and you want to invite at least *k* friends from each of your different friend groups...”  
>  
> That’s how DSA Saathi explains the *"Longest Substring with At Least K Repeating Characters"* — using people, parties, and patterns to explain the logic. No code, just concept.

![Hey there, future coding superstar! ✨ Let's tackle this "Longest Substring with At Least K Repeating Characters" problem together.  Think of it like this:

Imagine you're planning a party 🎉 and you want to invite at least k friends from each of your different friend groups.  Let's say k is 3.  You have a list of your friends (the string s), and each friend belongs to a group (represented by the character they are).

Your goal is to find the longest group of friends you can invite such that you have at least 3 friends from every group represented in that group of friends.

**Example 1: s = "aaabb", k = 3**

Your friend list is "aaabb".  'a' is a group, and 'b' is another.  You need at least 3 friends from each group.  You can invite "aaa" (3 'a's), fulfilling the requirement.  You can't invite "aaabb" because you don't have 3 'b's.  So the longest substring is 3.

**Example 2: s = "ababbc", k = 2**

Now, you need at least 2 friends from each group.  Looking at "ababbc", you can invite "ababbc" because you have at least 2 'a's and at least 2 'b's.  The longest substring is 6.

*Intuition and Patterns:*

The key is to think about sliding windows.  You'll be moving a window across the string, checking if the condition (at least k repetitions of each character within the window) is met.  If it's not met, you shrink or move the window.

*Edge Cases:*

* *Empty string:* If the string is empty, there's no substring, so return 0.
* *No substring meets the condition:*  If no substring satisfies the condition (at least k of each character), return 0.

*Motivational Note:*

This problem might seem tricky at first, but breaking it down into smaller parts (like the friend group analogy) and focusing on the sliding window technique will help you conquer it!  Don't be afraid to experiment and try different approaches.  Remember, practice makes perfect! 💪  Keep coding, and you'll become a master problem-solver in no time! ✨]
(./Screenshot/working1.jpg)
(./Screenshot/working2.jpg)


---

## ⚙️ How It Works

- Built with `HTML`, `CSS`, and `JavaScript`
- Uses Google’s **Gemini 1.5 Flash** model via the `generativelanguage.googleapis.com` API
- Injects a content script into LeetCode to extract problem titles/descriptions
- Gemini responds with an explanation tailored for beginners, using stories, emojis, and intuitive reasoning

---

## 🚀 Features

✅ Instant AI-generated hints  
✅ No spoilers — just the "how", not the "what"  
✅ Beginner-friendly teaching with analogies  
✅ Uses your own Gemini API key (private & secure)  
✅ Clean, colorful, emoji-rich UI

---

## 🔧 Setup Instructions

1. **Get a Gemini API key**  
   👉 From [Google AI Studio](https://makersuite.google.com/app/apikey)

2. **Clone or Download the Extension**
```bash
git clone https://github.com/yourusername/dsa-saathi.git
