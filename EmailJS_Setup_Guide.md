# EmailJS Setup Guide for Your Portfolio

This guide will help you set up EmailJS to make your contact form functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account.
2. The free plan allows you to send 200 emails per month, which should be enough for your portfolio website.

## Step 2: Create an Email Service

1. After signing in, go to the "Email Services" tab.
2. Click "Add New Service".
3. Select your email provider (Gmail, Outlook, etc.) and connect your account.
4. Give your service a name (e.g., "portfolio_contact").
5. Save the Service ID - you'll need it later.

## Step 3: Create an Email Template

1. Go to the "Email Templates" tab.
2. Click "Create New Template".
3. Create a template with the following structure:

```
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note the Template ID.

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys".
2. Copy your Public Key.

## Step 5: Update Your Contact Component

1. Open your `Contact.jsx` file.
2. Replace the placeholders with your actual IDs:

```jsx
emailjs.sendForm(
  'YOUR_SERVICE_ID',  // Replace with the Service ID from Step 2
  'YOUR_TEMPLATE_ID', // Replace with the Template ID from Step 3
  form.current, 
  'YOUR_PUBLIC_KEY'   // Replace with the Public Key from Step 4
)
```

For example:

```jsx
emailjs.sendForm(
  'portfolio_contact',
  'template_abc123',
  form.current, 
  'user_xyz456789'
)
```

## Step 6: Test Your Form

1. Run your portfolio with `npm run dev`.
2. Navigate to the Contact section.
3. Fill out the form and submit it.
4. You should receive an email at the address you configured in your EmailJS service.

## Security Note

For better security in a production environment, consider:

1. Creating a `.env` file for your EmailJS keys.
2. Adding the following to your `.env` file:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. Then updating your code to use these environment variables:
   ```jsx
   emailjs.sendForm(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     form.current,
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   )
   ```

This approach keeps your keys out of your code repository for better security.
