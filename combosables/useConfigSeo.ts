interface IMetaInfo {
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  href: string | undefined;
  noindex: boolean | undefined;
}

export const useConfigSeo = (metaInfo: IMetaInfo) => {
  const { baseUrl, defaultLocale } = useRuntimeConfig().public;

  useHead({
    title: metaInfo.title || "",
    meta: [
      { name: "description", content: metaInfo.description || "" },
      {
        name: "robots",
        content: metaInfo.noindex ? "noindex, nofollow" : "index, follow",
      },
    ],
    script: [],
    htmlAttrs: {
      lang: defaultLocale,
    },
  });

  useSeoMeta({
    ogTitle: metaInfo.title || "",
    ogDescription: metaInfo.description || "",
    ogImage: metaInfo.image || "",
    ogUrl: baseUrl + metaInfo.href || "",
    twitterTitle: metaInfo.title || "",
    twitterDescription: metaInfo.description || "",
    twitterImage: metaInfo.image || "",
    twitterCard: "summary",
  });
};
