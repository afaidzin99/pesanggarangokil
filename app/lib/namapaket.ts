function namapaket(paket: string): string {
    return paket.replace(/-/g, ' ');
}

export { namapaket };