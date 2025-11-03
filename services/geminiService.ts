
import { GoogleGenAI } from "@google/genai";
import { DOCUMENTATION_CONTEXT } from '../constants';

// Fix: Initialize the GoogleGenAI client directly with the API key from environment variables as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGemini = async (question: string): Promise<string> => {
  if (!question.trim()) {
    return "Por favor, haz una pregunta.";
  }

  const model = 'gemini-2.5-flash';
  const systemInstruction = `Eres un experto amable y servicial sobre el Switch Aruba Instant On 1960. Tu conocimiento se basa *únicamente* en la documentación proporcionada. Responde la pregunta del usuario de forma concisa basándote en la documentación. Si la respuesta no se encuentra en la documentación, indica que no tienes información sobre ese tema. No inventes respuestas. Formatea tu respuesta usando markdown simple.`;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: `PREGUNTA DEL USUARIO: "${question}"`,
        config: {
            systemInstruction: `${systemInstruction}\n\nDOCUMENTACIÓN:\n${DOCUMENTATION_CONTEXT}`,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error al llamar a la API de Gemini:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
        return "Hubo un problema con la clave API. Por favor, revisa la configuración.";
    }
    return "Lo siento, encontré un error al intentar buscar una respuesta. Por favor, inténtalo de nuevo más tarde.";
  }
};