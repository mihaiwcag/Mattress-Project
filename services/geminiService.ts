import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API_KEY is not defined in the environment");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'CleanBot', the expert cleaning consultant for Fresh Sleep Mattress Care. 
        
        Your goals:
        1. Answer customer questions about mattress hygiene, dust mites, allergens, and stain removal.
        2. Explain our process: We use a revolutionary 5-step mobile process including UV-C Light, Dry Steam, Industrial Vacuuming, Ozone (O3) treatment, and Infrared Heating.
        3. Emphasize that we are chemical-free, have a 99.99% kill rate for bacteria/viruses, and a 100% kill rate for bed bugs.
        4. Recommend services based on their issues (e.g., if they mention pets, recommend the Pet Odor Neutralizer add-on).
        5. Be friendly, professional, and concise.
        
        Do not make up pricing. Refer them to the 'Pricing' section or the 'Get a Quote' form for specific costs.`,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing a temporary issue. Please try again in a moment.";
  }
};

export const getStainAdvice = async (stainDescription: string, language: 'en' | 'ro'): Promise<string> => {
  try {
    const ai = getClient();
    const prompt = `
      Act as a professional mattress cleaning expert for 'Fresh Sleep Mattress Care'.
      The user has a stain described as: "${stainDescription}".
      Provide brief, safe, step-by-step DIY advice for immediate mitigation.
      Warn against using too much water.
      End by recommending professional steam extraction for complete removal.
      Respond in ${language === 'ro' ? 'Romanian' : 'English'}.
    `;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || (language === 'ro' ? "Nu am putut genera un sfat." : "Could not generate advice.");
  } catch (error) {
    console.error("Stain advice error:", error);
    return language === 'ro' 
      ? "A apărut o eroare. Vă rugăm să încercați din nou." 
      : "An error occurred. Please try again.";
  }
};
