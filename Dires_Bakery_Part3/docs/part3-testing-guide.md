# Part 3 testing guide

1. Open the project folder in Visual Studio Code.
2. Open `index.html` with Live Server.
3. Test the FAQ accordion on the Home page.
4. Click each gallery picture. The image should open in a larger lightbox. Close it with the X or by clicking outside the dialog.
5. Open Products. Search for `cake`, then choose categories from the filter. The product count should update.
6. Open Enquiry. Try submitting empty fields, then an invalid email, then a past date. Finally test valid sample values. Read the estimate message.
7. Open Contact. Test required fields and the phone format. In the local preview, a valid form prepares an email draft in your default email app. On Netlify after deployment, it submits to Netlify Forms asynchronously; configure email notifications in the Netlify dashboard.
8. Check the embedded map.
9. Resize the browser to desktop (1440px), tablet (768px) and mobile (390px). Capture screenshots for the README.
10. Before deployment, replace `YOUR-DEPLOYED-DOMAIN` in `robots.txt` and `sitemap.xml` with the exact public domain assigned by Netlify or GitHub Pages.

## Important
The project uses front-end demonstrations only. It does not store customer enquiries, send email from a server, or confirm actual bakery availability. The bakery and its email/phone details are fictional project details.
