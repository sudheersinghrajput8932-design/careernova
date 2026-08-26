/**
 * Global Helper for triggering the Robo AI Assistant from any component or CTA
 */

export interface OpenAssistantOptions {
  prompt?: string;
  mode?: 'consultation' | 'general' | 'vocab' | 'resume' | 'business';
  autoSend?: boolean;
}

export function openAiAssistant(options: OpenAssistantOptions = { mode: 'consultation' }) {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('careernova:open-assistant', {
      detail: options,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(event);
  }
}

// Attach to window object for runtime accessibility
if (typeof window !== 'undefined') {
  (window as unknown as { openCareerNovaAssistant: typeof openAiAssistant }).openCareerNovaAssistant = openAiAssistant;
}
