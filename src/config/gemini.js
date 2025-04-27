import { GoogleGenerativeAI } from "@google/generative-ai";

const getApiKey = () => {
  return localStorage.getItem("gemini_api_key");
};

export const initializeModel = () => {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const genAI = new GoogleGenerativeAI(apiKey);

  // Corrected model name!
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024,
    },
  });

  return model;
};

export const model = initializeModel();
