// Quick test to verify EmailJS template ID
console.log('Testing EmailJS Template ID...');

const testTemplateId = 'template_0u699y9';
const serviceId = 'service_lw1tuzb';
const publicKey = '3HuyUpeJdHdXLoiyG';

console.log('Template ID:', testTemplateId);
console.log('Service ID:', serviceId);
console.log('Public Key:', publicKey);

// Test if template ID format is correct
if (testTemplateId.startsWith('template_')) {
    console.log('✅ Template ID format is correct');
} else {
    console.log('❌ Template ID format is incorrect');
}

console.log('Ready to test EmailJS with template_0u699y9');
