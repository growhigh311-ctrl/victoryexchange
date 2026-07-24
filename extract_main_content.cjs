const fs = require('fs');
const content = fs.readFileSync('src/config/brands/victoryexchange.js', 'utf8');
const jsonStr = content.replace('export default', '').replace('// Auto-generated configuration for VictoryExchange', '').trim().replace(/;$/, '');
const data = eval('(' + jsonStr + ')');

let md = `# Main Website Content for ${data.name}\n\n`;

md += `## Brand Identity\n`;
md += `**Tagline:** ${data.tagline}\n\n`;

md += `## About Us Section\n`;
md += `${data.aboutUsText}\n\n`;

md += `## FAQ Questions (Visible Topics)\n`;
data.faqs.forEach(f => {
    md += `- ${f.question}\n`;
});
md += `\n`;

md += `## Latest Blog Topics\n`;
data.blogs.forEach(b => {
    md += `- ${b.title}\n`;
});
md += `\n`;

md += `## Contact Info\n`;
md += `- Phone: ${data.phone}\n`;
md += `- WhatsApp: ${data.whatsapp}\n`;
md += `- Telegram: ${data.telegram}\n`;

fs.writeFileSync('C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\e6948c3e-8b55-443d-ad8e-f4c0fec146a9\\victoryexchange_main_content.md', md);
