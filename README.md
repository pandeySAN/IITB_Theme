# IITB Drupal Theme

A modern and responsive custom Drupal 10/11 theme designed specifically for events such as **Mapathon**, developed by the **FOSSEE GIS team at IIT Bombay**. It supports Layout Builder, is highly configurable, and features dynamic sections for banners, logos, social icons, and more.

---

## 🤖 Key Features

* **Drupal 10 & 11 compatible**
* Based on the **Classy** base theme
* **Layout Builder support** for flexible content structure
* Highly **customizable theme settings** through UI
* Dynamic configuration of:

  * Top logos
  * Hero banner and overlay images
  * Action buttons ("Click Here", "Register")
  * Partners and Knowledge Partner logos
  * Social media icons (Facebook, Instagram, Twitter/X, LinkedIn)
  * Process flow image and modal popup
* Responsive and accessible design
* Popup modal support for displaying statistics or maps

---

## 📁 Installation

### Step 1: Place the Theme Folder

Extract and place the theme into your Drupal installation:

```bash
/themes/custom/iitb_theme
```

### Step 2: Enable the Theme

#### Option 1: Using Drupal Admin UI

* Navigate to **Appearance**
* Find **"IITB Theme"** and click **Install and Set as Default**

#### Option 2: Using Drush (Recommended)

```bash
drush theme:enable iitb_theme
drush config:set system.theme default iitb_theme
drush cr
```

---

## ⚙️ Configuration

Access all custom settings from:

```
Appearance → Settings → IITB Theme
```

### Header & Hero Section

* Top logo URLs (one per line)
* Hero background image URL
* Hero overlay image URL
* "Click Here" and "Register" button image URLs

### Popup Modal

* Stats bubble GIF URL
* Map image to display inside popup

### Partner Logos

* URLs for partner/organiser logos
* URLs for knowledge partner logos

### Social Media Icons

* Facebook, Instagram, LinkedIn, X (Twitter) icon image URLs

### Process Flow

* Image URL to visually describe the event's workflow

---

## 📷 Image Instructions

All images must be publicly accessible URLs. If uploading via Drupal:

1. Go to **Content → Media → Add Media**
2. Upload your image
3. Copy the URL and paste it into the appropriate field under theme settings

Example URL:

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
├── screenshot.png (optional preview in Appearance)
```

---

## 🚀 Developer Notes

This theme uses standard Drupal hooks like:

* `hook_form_system_theme_settings_alter()` to define custom UI settings
* `hook_preprocess_page()` to pass theme variables to Twig templates

Twig templates use `{{ attach_library('iitb_theme/global-styling') }}` to include CSS/JS. Ensure your custom URLs and media are properly configured to avoid broken assets.

You can extend the theme using block regions, layout builder, or by adding new templates/components.

---

## 🙏 Credits

This theme is developed by the **FOSSEE GIS Team**, IIT Bombay
Visit us at [https://fossee.in](https://fossee.in)

---

## 📄 License

This theme is open-source
