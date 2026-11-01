# Dire's Bakery Website Project - Part 3

**Module:** Web Development (WEDE5020)  
**Student:** Omphile Dire  
**Student Number:** ST10518251  
**Part:** Part 3 - Enhancing Functionality and SEO

## 1. Project overview
Dire's Bakery is a hypothetical neighbourhood bakery. The website is planned to help local customers find the bakery, view products and make enquiries about custom celebration cakes.

The project now builds on Part 1 by adding an external CSS stylesheet, desktop styling, responsive layouts, typography, visual styling, interactive states and responsive image techniques.

## 2. Website goals and objectives
- Build an online presence for Dire's Bakery.
- Make it easy for customers to view products.
- Generate enquiries for custom celebration cakes.
- Present the bakery story in a simple way.
- Make contact details and opening hours easy to find.

### KPIs
- Number of enquiry form submissions.
- Website visits from local searches.
- Average time spent on the products page.

## 3. Pages
1. Home (`index.html`)
2. About Us (`about.html`)
3. Products (`products.html`)
4. Enquiry (`enquiry.html`)
5. Contact (`contact.html`)

## 4. File and folder structure
```text
Dires_Bakery_Part1/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
├── images/
│   ├── logo.svg
│   ├── hero-bread.svg
│   ├── croissant.svg
│   ├── cake.svg
│   ├── cupcake.svg
│   └── cake-slice.svg
├── research/
│   └── content-research.md
└── docs/
    ├── sitemap.md
    ├── proposal-two.md
    └── part1-checklist.md
```

## 5. Part 2 implementation notes
The five HTML pages are linked to the external `css/style.css` stylesheet. The stylesheet includes a small CSS reset, CSS variables, typography, Flexbox and CSS Grid layouts, buttons, cards, form styling, hover/focus states and a consistent header and footer.

Responsive styling has been added using relative units such as `%`, `rem` and `clamp()`, together with tablet and mobile media-query breakpoints. Larger screens use multi-column layouts while smaller screens switch to simpler single-column layouts and a wrapped navigation menu.

The home-page hero uses the `picture`, `srcset` and `sizes` attributes to demonstrate responsive image loading.

The website should be tested at desktop (1440px), tablet (768px) and mobile (390px) viewport sizes. Add the screenshots you take yourself to the `screenshots` folder and then use the following Markdown in this README:

### Desktop – 1440px
![Desktop screenshot](screenshots/desktop-1440.png)

### Tablet – 768px
![Tablet screenshot](screenshots/tablet-768.png)

### Mobile – 390px
![Mobile screenshot](screenshots/mobile-390.png)

## 6. Design direction
The proposal specifies warm caramel brown, soft golden yellow and deep maroon. A serif font is used for headings and a sans-serif font is used for body text.

## 7. Timeline
- Week 1: Project planning, proposals and research.
- Week 2: Sitemap, folders and initial HTML structure.
- Week 3: Complete the five HTML pages and navigation.
- Week 4: Test links, clean code, update README and push to GitHub.
- Part 2: CSS styling, typography, desktop layout and responsive improvements.
- Part 3: JavaScript, SEO, forms and external services.

## 8. References
See `research/content-research.md` for the sources used for the planning and technical decisions.

## 9. Changelog
### Part 1
- Created five-page website structure.
- Added shared navigation and footer.
- Added semantic HTML structure.
- Added original SVG image assets.
- Added enquiry form structure and browser validation.
- Added README, sitemap, research notes and second proposal.


## Part 1 scope note

This Part 1 version intentionally focuses on HTML structure, content, semantic HTML,
navigation, comments, file organisation and documentation. CSS styling and JavaScript
functionality are not implemented in this version and will be handled in later parts
of the project.

## 10. Part 2 changelog
### Part 2
- Created an external `css/style.css` stylesheet and linked all five HTML pages to it.
- Added a CSS reset and shared colour variables for consistent styling.
- Added typography using serif headings and a sans-serif body font.
- Added desktop layouts using CSS Grid and Flexbox.
- Added visual styling for navigation, buttons, cards, products, forms and footer sections.
- Added `:hover` and `:focus-visible` states for interactive elements.
- Added tablet and mobile media queries with relative units and responsive layouts.
- Added `picture`, `srcset` and `sizes` for the home-page hero image.
- Added a screenshots section to the README for desktop, tablet and mobile evidence.
- Embedded the Google Maps location supplied for the project on the Contact page.
- Updated this README with Part 2 information and the new changelog entry.

## Part 2 scope note
JavaScript functionality is still reserved for later project parts. A Google Maps embed has been added to the Contact page using the project location supplied for the website.


## 11. Part 3 implementation
### JavaScript functionality
- Added an accessible FAQ accordion on the home page.
- Added an image lightbox that opens gallery and product illustrations in a larger dialog.
- Added a JavaScript product data array and dynamic product rendering.
- Added live product search and category filtering without reloading the page.
- Added client-side validation for the custom-order enquiry form, including required fields, email format, number limits and a future event date.
- Added Netlify Forms markup and asynchronous `fetch` submission for both forms when deployed to a Netlify site.
- Added an indicative starting-price response. This is an estimate only and does not confirm availability or an order.
- Added a separate general contact form. After validation it prepares an email using the visitor's default email application (mailto).
- Added a scroll-reveal effect with a reduced-motion accessibility preference.
- The Contact page includes an interactive Leaflet map using OpenStreetMap tiles, centred on 5 Dias, Amandasig, Akasia, 0118, plus a Google Maps link for directions.

### SEO and technical files
- Updated page titles, meta descriptions, keyword metadata and Open Graph descriptions on all five pages.
- Used descriptive image alt text and meaningful heading structure.
- Added `robots.txt` and `sitemap.xml`. Replace `YOUR-DEPLOYED-DOMAIN` in both files after the site is published.
- Added a Netlify `_headers` file with basic browser security headers. These headers apply when hosted on Netlify.
- Added an off-page SEO plan. Actual backlinks and social promotion must be done after deployment; they are not claimed as completed.
- Kept internal navigation links between the five pages.

### Important functionality limitation
This is a front-end student project. The forms use client-side JavaScript validation. When deployed on Netlify, they submit asynchronously (AJAX using `fetch`) to Netlify Forms. Netlify form detection must be enabled by deploying the HTML forms, and email notifications must be configured in the Netlify dashboard. The local Live Server preview does not save form submissions: the enquiry form only displays an estimate and the contact form opens a prepared email draft. The enquiry form does not check real stock or confirm availability. Do not enter real private information into the local demonstration.

## 12. Part 3 testing checklist
- [ ] Test accordion open/close using mouse and keyboard.
- [ ] Open and close every gallery image lightbox.
- [ ] Search for a product and test each category filter.
- [ ] Submit the enquiry form empty, with an invalid email, a past date and valid sample details.
- [ ] Submit the contact form with missing and valid sample details; confirm the email draft opens.
- [ ] Check the Google map on the Contact page.
- [ ] Check all five pages at desktop, tablet and mobile widths.
- [ ] Replace the sitemap and robots.txt domain placeholders after deployment.
- [ ] Review `docs/off-page-seo-plan.md`; only report backlinks or social campaigns after actually completing them.
- [ ] Check the deployed site with a page-speed tool and review image loading and mobile performance.
- [ ] Deploy the website and add the public URL to this README.
- [ ] Capture screenshots of the working features and add them to `screenshots/`.

## 13. Deployment
Recommended free hosting option: Netlify. Sign in, choose **Add new site → Deploy manually**, and drag the extracted project folder (the folder containing `index.html`) into the upload area. After deployment, copy the public URL and replace `YOUR-DEPLOYED-DOMAIN` in `robots.txt` and `sitemap.xml`. Redeploy the updated folder. Deployment must be completed and verified by the student using their own account.

## 14. Part 3 changelog
- Added `js/app.js` and linked it to all five HTML pages using the `defer` attribute.
- Added an accessible FAQ accordion and reusable image lightbox.
- Added dynamic product rendering, search and category filtering.
- Added client-side enquiry validation, event-date checking and indicative estimate feedback.
- Added a separate validated contact form with AJAX submission to Netlify Forms when deployed, and a `mailto` fallback in the local preview.
- Added scroll reveal effects and a reduced-motion fallback.
- Updated SEO titles, meta descriptions, keyword metadata and Open Graph metadata.
- Added `robots.txt` and `sitemap.xml` templates.
- Added a Netlify `_headers` file for basic security response headers.
- Added an off-page SEO action plan for genuine local citations, social promotion and backlinks.
- Updated contact details to show the supplied Amandasig project location and added an interactive Leaflet map with an OpenStreetMap tile layer and a Google Maps directions link.

## 15. References
- Leaflet (n.d.) *Leaflet - a JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 1 November 2026).
- OpenStreetMap contributors (n.d.) *Copyright and licence*. Available at: https://www.openstreetmap.org/copyright (Accessed: 1 November 2026).
- Google Maps (n.d.) *5 Dias, Amandasig, Akasia*. Available at: https://www.google.com/maps/place/5+Dias,+Amandasig,+Akasia,+0118/ (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *HTML forms: Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *HTMLDialogElement: showModal()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal (Accessed: 1 November 2026).
- MDN Web Docs (n.d.) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 1 November 2026).
- Google Search Central (n.d.) *Build and submit a sitemap*. Available at: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (Accessed: 1 November 2026).
- Google Search Central (n.d.) *Introduction to robots.txt*. Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro (Accessed: 1 November 2026).
