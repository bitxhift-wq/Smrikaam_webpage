const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');
const pdfParse = require('pdf-parse');

const CATEGORY_KEYWORDS = {
  'Industrial IoT (IIoT)': ['iiot', 'iot', 'sensor', 'edge', 'factory', 'telemetry', 'opc-ua', 'mqtt', 'scada', 'plc', 'machinery'],
  'Generative AI & LLM Systems': ['genai', 'llm', 'rag', 'gpt', 'vector', 'embedding', 'prompt', 'transformer', 'generative ai', 'agent'],
  'Enterprise Data Engineering': ['data', 'pipeline', 'etl', 'cdc', 'lakehouse', 'spark', 'snowflake', 'bigquery', 'dbt', 'warehouse', 'sql'],
  'DevOps & Cloud Infrastructure': ['devops', 'cloud', 'kubernetes', 'k8s', 'docker', 'terraform', 'aws', 'azure', 'gcp', 'ci/cd', 'infrastructure'],
  'Artificial Intelligence & Machine Learning': ['ai', 'machine learning', 'ml', 'neural', 'classification', 'model', 'dataset', 'inference', 'vision'],
  'Data Governance & Security': ['governance', 'security', 'hipaa', 'gdpr', 'compliance', 'privacy', 'encryption', 'audit', 'rbac', 'iam'],
  'Integration Services': ['integration', 'api', 'microservices', 'kafka', 'event-driven', 'rest', 'graphql', 'webhook', 'middleware'],
  'ServiceNow Solutions': ['servicenow', 'itsm', 'itom', 'workflow', 'cmdb', 'incident', 'catalog'],
  'Technology Advisory': ['architecture', 'strategy', 'advisory', 'digital transformation', 'roadmap', 'modernization', 'tco'],
  'Staffing & Pod Augmentation': ['staffing', 'pod', 'augmentation', 'hiring', 'talent', 'resource', 'contract', 'team']
};

const COMMON_TAGS = [
  'IIoT', 'Telemetry', 'Cloud', 'Python', 'Machine Learning', 'AI', 'Generative AI',
  'LLM', 'Data Engineering', 'Kubernetes', 'DevOps', 'Security', 'Governance',
  'Microservices', 'Kafka', 'React', 'Node.js', 'ServiceNow', 'Architecture'
];

export async function parseDocument(file, uploadsDir) {
  const ext = path.extname(file.originalname).toLowerCase();
  const fileBuffer = fs.readFileSync(file.path);

  let rawText = '';
  let lines = [];
  let extractedImages = [];
  let numPages = 1;
  let docTitle = '';
  let docAuthor = '';

  if (ext === '.docx' || ext === '.doc') {
    // DOCX Processing via JSZip
    const zip = await JSZip.loadAsync(fileBuffer);

    // Extract images from word/media/
    const imageFiles = Object.keys(zip.files).filter((fileName) => fileName.startsWith('word/media/'));
    for (const imgPath of imageFiles) {
      const imgFile = zip.file(imgPath);
      if (imgFile) {
        const imgBuffer = await imgFile.async('nodebuffer');
        if (imgBuffer.length > 2048) { // Skip tiny icons under 2KB
          const imgExt = path.extname(imgPath) || '.png';
          const imgFileName = `doc_extracted_${Date.now()}_${Math.random().toString(36).substr(2, 6)}${imgExt}`;
          const targetImgPath = path.join(uploadsDir, imgFileName);
          fs.writeFileSync(targetImgPath, imgBuffer);
          extractedImages.push({
            filename: imgFileName,
            url: `/uploads/${imgFileName}`,
            size: imgBuffer.length
          });
        }
      }
    }

    // Extract text from document.xml
    const docXml = zip.file('word/document.xml');
    if (docXml) {
      const xmlStr = await docXml.async('string');
      const pMatches = xmlStr.match(/<w:p(?:\s|>).*?<\/w:p>/gs) || [];

      for (const pXml of pMatches) {
        const tMatches = pXml.match(/<w:t(?:\s|>).*?<\/w:t>/gs) || [];
        const text = tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('').trim();
        if (!text) continue;

        const isHeading1 = /<w:pStyle\s+w:val="Heading1"/i.test(pXml) || /<w:pStyle\s+w:val="1"/i.test(pXml);
        const isHeading2 = /<w:pStyle\s+w:val="Heading2"/i.test(pXml) || /<w:pStyle\s+w:val="2"/i.test(pXml);
        const isHeading3 = /<w:pStyle\s+w:val="Heading3"/i.test(pXml) || /<w:pStyle\s+w:val="3"/i.test(pXml);
        const isList = /<w:numPr>/i.test(pXml);

        if (isHeading1) {
          lines.push(`## ${text}`);
          if (!docTitle) docTitle = text;
        } else if (isHeading2) {
          lines.push(`### ${text}`);
        } else if (isHeading3) {
          lines.push(`#### ${text}`);
        } else if (isList) {
          lines.push(`- ${text}`);
        } else {
          lines.push(text);
        }
      }
    }
  } else if (ext === '.pdf') {
    // PDF Processing via pdf-parse
    const pdfData = await pdfParse(fileBuffer);
    rawText = pdfData.text || '';
    numPages = pdfData.numpages || 1;
    if (pdfData.info && pdfData.info.Title) docTitle = pdfData.info.Title;
    if (pdfData.info && pdfData.info.Author) docAuthor = pdfData.info.Author;

    // Extract JPEG & PNG images from PDF buffer streams
    const jpegMatches = fileBuffer.toString('binary').match(/\xFF\xD8\xFF[\s\S]+?\xFF\xD9/g) || [];
    let imgCount = 0;
    for (const rawJpeg of jpegMatches) {
      if (rawJpeg.length > 4096) { // Keep images > 4KB to ignore thumbnails
        const imgBuffer = Buffer.from(rawJpeg, 'binary');
        const imgFileName = `pdf_extracted_${Date.now()}_${imgCount++}_${Math.random().toString(36).substr(2, 4)}.jpg`;
        const targetImgPath = path.join(uploadsDir, imgFileName);
        fs.writeFileSync(targetImgPath, imgBuffer);
        extractedImages.push({
          filename: imgFileName,
          url: `/uploads/${imgFileName}`,
          size: imgBuffer.length
        });
        if (extractedImages.length >= 8) break;
      }
    }

    // Convert PDF text lines to structured Markdown
    const rawLines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      if (line.length < 65 && (line === line.toUpperCase() || /^[0-9]\.\s+[A-Z]/.test(line))) {
        lines.push(`\n## ${line.replace(/^[0-9]\.\s+/, '')}\n`);
        if (!docTitle) docTitle = line;
      } else if (line.startsWith('•') || line.startsWith('-')) {
        lines.push(`- ${line.replace(/^[•\-]\s*/, '')}`);
      } else {
        lines.push(line);
      }
    }
  }

  // Fallback title detection
  if (!docTitle || docTitle.length < 3) {
    const firstLine = lines.find(l => l.length > 5 && !l.startsWith('#')) || path.basename(file.originalname, ext);
    docTitle = firstLine.replace(/^[#\-\*\s]+/, '').trim();
  }

  docTitle = docTitle.replace(/[\r\n\t]+/g, ' ').trim();

  // Auto Slug
  const slug = docTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  // Detect Category
  const fullBody = lines.join(' ').toLowerCase();
  let suggestedCategory = 'Industrial IoT (IIoT)';
  let maxMatchScore = 0;

  for (const [catName, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    let score = 0;
    keywords.forEach(kw => {
      if (fullBody.includes(kw)) score++;
    });
    if (score > maxMatchScore) {
      maxMatchScore = score;
      suggestedCategory = catName;
    }
  }

  // Detect Excerpt (First 2-3 narrative paragraphs)
  const paragraphLines = lines.filter(l => !l.startsWith('#') && !l.startsWith('-') && l.length > 30);
  const excerpt = paragraphLines.length > 0 ? paragraphLines.slice(0, 2).join(' ').slice(0, 260).trim() + '...' : `Executive summary of ${docTitle}.`;

  // Detect Tags
  const suggestedTags = [];
  COMMON_TAGS.forEach(tag => {
    if (fullBody.includes(tag.toLowerCase()) && !suggestedTags.includes(tag)) {
      suggestedTags.push(tag);
    }
  });
  if (suggestedTags.length === 0) {
    suggestedTags.push('Engineering', 'Architecture', 'Cloud');
  }

  // Construct Markdown Content with inline images
  let markdownContent = lines.join('\n\n');
  if (extractedImages.length > 0) {
    markdownContent += '\n\n### Document Architecture Diagrams & Visuals\n';
    extractedImages.forEach((img, idx) => {
      markdownContent += `\n![Figure ${idx + 1}: Document Visual](${img.url})\n`;
    });
  }

  const featuredImage = extractedImages.length > 0 ? extractedImages[0].url : '';

  return {
    sourceType: ext.replace('.', '').toUpperCase(),
    sourceFileName: file.originalname,
    numPages,
    title: docTitle,
    slug,
    category: suggestedCategory,
    excerpt,
    content: markdownContent,
    cover_image_url: featuredImage,
    tags: suggestedTags.slice(0, 6),
    author: docAuthor || 'SMRIKAAM Engineering Team',
    meta_title: `${docTitle} | SMRIKAAM Engineering Insights`,
    meta_description: excerpt,
    extractedImages,
    status: 'draft' // ALWAYS DRAFT ON IMPORT — NEVER AUTO-PUBLISH
  };
}
