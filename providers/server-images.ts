import type { ProviderGetImage } from "@nuxt/image";

export const getImage: ProviderGetImage = (src, { modifiers } = {}) => {
  return {
    url: modifiers?.blur ? modifiers?.preview : modifiers?.url,
  };
};
