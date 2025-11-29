import React from "react";
import { Link, useParams } from "react-router";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { newsItems } from "@/data/newsItems";

export default function NewsDetails() {
  const { id } = useParams();
  const news = newsItems.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <div className="section-padding container-width text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="section-padding">
        <div className="container-width max-w-4xl mx-auto">
          <Button
            variant="ghost"
            asChild
            className="mb-6 text-muted-foreground"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />

            <span className="text-sm">{news.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{news.title}</h1>

          <p className="text-lg text-muted-foreground mb-8">
            {news.description}
          </p>

          <div
            className="prose prose-lg max-w-none
              [&>p]:text-muted-foreground [&>p]:mb-4 [&>p]:leading-relaxed
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-muted-foreground/40">
            <h2 className="text-2xl font-bold mb-6">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter((item) => item.id !== news.id)
                .slice(0, 2)
                .map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="group-block"
                  >
                    <div className="aspect-ratio overflow-hidden rounded-lg mb-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {item.date}
                    </p>
                    <h3 className="font-bold group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
