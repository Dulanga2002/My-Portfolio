# How to Test Your Contact Form

## Option 1: Using EmailJS (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update your `.env` file with these values
6. Restart the development server

## Option 2: Temporary Testing Without EmailJS

If you want to test the form's functionality without setting up EmailJS immediately, you can use a temporary solution like FormSubmit:

1. Open `Contact.jsx`
2. Replace the current form element with this:

```jsx
<form 
  ref={form} 
  className={styles.contactForm} 
  action="https://formsubmit.co/dulanganikeshala2@gmail.com" 
  method="POST"
>
  <div className={styles.formGroup}>
    <input type="text" name="name" id="name" placeholder="Your Name" required />
  </div>
  
  <div className={styles.formGroup}>
    <input type="email" name="email" id="email" placeholder="Your Email" required />
  </div>
  
  <div className={styles.formGroup}>
    <input type="text" name="subject" id="subject" placeholder="Subject" required />
  </div>
  
  <div className={styles.formGroup}>
    <textarea name="message" id="message" placeholder="Your Message" required></textarea>
  </div>
  
  {/* Hidden fields for FormSubmit configuration */}
  <input type="hidden" name="_next" value="http://localhost:5173" />
  <input type="hidden" name="_captcha" value="false" />
  
  <button type="submit" className={styles.submitButton}>
    Send Message
  </button>
</form>
```

3. This will use FormSubmit.co service to deliver emails without needing any API keys
4. You'll receive an activation email the first time you submit the form
5. Once activated, emails will be sent to your address

## Option 3: Debug-Only Mode

The current code has debug checks that will show error messages in the console if EmailJS is not configured properly. This helps you identify if there are any issues with your setup.
