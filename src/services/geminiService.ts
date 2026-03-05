import { GoogleGenAI } from "@google/genai";

// ACÁ ESTÁ EL SEGURO DE VIDA: Si falla la variable, usa tu clave directamente.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyCY4ZD_hhb1HxNUbg7QnnTGbPlsS7Grjh4";

const ai = new GoogleGenAI({ 
  apiKey: apiKey 
});

export const getGeminiResponse = async (prompt: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        ...history,
        { role: "user", parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `Sos el asistente comercial de Hope Contenedores (Esperanza, Santa Fe). 
        Respondé de forma directa, breve (1 o 2 oraciones) y sin vueltas.
        
        Productos: 
        - Habitacional (Viviendas, quinchos, estudios). 
        - Industrial (Oficinas, obras, pañoles). 
        - Sanitario (Baños, duchas). 
        - Agro (Comedores, viviendas).
        
        Tu único objetivo es recomendar una opción y derivar SIEMPRE a la venta: "Para un presupuesto exacto, contactanos por WhatsApp al +54 3496 445881".`,
      }
    });

    return response.text;
  } catch (error: any) {
    console.error("Error fatal de Gemini:", error);
    // Si algo falla, te va a mostrar exactamente qué se rompió en la pantalla
    return "Error técnico: " + error.message + " - Escribinos al WhatsApp +54 3496 445881.";
  }
};