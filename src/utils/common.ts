export const NAME = "Colour Sea";
export const TAGLINE = "Where Your Space Meets Art & Elegance!";
export const DESCRIPTION =
  "Transform your space with Colour Sea — where colors flow, creativity thrives, and every space tells a story.";
export const MOBILE_NUMBER = "+91 1234567890";

export function getImagePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
