<?php 
// Get selected template
$template = isset($_GET['template']) ? $_GET['template'] : 'modern';
include 'includes/header.php'; 
?>

<div class="min-h-screen bg-gray-100">
    <div class="container mx-auto py-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Form Column -->
            <div class="lg:col-span-6 bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Resume Builder</h2>
                
                <form id="resumeForm" class="space-y-6">
                    <!-- Personal Information -->
                    <div class="space-y-4 border-b pb-6">
                        <h3 class="text-lg font-medium text-gray-900">Personal Information</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="fullName" name="fullName" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="jobTitle" class="block text-sm font-medium text-gray-700">Job Title</label>
                                <input type="text" id="jobTitle" name="jobTitle" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="tel" id="phone" name="phone" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            </div>
                            <div>
                                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                                <input type="text" id="location" name="location" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                            </div>
                        </div>
                        <div>
                            <label for="summary" class="block text-sm font-medium text-gray-700">Professional Summary</label>
                            <textarea id="summary" name="summary" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                    </div>

                    <!-- Work Experience -->
                    <div class="space-y-4 border-b pb-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-medium text-gray-900">Work Experience</h3>
                            <button type="button" id="addExperience" class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Add Experience
                            </button>
                        </div>
                        <div id="experienceFields">
                            <!-- Experience fields will be added here dynamically -->
                        </div>
                    </div>

                    <!-- Education -->
                    <div class="space-y-4 border-b pb-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-medium text-gray-900">Education</h3>
                            <button type="button" id="addEducation" class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Add Education
                            </button>
                        </div>
                        <div id="educationFields">
                            <!-- Education fields will be added here dynamically -->
                        </div>
                    </div>

                    <!-- Skills -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-medium text-gray-900">Skills</h3>
                        <div id="skillsContainer">
                            <div class="flex items-center mb-2">
                                <input type="text" name="skills[]" class="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Skill (e.g., Project Management)">
                                <button type="button" class="remove-skill ml-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button type="button" id="addSkill" class="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Add Skill
                        </button>
                    </div>

                    <div class="pt-6">
                        <button type="button" id="generatePdf" class="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Generate PDF Resume
                        </button>
                    </div>
                </form>
            </div>

            <!-- Preview Column -->
            <div class="lg:col-span-6">
                <div class="sticky top-4">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-bold text-gray-800">Resume Preview</h2>
                        <div class="flex space-x-2">
                            <button id="printResume" class="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Print
                            </button>
                            <button id="downloadPdf" class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Download PDF
                            </button>
                        </div>
                    </div>
                    
                    <!-- Resume Preview -->
                    <div id="resumePreview" class="bg-white p-8 rounded-lg shadow-lg transform scale-90 origin-top">
                        <!-- Preview content will be generated here -->
                        <div class="text-center">
                            <p class="text-gray-500">Your resume preview will appear here as you fill out the form.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Include template-specific CSS -->
<link rel="stylesheet" href="assets/templates/<?php echo $template; ?>.css">

<script src="assets/js/html2pdf.js"></script>
<script src="assets/js/script.js"></script>

<?php include 'includes/footer.php'; ?>