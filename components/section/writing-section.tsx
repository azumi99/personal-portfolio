import { getRecentPosts } from "@/lib/blog";

export default async function WritingSection() {
  const posts = await getRecentPosts(3);

  return (
    <section id="writing" className="relative">
      <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-on-primary">Writing</span>
      </div>
      <div className="grid gap-4 pt-2">
        {posts.map((post) => (
          <a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="metric-card group flex flex-col gap-1.5 rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="section-kicker">wbkind.com</span>
              {post.date && <time className="text-xs text-on-surface-variant">{post.date}</time>}
            </div>
            <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">{post.title}</h3>
            {post.excerpt && <p className="text-pretty text-xs leading-relaxed text-on-surface-variant">{post.excerpt}</p>}
          </a>
        ))}
        <a
          href="https://wbkind.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-on-surface"
        >
          Lihat semua artikel
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
