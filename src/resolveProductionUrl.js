const localUrl = `http://localhost:3000`;
const remoteUrl = `https://alexclark.co.nz`;
const baseUrl = window?.location?.hostname === 'localhost' ? localUrl : remoteUrl;

export function resolveProductionUrl(doc) {
    const slug = doc?.slug?.current;

    if (!slug) {
        throw new Error(`Document has no slug, cannot preview`);
    }

    const url = new URL(baseUrl);

    const pathname = (
        doc?._type === 'post' && `/blog/${slug}` ||
        slug
    );

    url.pathname = pathname;
    url.searchParams.set(`preview`, `230AKSnmfeiopwn3`);

    return url.toString();
}
