export type BlogPost = {
  title: string;
  href: string;
  excerpt: string;
  date?: string;
};

const BLOG_URL = "https://wbkind.com";

const FALLBACK_POSTS: BlogPost[] = [
  {
    title: "Memproses Puluhan Ribu Foto dengan Qwen3-VL 8b: Mengatur Concurrency Tanpa Mengorbankan Akurasi OCR",
    href: `${BLOG_URL}/blog/ocr-qwen3-vl-concurrency-puluhan-ribu-foto`,
    excerpt: "Pengalaman memproses puluhan ribu foto dokumen dengan Qwen3-VL 8b: mengatur concurrency dan jumlah worker tanpa mengorbankan akurasi OCR.",
  },
  {
    title: "Membangun Geofencing di Aplikasi Driver Container: Pengalaman dan Tantangannya di Expo React Native",
    href: `${BLOG_URL}/blog/geofence-driver-container-expo-react-native`,
    excerpt: "Sharing pengalaman membangun geofence di aplikasi driver container dengan Expo: konsep, manfaat, tantangan implementasi, dan cara menyelesaikannya sampai production.",
  },
  {
    title: "Membangun Image Preprocessing untuk OCR: Pengalaman Menyiapkan Gambar Sebelum Diproses AI",
    href: `${BLOG_URL}/blog/image-preprocessing-ocr-pipeline`,
    excerpt: "Pengalaman membangun pipeline image preprocessing untuk OCR: deteksi dokumen dengan YOLO, deskew dan enhancement dengan ImageMagick, sampai structured JSON.",
  },
];

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&#8217;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
}

export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)" },
    });
    if (!res.ok) return FALLBACK_POSTS;

    const html = await res.text();
    const posts: BlogPost[] = [];
    const seen = new Set<string>();

    // Article cards: <a ... href="/blog/slug"> ... <h3>Title</h3> ... <p>Excerpt</p>
    const cardRe = /<a[^>]+href="(\/blog\/[a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g;
    let match: RegExpExecArray | null;
    while ((match = cardRe.exec(html)) && posts.length < limit) {
      const [, href, inner] = match;
      if (seen.has(href)) continue;
      const titleMatch = inner.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
      if (!titleMatch) continue;
      const excerptMatch = inner.match(/<p[^>]*>([\s\S]*?)<\/p>/);
      const dateMatch = inner.match(/(\d{1,2}\s+[A-Z][a-z]{2}\s+\d{4})/);
      posts.push({
        title: stripTags(titleMatch[1]),
        href: `${BLOG_URL}${href}`,
        excerpt: excerptMatch ? stripTags(excerptMatch[1]).slice(0, 160) : "",
        date: dateMatch ? dateMatch[1] : undefined,
      });
      seen.add(href);
    }

    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}
