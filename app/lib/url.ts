function normalizeUrl(url: string): string {
    return url.replace(/%20/g, ' ');
}

export { normalizeUrl };