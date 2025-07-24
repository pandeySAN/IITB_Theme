# IITB Drupal Theme

A modern and responsive custom Drupal 10/11 theme designed for events like **Mapathon**, developed by the **FOSSEE GIS team at IIT Bombay**. It supports Layout Builder, offers flexible configuration, and features dynamic sections for banners, logos, social icons, and more.

---

## 🔑 Key Features

* **Compatible with Drupal 10 & 11**
* Based on the **Classy** base theme
* **Layout Builder** support for flexible content structure
* **Customizable theme settings** via the UI
* Dynamically configurable:

  * Top logos
  * Hero banner and overlay images
  * Action buttons ("Click Here", "Register")
  * Partner and Knowledge Partner logos
  * Social media icons (Facebook, Instagram, Twitter/X, LinkedIn)
  * Process flow image and modal popup
* Responsive and accessible design
* Popup modal for displaying maps or statistics

---

## 📁 Installation

### Step 1: Place the Theme Folder

Extract and place the theme inside your Drupal installation:

```bash
/themes/custom/iitb_theme
```

### Step 2: Enable the Theme

#### Option 1: Using the Admin UI

* Go to **Appearance**
* Locate **"IITB Theme"**
* Click **Install and set as default**

#### Option 2: Using Drush (Recommended)

```bash
drush theme:enable iitb_theme
drush config:set system.theme default iitb_theme
drush cr
```

---

## ⚙️ Configuration

All theme settings can be accessed via:

```
Appearance → Settings → IITB Theme
```

### Header & Hero Section

* Top logo URLs (one per line)
* Hero background image URL
* Hero overlay image URL
* Image URLs for "Click Here" and "Register" buttons

### Popup Modal

* Stats bubble GIF URL
* Map image URL to be shown inside the popup

### Partner Logos

* URLs for partner/organiser logos
* URLs for knowledge partner logos

### Social Media Icons

* Facebook, Instagram, Twitter/X, and LinkedIn icon image URLs

### Process Flow

* Image URL to visually explain the event's process flow

---

## 📷 Image Guidelines

All images must use publicly accessible URLs. If uploading via Drupal:

1. Go to **Content → Media → Add Media**
2. Upload your image
3. Copy the generated image URL and paste it into the theme settings

**Example URL:**

```
http://localhost/drupal10-rebuild/sites/default/files/2025-07/iitb-logo.png
```

---

## 📂 Theme Structure

```
iitb_theme/
├── css/
│   └── style.css
├── images/
│   └── *.png, *.gif
├── js/
│   └── script.js
├── templates/
│   └── page.html.twig
├── iitb_theme.info.yml
├── iitb_theme.libraries.yml
├── iitb_theme.theme
├── iitb_theme.settings.yml (optional)
├── screenshot.png (optional preview image)
```

---

## 🛠 Developer Notes

The theme uses standard Drupal hooks:

* `hook_form_system_theme_settings_alter()` to define custom settings
* `hook_preprocess_page()` to pass variables to Twig templates

Twig templates use:

```twig
{{ attach_library('iitb_theme/global-styling') }}
```

to load CSS and JS.

Ensure all URLs and media files are correctly configured to avoid broken images or assets.

You can further enhance the theme using custom block regions, layout builder, or new Twig templates.

---

## 🙏 Credits

Developed by the **FOSSEE GIS Team**, IIT Bombay
Visit us at [https://fossee.in](https://fossee.in)

---

## 📄 License

This theme is open-source and free to use.
