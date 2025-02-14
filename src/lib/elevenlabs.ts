import axios from 'axios';

const API_BASE_URL = 'https://api.elevenlabs.io/v1';
const ELEVENLABS_API_KEY = 'sk_2ad42e4831cf791a596cbc829f79e84c8594114ef67ab3a1';

export const VOICES = {
  SARAH: "21m00Tcm4TlvDq8ikWAM",    // Rachel - weiblich, freundlich und energetisch
  ANNA: "EXAVITQu4vr4xnSDxMaL",     // Anna - weiblich, professionell und klar
  MICHAEL: "IKne3meq5aSn9XLyUdCD",  // Adam - männlich, vertrauenswürdig
  CUSTOMER_MALE: "pNInz6obpgDQGcFmaJgB",     // Josh - männlich
  CUSTOMER_FEMALE: "ThT5KcBeYPX3keUQqHPh"    // Dorothy - weiblich, natürlich
};

export async function generateSpeech(text: string, voiceId: string): Promise<ArrayBuffer> {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/text-to-speech/${voiceId}`,
      {
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      {
        headers: {
          'Accept': 'audio/mpeg',
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json'
        },
        responseType: 'arraybuffer'
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error generating speech:', error);
    throw error;
  }
}