# Setting Up EmailJS - Step by Step Guide

Follow these exact steps to make your contact form send emails:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Log in to your account

## Step 2: Add Your Email Service

1. In the EmailJS dashboard, click on "Email Services" in the left sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Complete the authentication process
5. Give your service a name (e.g., "portfolio_service")
6. Copy the Service ID (it looks like "service_xxxxxxx")

## Step 3: Create an Email Template

1. In the EmailJS dashboard, click on "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Give your template a name (e.g., "portfolio_contact")
4. Set the template content:

**Subject:**
```
New message from {{from_name}} via Portfolio Contact Form
```

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

5. Save the template
6. Copy the Template ID (it looks like "template_xxxxxxx")

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, click on "Account" in the left sidebar
2. Click on "API Keys"
3. Copy your Public Key (it looks like "XXXXXXXXXXXXXXXXXX")

## Step 5: Update Your Contact Component

Open the `Contact.jsx` file and update these three values with your actual IDs:

```jsx
emailjs.sendForm(
  'service_xxxxxxx', // REPLACE WITH YOUR SERVICE ID from Step 2
  'template_xxxxxxx', // REPLACE WITH YOUR TEMPLATE ID from Step 3
  form.current,
  'XXXXXXXXXXXXXXXXXX' // REPLACE WITH YOUR PUBLIC KEY from Step 4
)
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Go to the contact form
3. Fill out the form with test information
4. Submit the form
5. Check your email to see if you received the message

## Troubleshooting

If emails still don't arrive:

1. Check your spam/junk folder
2. Verify that all three IDs are correctly copied from EmailJS
3. Make sure your email service is properly connected in EmailJS
4. Try using a different email address for your EmailJS service

## Need More Help?

Contact EmailJS support or check their documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
