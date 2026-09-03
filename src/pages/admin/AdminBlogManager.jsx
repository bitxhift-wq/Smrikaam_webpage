import React, { useState, useEffect } from 'react';
import {
  Plus, Edit2, Trash2, CheckCircle, Clock, Archive, X, Save,
  Search, Eye, Upload, FileText, ArrowLeft, Image as ImageIcon,
  Sparkles, ExternalLink, AlertCircle, Check, Tag
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';
import BlueprintWrapper from '../../components/BlueprintWrapper';
import RichEditor from '../../components/admin/RichEditor';

const PREDEFINED_CATEGORIES = [
  'Industrial IoT (IIoT)',
  'Generative AI & LLM Systems',
  'Enterprise Data Engineering',
  'DevOps & Cloud Infrastructure',
  'Artificial Intelligence & Machine Learning',
  'Data Governance & Security',
  'ServiceNow Solutions',
  'Technology Advisory',
  'Staffing & Pod Augmentation'
];

export default function AdminBlogManager() {
  const { fetchAdmin, createItem, updateItem, updateStatus, deleteItem, importDocx, uploadMedia } = useCMS();

  const [view, setView] = useState('list'); // 'list' | 'editor' | 'preview'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPostId, setEditingPostId] = useState(null);

  // Filter & Search states for list view
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Form state for editor
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: 'Industrial IoT (IIoT)',
    excerpt: '',
    content: '',
    cover_image_url: '',
    tags: [],
    author: 'SMRIKAAM Engineering Team',
    meta_title: '',
    meta_description: '',
    status: 'draft'
  });

  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [importing, setImporting] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState('');
  const [imgLoadError, setImgLoadError] = useState(false);

  // Load all posts for admin table
  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchAdmin('posts', {
        status: statusFilter,
        search: searchQuery
      });
      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error loading admin posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [statusFilter, searchQuery]);

  // Open Create Mode
  const handleOpenCreate = () => {
    setFormData({
      title: '',
      slug: '',
      category: 'Industrial IoT (IIoT)',
      excerpt: '',
      content: '',
      cover_image_url: '',
      tags: ['IIoT', 'Cloud', 'Engineering'],
      author: 'SMRIKAAM Engineering Team',
      meta_title: '',
      meta_description: '',
      status: 'draft'
    });
    setEditingPostId(null);
    setErrorMsg('');
    setFieldErrors({});
    setSuccessMsg('');
    setImgLoadError(false);
    setView('editor');
  };

  // Open Edit Mode
  const handleOpenEdit = (post) => {
    let parsedTags = [];
    if (Array.isArray(post.tags)) {
      parsedTags = post.tags;
    } else if (typeof post.tags === 'string' && post.tags.trim()) {
      parsedTags = post.tags.split(',').map((t) => t.trim()).filter(Boolean);
    }

    setFormData({
      title: post.title || '',
      slug: post.slug || '',
      category: post.category || 'Industrial IoT (IIoT)',
      excerpt: post.excerpt || '',
      content: post.content || '',
      cover_image_url: post.cover_image_url || '',
      tags: parsedTags,
      author: post.author || 'SMRIKAAM Engineering Team',
      meta_title: post.meta_title || '',
      meta_description: post.meta_description || '',
      status: post.status || 'draft'
    });
    setEditingPostId(post.id);
    setErrorMsg('');
    setFieldErrors({});
    setSuccessMsg('');
    setImgLoadError(false);
    setView('editor');
  };

  // Handle title change & auto slug generation
  const handleTitleChange = (val) => {
    setFormData((prev) => {
      const next = { ...prev, title: val };
      // Auto-generate slug if slug hasn't been manually locked or if it matched previous auto slug
      const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      if (!prev.slug || prev.slug === prev.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')) {
        next.slug = autoSlug;
      }
      return next;
    });

    if (fieldErrors.title) {
      setFieldErrors((prev) => ({ ...prev, title: null }));
    }
  };

  // Tag Handling
  const handleAddTag = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const cleaned = tagInput.replace(',', '').trim();
      if (cleaned && !formData.tags.includes(cleaned)) {
        setFormData((prev) => ({ ...prev, tags: [...prev.tags, cleaned] }));
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, idx) => idx !== indexToRemove)
    }));
  };

  // Import DOCX / PDF Document
  const handleDocxImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImporting(true);
    setErrorMsg('');
    try {
      const res = await importDocx(file);
      if (res && res.content) {
        setFormData((prev) => ({
          ...prev,
          content: res.content,
          title: prev.title || res.title || file.name.replace(/\.[^/.]+$/, '')
        }));
        setSuccessMsg('Article content imported successfully from document.');
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.error || err.message || 'Failed to import document.');
    } finally {
      setImporting(false);
    }
  };

  // Upload Featured Image
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    setErrorMsg('');
    try {
      const res = await uploadMedia(file);
      if (res && res.url) {
        setFormData((prev) => ({ ...prev, cover_image_url: res.url }));
        setImgLoadError(false);
        setSuccessMsg('Featured image uploaded successfully.');
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.error || err.message || 'Image upload failed.');
    } finally {
      setUploadingImage(false);
    }
  };

  // Save / Publish Action
  const handleSave = async (targetStatus) => {
    setErrorMsg('');
    setSuccessMsg('');
    const errors = {};

    if (!formData.title || !formData.title.trim()) {
      errors.title = 'Article title is required.';
    }
    if (!formData.content || !formData.content.trim()) {
      errors.content = 'Article content is required.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMsg('Please fix the required fields marked below.');
      return;
    }

    setSaving(true);

    try {
      const finalStatus = targetStatus || formData.status || 'draft';
      const autoSlug = (formData.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const finalSlug = formData.slug ? formData.slug.trim() : autoSlug;

      const payload = {
        ...formData,
        title: formData.title.trim(),
        slug: finalSlug,
        status: finalStatus,
        tags: formData.tags
      };

      if (editingPostId) {
        await updateItem('posts', editingPostId, payload);
        setSuccessMsg(`Article updated successfully (${finalStatus.toUpperCase()}).`);
      } else {
        const created = await createItem('posts', payload);
        if (created?.id) setEditingPostId(created.id);
        setSuccessMsg(`Article created successfully (${finalStatus.toUpperCase()}).`);
      }

      setFormData((prev) => ({ ...prev, status: finalStatus, slug: finalSlug }));
      await loadPosts();
    } catch (err) {
      setErrorMsg(err.response?.data?.error || err.message || 'Failed to save article.');
    } finally {
      setSaving(false);
    }
  };

  // Delete article
  const handleDeletePost = async (id, permanent = false) => {
    const promptMsg = permanent ? 'Permanently delete this article? This cannot be undone.' : 'Move article to trash?';
    if (!window.confirm(promptMsg)) return;

    try {
      await deleteItem('posts', id, permanent);
      loadPosts();
    } catch (err) {
      alert('Delete failed');
    }
  };

  // Filtered post list
  const filteredPosts = posts.filter((p) => {
    if (statusFilter !== 'all' && p.status !== statusFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const titleMatch = (p.title || '').toLowerCase().includes(q);
      const catMatch = (p.category || '').toLowerCase().includes(q);
      return titleMatch || catMatch;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* VIEW 1: ARTICLE LIST VIEW */}
      {view === 'list' && (
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--admin-border)] pb-5">
            <div>
              <div className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold mb-1">
                ARTICLE MANAGEMENT
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--admin-text-primary)]">
                BLOG ARTICLES & INSIGHTS
              </h1>
            </div>

            <button
              onClick={handleOpenCreate}
              className="btn btn-primary text-xs font-bold py-2.5 px-5 flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer"
            >
              <Plus className="w-4 h-4" /> CREATE NEW ARTICLE
            </button>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[var(--admin-surface)] p-4 border border-[var(--admin-border)]">
            {/* Status Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              {['all', 'published', 'draft', 'archived'].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    statusFilter === st
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'text-[var(--admin-text-secondary)] hover:text-white hover:bg-[var(--admin-surface-hover)]'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--admin-text-secondary)] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title or category..."
                className="w-full pl-9 pr-3 py-1.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Table View */}
          <BlueprintWrapper dark className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="border-b border-[var(--admin-border)] bg-[var(--admin-surface)] text-[var(--admin-text-secondary)] uppercase tracking-wider">
                    <th className="p-3.5">Article</th>
                    <th className="p-3.5">Category</th>
                    <th className="p-3.5">Status</th>
                    <th className="p-3.5">Author</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--admin-border)]">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[var(--admin-text-secondary)]">
                        Loading blog articles...
                      </td>
                    </tr>
                  ) : filteredPosts.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-[var(--admin-text-secondary)]">
                        No blog articles found. Click "CREATE NEW ARTICLE" above to write your first post.
                      </td>
                    </tr>
                  ) : (
                    filteredPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-[var(--admin-surface-hover)] transition-colors">
                        <td className="p-3.5 max-w-xs sm:max-w-md">
                          <div className="flex items-start gap-3">
                            {post.cover_image_url ? (
                              <img
                                src={post.cover_image_url}
                                alt=""
                                className="w-12 h-9 object-cover shrink-0 border border-[var(--admin-border)] rounded-sm"
                              />
                            ) : (
                              <div className="w-12 h-9 bg-[var(--admin-bg)] border border-[var(--admin-border)] flex items-center justify-center shrink-0 text-[var(--admin-text-secondary)]">
                                <ImageIcon className="w-4 h-4" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <div className="font-sans font-bold text-sm text-[var(--admin-text-primary)] truncate">
                                {post.title}
                              </div>
                              <div className="text-[11px] text-[var(--admin-text-secondary)] truncate mt-0.5">
                                {post.excerpt || post.slug}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-3.5 whitespace-nowrap text-[var(--admin-text-secondary)]">
                          <span className="px-2 py-0.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-[11px]">
                            {post.category || 'General'}
                          </span>
                        </td>

                        <td className="p-3.5 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm ${
                              post.status === 'published'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : post.status === 'draft'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                            }`}
                          >
                            {post.status || 'draft'}
                          </span>
                        </td>

                        <td className="p-3.5 whitespace-nowrap text-[var(--admin-text-secondary)]">
                          {post.author || 'SMRIKAAM Team'}
                        </td>

                        <td className="p-3.5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenEdit(post)}
                              className="admin-btn text-xs py-1 px-2.5 text-emerald-400 hover:text-white border-emerald-500/40 cursor-pointer"
                              title="Edit Article"
                            >
                              <Edit2 className="w-3.5 h-3.5 inline mr-1" /> Edit
                            </button>

                            {post.slug && (
                              <a
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                className="admin-btn text-xs p-1.5 text-[var(--admin-text-secondary)] hover:text-white"
                                title="View Public Article"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}

                            <button
                              onClick={() => handleDeletePost(post.id, false)}
                              className="admin-btn text-xs p-1.5 text-rose-400 hover:text-rose-200 border-rose-500/40 cursor-pointer"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </BlueprintWrapper>
        </div>
      )}

      {/* VIEW 2: PROFESSIONAL 2-COLUMN ARTICLE STUDIO EDITOR */}
      {view === 'editor' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--admin-border)] pb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setView('list')}
                className="admin-btn text-xs py-1.5 px-3 flex items-center gap-1.5 cursor-pointer text-[var(--admin-text-secondary)] hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" /> BACK TO BLOGS
              </button>

              <span className="text-[var(--admin-border)]">|</span>

              <span className="font-heading text-lg font-bold uppercase text-[var(--admin-text-primary)]">
                {editingPostId ? 'EDIT ARTICLE' : 'CREATE NEW ARTICLE'}
              </span>

              <span
                className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm ${
                  formData.status === 'published'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                {formData.status.toUpperCase()}
              </span>
            </div>

            {/* Header Right Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <label className="admin-btn text-xs py-1.5 px-3 cursor-pointer bg-[var(--admin-surface)] hover:bg-[var(--admin-surface-hover)] text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                <span>{importing ? 'IMPORTING...' : 'IMPORT DOCX / PDF'}</span>
                <input
                  type="file"
                  accept=".docx,.doc,.pdf"
                  onChange={handleDocxImport}
                  disabled={importing}
                  className="hidden"
                />
              </label>

              <button
                onClick={() => setView('preview')}
                className="admin-btn text-xs py-1.5 px-3 flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" /> PREVIEW
              </button>

              <button
                type="button"
                onClick={() => handleSave('draft')}
                disabled={saving}
                className="admin-btn text-xs py-1.5 px-4 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5 inline mr-1" /> SAVE DRAFT
              </button>

              <button
                type="button"
                onClick={() => handleSave('published')}
                disabled={saving}
                className="btn btn-primary text-xs py-1.5 px-5 font-bold uppercase tracking-wider cursor-pointer"
              >
                <CheckCircle className="w-3.5 h-3.5 inline mr-1" />
                {saving ? 'PUBLISHING...' : editingPostId ? 'UPDATE ARTICLE' : 'PUBLISH ARTICLE'}
              </button>
            </div>
          </div>

          {/* Feedback Banners */}
          {errorMsg && (
            <div className="p-3 bg-rose-950/90 border-l-4 border-rose-500 text-rose-200 font-mono text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-950/90 border-l-4 border-emerald-500 text-emerald-200 font-mono text-xs flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* 2-Column CMS Studio Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* LEFT COLUMN: Main Writing Canvas (2 Cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* 1. Article Title */}
              <div className="bg-[var(--admin-surface)] border border-[var(--admin-border)] p-5 space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] font-semibold">
                  ARTICLE TITLE *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter article title..."
                  className={`w-full bg-[var(--admin-bg)] border ${
                    fieldErrors.title ? 'border-rose-500' : 'border-[var(--admin-border)]'
                  } p-3.5 text-xl sm:text-2xl font-heading font-bold uppercase tracking-tight text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none transition-colors`}
                />
                {fieldErrors.title && (
                  <span className="text-xs font-mono text-rose-400 block">{fieldErrors.title}</span>
                )}
              </div>

              {/* 2. Category & Short Description */}
              <div className="bg-[var(--admin-surface)] border border-[var(--admin-border)] p-5 space-y-4">
                {/* Category Select */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1.5 font-semibold">
                    CATEGORY
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                    className="w-full p-2.5 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none cursor-pointer"
                  >
                    {PREDEFINED_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Short Description */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1.5 font-semibold">
                    SHORT DESCRIPTION / EXCERPT
                  </label>
                  <textarea
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Enter a concise executive summary or brief excerpt of the article..."
                    className="w-full p-3 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-sans text-[var(--admin-text-primary)] leading-relaxed focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* 3. Main Article Content Editor */}
              <div className="bg-[var(--admin-surface)] border border-[var(--admin-border)] p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] font-semibold">
                    ARTICLE CONTENT *
                  </label>
                  <span className="text-[10px] font-mono text-emerald-400">
                    MARKDOWN POWERED
                  </span>
                </div>

                {fieldErrors.content && (
                  <span className="text-xs font-mono text-rose-400 block mb-2">{fieldErrors.content}</span>
                )}

                {/* Visual Start Indicator */}
                <div className="border border-[var(--admin-border)] bg-[var(--admin-bg)] p-1">
                  <RichEditor
                    value={formData.content}
                    onChange={(val) => {
                      setFormData((prev) => ({ ...prev, content: val }));
                      if (fieldErrors.content) setFieldErrors((prev) => ({ ...prev, content: null }));
                    }}
                    placeholder="Start writing your article here..."
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Settings & Publishing Sidebar (1 Col) */}
            <div className="space-y-6">
              {/* 1. PUBLISHING CONTROL CARD */}
              <BlueprintWrapper dark className="p-5 space-y-4">
                <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-[var(--admin-border)] pb-2.5">
                  PUBLISHING CONTROL
                </h3>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    PUBLISHING STATUS
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none cursor-pointer"
                  >
                    <option value="draft">Draft (Private / Admin)</option>
                    <option value="published">Published (Live on Website)</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() => handleSave('published')}
                    disabled={saving}
                    className="btn btn-primary w-full py-2.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <CheckCircle className="w-4 h-4" />
                    {saving ? 'SAVING...' : editingPostId ? 'UPDATE & PUBLISH' : 'PUBLISH NOW'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSave('draft')}
                    disabled={saving}
                    className="admin-btn w-full py-2 text-xs uppercase font-mono justify-center cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5 inline mr-1" /> SAVE AS DRAFT
                  </button>
                </div>
              </BlueprintWrapper>

              {/* 2. FEATURED IMAGE CARD */}
              <BlueprintWrapper dark className="p-5 space-y-3">
                <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-[var(--admin-border)] pb-2.5">
                  FEATURED IMAGE
                </h3>

                {/* Live Image Preview Box */}
                <div className="w-full h-40 bg-[var(--admin-bg)] border border-[var(--admin-border)] relative overflow-hidden flex items-center justify-center">
                  {formData.cover_image_url && !imgLoadError ? (
                    <img
                      src={formData.cover_image_url}
                      alt="Featured Preview"
                      onError={() => setImgLoadError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-4 space-y-1 text-[var(--admin-text-secondary)]">
                      <ImageIcon className="w-8 h-8 mx-auto opacity-40" />
                      <p className="text-[11px] font-mono">
                        {imgLoadError ? 'Unable to load image URL' : 'No featured image'}
                      </p>
                      <p className="text-[10px] text-[var(--admin-text-secondary)] opacity-70">
                        Add an image URL below or upload a file to preview.
                      </p>
                    </div>
                  )}
                </div>

                {/* Image URL Input */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    IMAGE URL
                  </label>
                  <input
                    type="text"
                    value={formData.cover_image_url}
                    onChange={(e) => {
                      setFormData((prev) => ({ ...prev, cover_image_url: e.target.value }));
                      setImgLoadError(false);
                    }}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                {/* Image Upload Action */}
                <label className="admin-btn w-full py-1.5 text-xs justify-center cursor-pointer flex items-center gap-1.5 border-dashed">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{uploadingImage ? 'UPLOADING...' : 'UPLOAD IMAGE FILE'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="hidden"
                  />
                </label>
              </BlueprintWrapper>

              {/* 3. METADATA CARD (Author & Interactive Tags) */}
              <BlueprintWrapper dark className="p-5 space-y-4">
                <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-[var(--admin-border)] pb-2.5">
                  ARTICLE METADATA
                </h3>

                {/* Author */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    AUTHOR
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                    placeholder="SMRIKAAM Engineering Team"
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                {/* Interactive Tag Chips */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1.5">
                    TAGS
                  </label>

                  {/* Render Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {formData.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono bg-[var(--admin-bg)] border border-[var(--admin-border)] text-emerald-400 rounded-sm"
                      >
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(idx)}
                          className="hover:text-rose-400 cursor-pointer ml-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                    placeholder="Type tag and press Enter..."
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </BlueprintWrapper>

              {/* 4. SEO SETTINGS CARD */}
              <BlueprintWrapper dark className="p-5 space-y-4">
                <h3 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-[var(--admin-border)] pb-2.5">
                  SEO & URL SLUG
                </h3>

                {/* Slug */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    URL SLUG
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    placeholder="auto-generated-slug"
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                {/* Meta Title */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    SEO TITLE TAG
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, meta_title: e.target.value }))}
                    placeholder="SEO Title for search engines"
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-mono text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                {/* Meta Description */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-[var(--admin-text-secondary)] mb-1">
                    META DESCRIPTION
                  </label>
                  <textarea
                    rows={2}
                    value={formData.meta_description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, meta_description: e.target.value }))}
                    placeholder="Brief description snippet for Google search..."
                    className="w-full p-2 bg-[var(--admin-bg)] border border-[var(--admin-border)] text-xs font-sans text-[var(--admin-text-primary)] focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </BlueprintWrapper>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: FULL ARTICLE PREVIEW MODE */}
      {view === 'preview' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Preview Header Bar */}
          <div className="flex items-center justify-between border-b border-[var(--admin-border)] pb-4">
            <button
              onClick={() => setView('editor')}
              className="admin-btn text-xs py-1.5 px-4 flex items-center gap-1.5 cursor-pointer text-emerald-400 hover:text-emerald-300 border-emerald-500/40"
            >
              <ArrowLeft className="w-4 h-4" /> ← BACK TO EDITOR
            </button>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--admin-text-secondary)]">PREVIEW MODE</span>
              <button
                type="button"
                onClick={() => handleSave('published')}
                disabled={saving}
                className="btn btn-primary text-xs py-1.5 px-5 font-bold uppercase tracking-wider cursor-pointer"
              >
                <CheckCircle className="w-3.5 h-3.5 inline mr-1" />
                {saving ? 'PUBLISHING...' : editingPostId ? 'UPDATE ARTICLE' : 'PUBLISH ARTICLE'}
              </button>
            </div>
          </div>

          {/* Rendered Article Wrapper */}
          <BlueprintWrapper dark className="p-6 sm:p-10 max-w-4xl mx-auto space-y-8">
            {/* Category & Date */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase font-bold">
                {formData.category || 'GENERAL'}
              </span>
              <span className="text-[var(--admin-text-secondary)]">
                {formData.author || 'SMRIKAAM Team'} • {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--admin-text-primary)] leading-tight">
              {formData.title || 'Untitled Article'}
            </h1>

            {/* Excerpt */}
            {formData.excerpt && (
              <p className="text-base sm:text-lg text-[var(--admin-text-secondary)] leading-relaxed italic border-l-2 border-emerald-400 pl-4">
                {formData.excerpt}
              </p>
            )}

            {/* Featured Image */}
            {formData.cover_image_url && (
              <div className="w-full overflow-hidden border border-[var(--admin-border)]">
                <img
                  src={formData.cover_image_url}
                  alt={formData.title}
                  className="w-full h-auto max-h-[450px] object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="pt-4 border-t border-[var(--admin-border)]">
              <RichEditor
                value={formData.content}
                onChange={() => {}}
                placeholder="No article content provided."
              />
            </div>
          </BlueprintWrapper>
        </div>
      )}
    </div>
  );
}
