export const CHAT_ATTACHMENT_ACCEPT = "*/*";

export function isSupportedChatAttachmentMimeType(_mimeType: string | null | undefined): boolean {
  // Accept unknown mime types as attachments too (e.g. empty extension files from clipboard).
  return true;
}
