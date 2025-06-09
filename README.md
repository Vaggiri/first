# Professional Resume Maker Web Application


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

✔ **Multiple Professional Templates** - Choose from modern, creative, and classic resume designs  
✔ **Real-time Preview** - See changes instantly as you fill out the form  
✔ **Dynamic Form Fields** - Add/remove experience, education, and skills sections  
✔ **PDF Export** - Download your resume as a polished PDF  
✔ **Print Option** - Directly print your resume  
✔ **Mobile Responsive** - Works on all device sizes  
✔ **Clean UI** - Intuitive interface with Bootstrap and Tailwind styling  

## Technologies Used

- **Frontend**:
  - HTML5, CSS3
  - JavaScript (ES6)
  - Bootstrap 5
  - Tailwind CSS

- **Backend**:
  - PHP
  - Dompdf (for PDF generation)

- **Libraries**:
  - html2pdf.js
  - jsPDF

## Installation

### Prerequisites
- Web server (Apache, Nginx)
- PHP 7.4+
- Composer (for Dompdf installation)

### Setup Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/resume-maker.git
   cd resume-maker
   ```

2. Install dependencies:
   ```bash
   composer install
   ```

3. Download required frontend libraries:
   - [Bootstrap](https://getbootstrap.com/)
   - [Tailwind CSS](https://tailwindcss.com/)
   - [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
   - [jsPDF](https://github.com/parallax/jsPDF)

4. Place the downloaded files in the appropriate `assets` directories.

5. Configure your web server to point to the project root directory.

## Usage

1. Access the application through your web browser
2. On the landing page, select a resume template
3. Fill out your personal information, experience, education, and skills
4. View the real-time preview on the right side
5. Click "Generate PDF" to download your resume
6. Optional: Use the "Print" button for direct printing

## Customization

### Adding New Templates
1. Create a new CSS file in `assets/templates/` (e.g., `professional.css`)
2. Add your template styles following the same structure as existing templates
3. Update `index.php` to include your new template option

### Modifying Styles
- Global styles: Edit `assets/css/styles.css`
- Template-specific styles: Edit the corresponding CSS file in `assets/templates/`
- Color schemes: Modify the template CSS files

### Configuration Options
- PDF settings can be adjusted in `assets/js/script.js` (look for the `generatePdf` function)
- Form field behavior can be modified in the JavaScript file

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Note**: For production use, consider adding:
- User authentication system
- Form validation and sanitization
- Database integration for saving resumes
- Rate limiting for PDF generation
