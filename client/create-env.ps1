# PowerShell script to create .env file
@"
REACT_APP_EMAILJS_SERVICE_ID=service_lw1tuzb
REACT_APP_EMAILJS_TEMPLATE_ID=template_s42zbrw
REACT_APP_EMAILJS_PUBLIC_KEY=3HuyUpeJdHdXLoiyG
"@ | Out-File -FilePath ".env" -Encoding UTF8
