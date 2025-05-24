export const NAME = "Colour Sea";
export const TAGLINE = "Where Your Space Meets Art & Elegance!";
export const DESCRIPTION =
  "Transform your space with Colour Sea — where colors flow, creativity thrives, and every space tells a story.";
export const MOBILE_NUMBER = "9966252900";
export const WHATSAPP_LINK = `https://wa.me/91${MOBILE_NUMBER}?text=${encodeURIComponent(
  "Hi, I'm interested in booking a free designer consultation. Can you help me get started?"
)}`;

export function getImagePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
