# Drupal 10 Custom Theme Enhancements

This README describes the custom features added to a Drupal 10 theme to enhance content flexibility and visual customization. These changes aim to improve branding, page layout, and front page dynamism through configurable theme settings and clean content separation.

## ✅ Features Overview

### 🖼️ 1. Upload Field for Top Logos
- **Added To**: Theme settings (`/admin/appearance/settings/THEME_NAME`)
- **Functionality**: Allows administrators to upload and manage multiple top logos.
- **Rendered On**: All pages via `page.html.twig` using the `top_logo_urls` variable.

### 🎨 2. Color Picker for Navigation Bar
- **Added To**: Theme settings
- **Functionality**: Lets users customize the navigation bar color via a color picker (or text field).
- **Rendered On**: All pages via inline style in `page.html.twig`.

### 🌐 3. Site-wide UI Elements
The following elements are made visible on **all pages**:
- ✅ Site logo (`{{ page.logo }}`)
- ✅ Main navigation menu (`{{ page.header }}`)
- ✅ Footer links (`{{ page.footer }}`)

These are implemented in the theme’s main `page.html.twig` template.


## 🏠 Front Page Only Features

### 🖼️ 4. Custom Slider (Block or View)
- **Functionality**: Displays an image/content slider just below the navigation bar.
- **Condition**: Visible **only on the front page** using `if front_page` logic.
- **Implementation**: Rendered using a custom block or a View placed in a region specifically shown on the front page.

### 🧾 5. Move Hardcoded Content to Node
- **Objective**: Improve maintainability and content management.
- **Action Taken**: 
  - Moved the previously hardcoded "About Mapathon", "Important Dates", "Themes", etc., into a node (e.g., basic page).
  - Used conditional logic in the theme to display this node **only on the front page**.
- **Node Render**: Can be accessed and rendered using `{{ page.content }}` for the front page.


## 🧩 Implementation Details

### 📁 Files Modified
- `THEME.theme`: Implements `hook_form_system_theme_settings_alter()` to add settings fields.
- `THEME.info.yml`: Ensure `settings: true` is set and libraries defined.
- `THEME.settings.yml`: (optional) Used to declare config schema.
- `templates/page.html.twig`: Updated to render uploaded logos, colored navbar, and conditionally display the slider and node content.