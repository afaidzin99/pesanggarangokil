type Kelas = {
    level: string;
    deskripsi: string;
    harga: number;
    benefit: string[];
};

type Paket = {
    nama_paket: string;
    deskripsi: string;
    background: string;
    kelas: Kelas[];
    galeri: string[];
};

type Testimoni = {
    path: string;
    alt: string;
    name: string;
    job: string;
    review: string;
};

// Export the types
export type { Paket, Kelas };