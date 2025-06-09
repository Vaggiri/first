<?php include 'includes/header.php'; ?>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Create Your Professional Resume
            </h1>
            <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Choose a template and build your resume in minutes
            </p>
        </div>

        <div class="mt-16">
            <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Select a Template</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Template 1 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div class="h-64 bg-blue-600 flex items-center justify-center">
                        <div class="bg-white p-4 rounded shadow-md w-3/4 h-3/4">
                            <!-- Template preview placeholder -->
                            <div class="h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                                <span class="text-gray-500">Modern Template</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-medium text-gray-900">Modern</h3>
                        <p class="mt-2 text-gray-600">Clean, professional design with a modern layout.</p>
                        <div class="mt-4">
                            <a href="resume-builder.php?template=modern" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Use This Template
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Template 2 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div class="h-64 bg-green-600 flex items-center justify-center">
                        <div class="bg-white p-4 rounded shadow-md w-3/4 h-3/4">
                            <!-- Template preview placeholder -->
                            <div class="h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                                <span class="text-gray-500">Creative Template</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-medium text-gray-900">Creative</h3>
                        <p class="mt-2 text-gray-600">Unique design with creative elements for standout resumes.</p>
                        <div class="mt-4">
                            <a href="resume-builder.php?template=creative" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Use This Template
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Template 3 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div class="h-64 bg-indigo-600 flex items-center justify-center">
                        <div class="bg-white p-4 rounded shadow-md w-3/4 h-3/4">
                            <!-- Template preview placeholder -->
                            <div class="h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                                <span class="text-gray-500">Classic Template</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-medium text-gray-900">Classic</h3>
                        <p class="mt-2 text-gray-600">Traditional layout with timeless elegance.</p>
                        <div class="mt-4">
                            <a href="resume-builder.php?template=classic" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Use This Template
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'includes/footer.php'; ?>