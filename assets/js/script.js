document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const resumeForm = document.getElementById('resumeForm');
    const resumePreview = document.getElementById('resumePreview');
    const addExperienceBtn = document.getElementById('addExperience');
    const addEducationBtn = document.getElementById('addEducation');
    const addSkillBtn = document.getElementById('addSkill');
    const generatePdfBtn = document.getElementById('generatePdf');
    const downloadPdfBtn = document.getElementById('downloadPdf');
    const printResumeBtn = document.getElementById('printResume');
    
    // Initialize with one experience and education field
    addExperienceField();
    addEducationField();
    
    // Event listeners
    resumeForm.addEventListener('input', updateResumePreview);
    addExperienceBtn.addEventListener('click', addExperienceField);
    addEducationBtn.addEventListener('click', addEducationField);
    addSkillBtn.addEventListener('click', addSkillField);
    generatePdfBtn.addEventListener('click', generatePdf);
    downloadPdfBtn.addEventListener('click', downloadPdf);
    printResumeBtn.addEventListener('click', printResume);
    
    // Update preview on initial load
    updateResumePreview();
    
    // Add experience field
    function addExperienceField() {
        const experienceFields = document.getElementById('experienceFields');
        const index = experienceFields.children.length;
        
        const experienceField = document.createElement('div');
        experienceField.className = 'experience-field mb-6 p-4 border border-gray-200 rounded-lg';
        experienceField.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="jobTitle${index}" class="block text-sm font-medium text-gray-700">Job Title</label>
                    <input type="text" id="jobTitle${index}" name="experience[${index}][jobTitle]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                    <label for="company${index}" class="block text-sm font-medium text-gray-700">Company</label>
                    <input type="text" id="company${index}" name="experience[${index}][company]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="startDate${index}" class="block text-sm font-medium text-gray-700">Start Date</label>
                    <input type="text" id="startDate${index}" name="experience[${index}][startDate]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="MM/YYYY">
                </div>
                <div>
                    <label for="endDate${index}" class="block text-sm font-medium text-gray-700">End Date</label>
                    <input type="text" id="endDate${index}" name="experience[${index}][endDate]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="MM/YYYY or Present">
                </div>
            </div>
            <div class="mb-4">
                <label for="jobDescription${index}" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="jobDescription${index}" name="experience[${index}][description]" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="button" class="remove-experience inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Remove Experience
            </button>
        `;
        
        experienceFields.appendChild(experienceField);
        
        // Add event listener to the remove button
        experienceField.querySelector('.remove-experience').addEventListener('click', function() {
            experienceField.remove();
            updateResumePreview();
        });
        
        // Update preview
        updateResumePreview();
    }
    
    // Add education field
    function addEducationField() {
        const educationFields = document.getElementById('educationFields');
        const index = educationFields.children.length;
        
        const educationField = document.createElement('div');
        educationField.className = 'education-field mb-6 p-4 border border-gray-200 rounded-lg';
        educationField.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="degree${index}" class="block text-sm font-medium text-gray-700">Degree</label>
                    <input type="text" id="degree${index}" name="education[${index}][degree]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div>
                    <label for="school${index}" class="block text-sm font-medium text-gray-700">School</label>
                    <input type="text" id="school${index}" name="education[${index}][school]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label for="educationStartDate${index}" class="block text-sm font-medium text-gray-700">Start Date</label>
                    <input type="text" id="educationStartDate${index}" name="education[${index}][startDate]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="MM/YYYY">
                </div>
                <div>
                    <label for="educationEndDate${index}" class="block text-sm font-medium text-gray-700">End Date</label>
                    <input type="text" id="educationEndDate${index}" name="education[${index}][endDate]" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="MM/YYYY or Present">
                </div>
            </div>
            <div class="mb-4">
                <label for="educationDescription${index}" class="block text-sm font-medium text-gray-700">Description</label>
                <textarea id="educationDescription${index}" name="education[${index}][description]" rows="2" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="button" class="remove-education inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Remove Education
            </button>
        `;
        
        educationFields.appendChild(educationField);
        
        // Add event listener to the remove button
        educationField.querySelector('.remove-education').addEventListener('click', function() {
            educationField.remove();
            updateResumePreview();
        });
        
        // Update preview
        updateResumePreview();
    }
    
    // Add skill field
    function addSkillField() {
        const skillsContainer = document.getElementById('skillsContainer');
        const skillField = document.createElement('div');
        skillField.className = 'flex items-center mb-2';
        skillField.innerHTML = `
            <input type="text" name="skills[]" class="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Skill (e.g., Project Management)">
            <button type="button" class="remove-skill ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
            </button>
        `;
        
        skillsContainer.appendChild(skillField);
        
        // Add event listener to the remove button
        skillField.querySelector('.remove-skill').addEventListener('click', function() {
            skillField.remove();
            updateResumePreview();
        });
    }
    
    // Update resume preview
    function updateResumePreview() {
        const formData = new FormData(resumeForm);
        const data = Object.fromEntries(formData.entries());
        
        // Process experience and education arrays
        data.experience = [];
        data.education = [];
        
        document.querySelectorAll('.experience-field').forEach((field, index) => {
            data.experience.push({
                jobTitle: field.querySelector(`input[name="experience[${index}][jobTitle]"]`).value,
                company: field.querySelector(`input[name="experience[${index}][company]"]`).value,
                startDate: field.querySelector(`input[name="experience[${index}][startDate]"]`).value,
                endDate: field.querySelector(`input[name="experience[${index}][endDate]"]`).value,
                description: field.querySelector(`textarea[name="experience[${index}][description]"]`).value
            });
        });
        
        document.querySelectorAll('.education-field').forEach((field, index) => {
            data.education.push({
                degree: field.querySelector(`input[name="education[${index}][degree]"]`).value,
                school: field.querySelector(`input[name="education[${index}][school]"]`).value,
                startDate: field.querySelector(`input[name="education[${index}][startDate]"]`).value,
                endDate: field.querySelector(`input[name="education[${index}][endDate]"]`).value,
                description: field.querySelector(`textarea[name="education[${index}][description]"]`).value
            });
        });
        
        // Process skills array
        data.skills = Array.from(document.querySelectorAll('input[name="skills[]"]')).map(input => input.value).filter(skill => skill.trim() !== '');
        
        // Generate HTML for preview
        let previewHtml = generateResumeHtml(data);
        resumePreview.innerHTML = previewHtml;
    }
    
    // Generate resume HTML based on form data
    function generateResumeHtml(data) {
        let html = `
            <div class="resume">
                <div class="header">
                    <div class="name-title">
                        <h1>${data.fullName || 'Your Name'}</h1>
                        <h2>${data.jobTitle || 'Your Job Title'}</h2>
                    </div>
                    <div class="contact-info">
                        ${data.email ? `<div class="contact-item"><span>${data.email}</span></div>` : ''}
                        ${data.phone ? `<div class="contact-item"><span>${data.phone}</span></div>` : ''}
                        ${data.location ? `<div class="contact-item"><span>${data.location}</span></div>` : ''}
                    </div>
                </div>
                
                ${data.summary ? `
                <div class="section">
                    <div class="section-title">Summary</div>
                    <p>${data.summary}</p>
                </div>
                ` : ''}
                
                ${data.experience.length > 0 ? `
                <div class="section">
                    <div class="section-title">Experience</div>
                    ${data.experience.map(exp => `
                        <div class="experience-item">
                            <div class="job-title">${exp.jobTitle || 'Job Title'}</div>
                            <div class="company">${exp.company || 'Company'}</div>
                            <div class="date">${exp.startDate || 'Start Date'} - ${exp.endDate || 'End Date'}</div>
                            ${exp.description ? `<div class="description">${exp.description.replace(/\n/g, '<br>')}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${data.education.length > 0 ? `
                <div class="section">
                    <div class="section-title">Education</div>
                    ${data.education.map(edu => `
                        <div class="education-item">
                            <div class="degree">${edu.degree || 'Degree'}</div>
                            <div class="school">${edu.school || 'School'}</div>
                            <div class="date">${edu.startDate || 'Start Date'} - ${edu.endDate || 'End Date'}</div>
                            ${edu.description ? `<div class="description">${edu.description.replace(/\n/g, '<br>')}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${data.skills.length > 0 ? `
                <div class="section">
                    <div class="section-title">Skills</div>
                    <div class="skills-list">
                        ${data.skills.map(skill => `<div class="skill">${skill}</div>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
        
        return html;
    }
    
    // Generate PDF
    function generatePdf() {
        const element = document.getElementById('resumePreview');
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Generate PDF
        html2pdf().from(element).set(opt).save();
    }
    
    // Download PDF
    function downloadPdf() {
        generatePdf();
    }
    
    // Print resume
    function printResume() {
        const originalContents = document.body.innerHTML;
        const printContents = document.getElementById('resumePreview').innerHTML;
        
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
        
        // Reattach event listeners
        resumeForm.addEventListener('input', updateResumePreview);
        addExperienceBtn.addEventListener('click', addExperienceField);
        addEducationBtn.addEventListener('click', addEducationField);
        addSkillBtn.addEventListener('click', addSkillField);
        generatePdfBtn.addEventListener('click', generatePdf);
        downloadPdfBtn.addEventListener('click', downloadPdf);
        printResumeBtn.addEventListener('click', printResume);
    }
    
    // Handle skill removal when clicking on dynamically added remove buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('remove-skill')) {
            e.target.parentElement.remove();
            updateResumePreview();
        }
    });
});