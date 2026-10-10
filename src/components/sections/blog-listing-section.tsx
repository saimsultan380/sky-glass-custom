import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import { BLOG_POSTS } from "@/lib/blog";

export function BlogListingSection() {
  return (
    <section className="relative bg-transparent pt-6 sm:pt-10 lg:pt-14">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-2xl border-b border-[#0B0E2C]/10 pb-5 text-center sm:pb-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Guides &amp; updates
          </p>
          <h1 className="mt-2 text-[28px] font-bold leading-[1.15] tracking-tight sm:mt-2.5 sm:text-[40px] sm:leading-[1.1] lg:text-[44px]">
            <span className="text-gradient-brand">Blog</span>
          </h1>
        </div>

        <div className="mx-auto mt-6 grid max-w-[360px] gap-4 sm:mt-10 sm:max-w-[760px] sm:grid-cols-2 sm:gap-5 lg:max-w-[1200px] lg:grid-cols-3 lg:gap-5">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="glass-card card-hover-lift flex flex-col overflow-hidden hover:-translate-y-1"
            >
              <Link
                href={post.path}
                className="block transition-opacity hover:opacity-90"
                aria-label={post.title}
              >
                <BlogCoverImage
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  className="rounded-none"
                  aspectClassName="aspect-[16/10]"
                  label="Cover image placeholder"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="text-[16px] font-bold leading-snug sm:text-[18px]">
                  <Link
                    href={post.path}
                    className="text-[#0B0E2C] transition-opacity hover:opacity-80"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px]">
                  {post.excerpt}
                </p>
                <Link
                  href={post.path}
                  className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B0E2C] transition-opacity hover:opacity-80 sm:text-[14px]"
                >
                  <span className="text-gradient-brand">Read more</span>
                  <ArrowRight
                    className="h-4 w-4 text-[#7B2FFF]"
                    strokeWidth={2}
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
