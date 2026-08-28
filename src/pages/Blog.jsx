import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import TextReveal from '../components/anim/TextReveal';
import BannerDrawBorder from '../components/anim/BannerDrawBorder';
import Reveal from '../components/anim/Reveal';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultPosts = [
    {
      id: 'default-1',
      title: 'Architecting Low-Latency IIoT Telemetry for High-Speed Manufacturing',
      slug: 'iiot-telemetry-coimbatore',
      category_id: 'Industrial IoT',
      excerpt: 'How edge telemetry pipelines capture 17M+ data points per day from Modbus/OPC-UA machine controllers with under 50ms latency.',
      published_at: new Date().toISOString()
    },
    {
      id: 'default-2',
      title: 'Zero-Downtime Data Lakehouse Migration for Enterprise Systems',
      slug: 'cloud-data-warehouse-migration',
      category_id: 'Data Engineering',
      excerpt: 'Automated schema transformation and row-level validation patterns for legacy ERP database cutovers.',
      published_at: new Date().toISOString()
    },
    {
      id: 'default-3',
      title: 'Deploying Deterministic LLM Agents in Regulated Enterprise Environments',
      slug: 'generative-ai-agentic-automation',
      category_id: 'Generative AI',
      excerpt: 'Building context-aware Retrieval-Augmented Generation (RAG) pipelines with strict data governance and DPDP compliance.',
      published_at: new Date().toISOString()
    }
  ];

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await api.get('/posts');
        if (res.data && res.data.length > 0) {
          setPosts(res.data);
        } else {
          setPosts(defaultPosts);
        }
      } catch (err) {
        setPosts(defaultPosts);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  return (
    <div className="relative z-10 pt-28 pb-32 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div id="overview" data-scroll-label="BLOG" className="page-title-surface relative border border-border p-8 md:p-12 mb-16 overflow-hidden">
        <BannerDrawBorder />
        <div className="flex items-center justify-between mb-4">
          <div className="font-mono text-[13px] text-accent uppercase tracking-[0.18em] font-medium">
            ENGINEERING INSIGHTS // SMRIKAAM JOURNAL
          </div>
          <div className="font-mono text-[13px] text-text-muted border border-border px-3 py-1 bg-black/[0.02] dark:bg-white/[0.03]">
            ARTICLES: {posts.length}
          </div>
        </div>

        <TextReveal
          text="TECHNICAL BLOG &amp; INDUSTRY INSIGHTS"
          as="h1"
          className="font-heading text-4xl md:text-6xl font-bold uppercase text-text mb-4"
        />
        <p className="text-text-muted text-[16px] font-normal leading-[1.55] max-w-3xl border-l-2 border-accent pl-4">
          Deep dives into IIoT telemetry protocols, edge AI model compression, time-series data architectures, and industrial automation strategy in Coimbatore.
        </p>
      </div>

      {loading ? (
        <div className="font-mono text-sm text-text-muted py-12 text-center">LOADING_JOURNAL_POSTS...</div>
      ) : posts.length === 0 ? (
        <div className="font-mono text-sm text-text-muted py-12 text-center">NO_PUBLISHED_POSTS_FOUND</div>
      ) : (
        <div id="articles" data-scroll-label="ARTICLES" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <Reveal key={post.id} index={idx}>
              <BlueprintWrapper className="card group hover:border-accent h-full">
                {post.cover_image_url && (
                  <div className="overflow-hidden border-b border-border mb-6 -mx-6 -mt-6 h-56 relative bg-black/5 dark:bg-white/5">
                    <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover duotone" />
                    {post.category_id && (
                      <div className="absolute top-4 left-4 bg-white/90 dark:bg-bg/90 border border-border px-3 py-1 font-mono text-[13px] text-accent font-medium backdrop-blur-sm">
                        {post.category_id}
                      </div>
                    )}
                  </div>
                )}
                <div className="card-kicker font-mono text-[13px] font-medium text-accent uppercase tracking-[0.18em]">ARTICLE // {post.slug}</div>
                <h2 className="card-title text-xl md:text-2xl font-semibold uppercase group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="card-body text-[15px] font-normal text-text-muted leading-[1.55] mb-6">
                  {post.excerpt}
                </p>

                <div className="card-meta text-[14px]">
                  <Link to={`/blog/${post.slug}`} className="btn btn-ghost p-0 text-accent font-mono text-[14px] uppercase font-medium flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </Link>
                  <span className="font-normal text-text-muted">{post.published_at ? new Date(post.published_at).toLocaleDateString() : 'RECENT'}</span>
                </div>
              </BlueprintWrapper>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
