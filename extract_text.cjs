const fs = require('fs');
const content = fs.readFileSync('src/config/brands/victoryexchange.js', 'utf8');
const jsonStr = content.replace('export default', '').replace('// Auto-generated configuration for VictoryExchange', '').trim().replace(/;$/, '');
const data = eval('(' + jsonStr + ')');
let md = `# ${data.name} - Text Content\n\n`;
md += `## General Info\n- Name: ${data.name}\n- Tagline: ${data.tagline}\n- Phone: ${data.phone}\n- WhatsApp: ${data.whatsapp}\n- Telegram: ${data.telegram}\n\n`;
md += `## SEO Data\n`;
for (const [page, seo] of Object.entries(data.seo)) {
    md += `### ${page}\n- Title: ${seo.title}\n- Meta Description: ${seo.metaDescription}\n`;
    if (seo.h1) md += `- H1: ${seo.h1}\n`;
    if (seo.h2) md += `- H2: ${seo.h2}\n`;
    if (seo.h3) md += `- H3: ${seo.h3}\n`;
    md += '\n';
}
md += `## About Us\n${data.aboutUsText}\n\n`;
md += `## Testimonials\n`;
data.testimonials.forEach(t => {
    md += `### ${t.name} (${t.location}) - ${t.rating} Stars\n${t.text}\n\n`;
});
md += `## FAQs\n`;
data.faqs.forEach(f => {
    md += `### Q: ${f.question}\n**A:** ${f.answer}\n\n`;
});
md += `## Blogs\n`;
data.blogs.forEach(b => {
    md += `### ${b.title}\n*By ${b.author} on ${b.date} (${b.readTime})*\n**Category:** ${b.category}\n**Summary:** ${b.summary}\n\n**Content:**\n${b.content}\n\n`;
});
fs.writeFileSync('C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\e6948c3e-8b55-443d-ad8e-f4c0fec146a9\\victoryexchange_text_content.md', md);
