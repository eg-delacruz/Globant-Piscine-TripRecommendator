// Export any types used across the application
export type Recommendation = {
  userInput: string;
  ai_response: { city: string; country: string; explanation: string }[] | null;
};
