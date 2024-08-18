import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Breadcrumb {
  name: string;
  path: string;
}

export function useBreadcrumb() {
  const route = useRoute();
  const router = useRouter();

  const breadcrumbs = computed(() => {
    const crumbs: Breadcrumb[] = [];
    const pathSegments = route.path.split("/").filter(Boolean);

    let fullPath = "";
    pathSegments.forEach((segment) => {
      fullPath += `/${segment}`;

      const matchedRoute = router.getRoutes().find((r) => {
        const routeRegex = new RegExp(
          "^" + r.path.replace(/:([^/]+)/g, "([^/]+)") + "$",
        );
        return routeRegex.test(fullPath);
      });

      if (matchedRoute && matchedRoute.meta.breadcrumb) {
        const name =
          typeof matchedRoute.meta.breadcrumb === "function"
            ? matchedRoute.meta.breadcrumb(route)
            : (matchedRoute.meta.breadcrumb as string);

        crumbs.push({ name, path: fullPath });
      }
    });

    return crumbs;
  });

  return { breadcrumbs };
}
