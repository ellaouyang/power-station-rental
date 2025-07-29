# OffGridMate Power Station Rental Website

## 📁 Project Structure

```
power_station_rental/
├── css/
│   ├── bootstrap.min.css      # Bootstrap framework
│   ├── components.css         # Custom component styles
│   ├── font-awesome.min.css   # Icon library
│   ├── nouislider.min.css     # Range slider
│   ├── slick.css             # Carousel styles
│   ├── slick-theme.css       # Carousel theme
│   └── style.css             # Main stylesheet
├── js/
│   ├── bootstrap.min.js       # Bootstrap JavaScript
│   ├── config.js             # Site configuration
│   ├── jquery.min.js         # jQuery library
│   ├── jquery.zoom.min.js    # Image zoom
│   ├── main.js               # Custom JavaScript
│   ├── nouislider.min.js     # Range slider
│   └── slick.min.js          # Carousel
├── img/                      # Image assets
├── fonts/                    # Font files
├── index.html                # Homepage
├── products.html             # Products listing
├── product.html              # Product details
├── scenarios.html            # Scenario-based browsing
└── README.md                 # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#D10024` (Red)
- **Primary Dark**: `#B1001E` (Dark Red)
- **Secondary**: `#495057` (Gray)
- **Light Gray**: `#f8f9fa`
- **Dark Gray**: `#222`

### Typography
- **Font Family**: Montserrat (400, 500, 700)
- **Icons**: Font Awesome

## 🔧 Maintenance Guidelines

### 1. CSS Organization
- All component styles are in `css/components.css`
- Use CSS custom properties (variables) for colors
- Utility classes available for common styling
- Responsive design with mobile-first approach

### 2. Configuration Management
- Site settings in `js/config.js`
- Contact information centralized
- Easy to update company details

### 3. Component Structure
Each component has:
- Semantic HTML structure
- CSS classes for styling
- JavaScript functionality (if needed)

### 4. File Naming Convention
- Use kebab-case for file names
- Descriptive names for components
- Consistent structure across pages

## 🚀 Quick Start

1. **Update Contact Information**
   - Edit `js/config.js`
   - Update contact details in the `contact` object

2. **Modify Colors**
   - Edit CSS variables in `css/components.css`
   - Update `:root` section

3. **Add New Components**
   - Add HTML structure
   - Add CSS classes to `components.css`
   - Follow existing naming conventions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 768px, 991px
- Flexible grid system using Bootstrap

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for each page
- Alt text for images
- Clean URL structure

## 🛠️ Development Best Practices

1. **Code Organization**
   - Separate concerns (HTML, CSS, JS)
   - Use meaningful class names
   - Comment complex sections

2. **Performance**
   - Minified CSS/JS files
   - Optimized images
   - Efficient loading order

3. **Accessibility**
   - ARIA labels where needed
   - Keyboard navigation support
   - Color contrast compliance

## 📝 Update Log

### Recent Changes
- ✅ Removed IE compatibility code
- ✅ Centralized CSS in components.css
- ✅ Added configuration file
- ✅ Removed inline styles
- ✅ Improved maintainability

## 🎯 Future Improvements

- [ ] Add form validation
- [ ] Implement search functionality
- [ ] Add product filtering
- [ ] Create admin panel
- [ ] Add analytics tracking

## 📞 Support

For technical support or questions about the codebase, please refer to the configuration files and this README. 