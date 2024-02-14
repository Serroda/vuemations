import { BundledLanguage, codeToHtml } from "shiki";

export const useCodeGenerator = () => {
  async function generate(code: string, lang: BundledLanguage) {
    const html = await codeToHtml(code, {
      lang,
      theme: "catppuccin-frappe"
    });
    return html;
  }

  return {
    generate,
  };
};
