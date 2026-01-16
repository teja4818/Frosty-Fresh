
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

export const getFlavorRecommendation = async (userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on the following product menu, recommend ONE item that best matches this user request: "${userInput}".
    
    Menu:
    ${PRODUCTS.map(p => `- ${p.name} (${p.category}): ${p.description}`).join('\n')}
    
    Provide a friendly, short response explaining why.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          productId: { type: Type.STRING, description: "The ID of the recommended product from the list." },
          reason: { type: Type.STRING, description: "A friendly explanation for the recommendation." }
        },
        required: ["productId", "reason"]
      }
    }
  });

  try {
    return JSON.parse(response.text);
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
