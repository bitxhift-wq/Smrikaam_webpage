import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import api from '../api';
import BlueprintWrapper from '../components/BlueprintWrapper';
import ReadingProgressBar from '../components/anim/ReadingProgressBar';
import TextReveal from '../components/anim/TextReveal';
import Reveal from '../components/anim/Reveal';
import RichTextRenderer from '../components/RichTextRenderer';
import ServiceDetailPanel from '../components/ServiceDetailPanel';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadService() {
      try {
        const res = await api.get(`/services/${slug}`);
        if (res.data && res.data.status === 'published') {
          setService(res.data);
          setError(null);
        } else if (res.data && !res.data.status) {
          // If public API returned the item (which it only does for published items)
          setService(res.data);
          setError(null);
        } else {
          setService(null);
          setError('The requested service is currently unavailable, in draft, or archived.');
        }
      } catch (err) {
        setService(null);
        setError('The requested service is currently unavailable, in draft, or archived.');
      } finally {
        setLoading(false);
      }
    }
    loadService();
  }, [slug]);

  if (loading) {
    return <div className="font-mono text-sm text-text-muted pt-32 pb-24 text-center">LOADING_SPECIFICATION...</div>;
  }

  if (error || !service) {
    return (
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-center">
        <BlueprintWrapper className="service-detail-surface p-12">
          <div className="font-mono text-xs text-accent uppercase mb-4">404 NOT FOUND</div>
          <h1 className="font-heading text-3xl text-text mb-4">SERVICE NOT FOUND</h1>
          <p className="text-text-muted mb-6">{error || 'The requested service specification does not exist.'}</p>
          <Link to="/services" className="btn btn-primary">
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Services
          </Link>
        </BlueprintWrapper>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-20 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-16 max-w-5xl mx-auto">
      <ReadingProgressBar />

      <Link to="/services" className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase mb-6 sm:mb-8 hover:underline min-h-[44px]">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Services Catalog
      </Link>

      <div id="overview" data-scroll-label="OVERVIEW">
        <BlueprintWrapper className="service-detail-surface mb-12 overflow-hidden">
          <ServiceDetailPanel service={service} isStandalone={true} />
        </BlueprintWrapper>
      </div>
    </div>
  );
}
