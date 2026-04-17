import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateHeroBackground() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: "High-resolution 1920x1080 website hero background in a premium dark tech style. Deep dark navy to near-black gradient background. Soft glowing teal and cyan light bloom rising gently from the bottom and sides. Very subtle floating particles and tiny glowing dots scattered across the image like faint digital embers or stars. Extremely minimalist and elegant composition with a large empty dark space in the center for text overlay. Mood: premium, futuristic, trustworthy, high-end SaaS, clean, sophisticated, professional, similar to modern crypto or fintech websites. Low opacity and soft effects, not busy. No people, no objects, no UI elements, no text. Faint soft vignette on the edges and gentle bokeh-like glows for depth. Optimized for excellent contrast and readability of white, teal, and yellow text centered on top.",
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
