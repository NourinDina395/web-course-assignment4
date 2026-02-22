// ────────────────────────────────────────────────
let jobs = [
    { id: 1, company: 'Mobile First Corp', position: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$130,000 - $175,000', 
      description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.', status: 'pending' },
    { id: 2, company: 'WebFlow Agency', position: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80,000 - $120,000', 
      description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.', status: 'pending' },
    { id: 3, company: 'DataViz Solution', position: 'Data Visualization Specialist', location: 'Boston, MA', type: 'Full-time', salary: '$125,000 - $165,000', 
      description: 'Transform complex data into compelling visualizations. Required skills: D3.js , React , and strong analytical thinking', status: 'pending' },
    { id: 4, company: 'CloudFirst Inc', position: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140,000 - $190,000', 
      description: 'Design and maintain scalable backend systems using Python and AWS.  Work with modern DeveOps practices and Cloud infrastructure .', status: 'pending' },
    { id: 5, company: 'Innovation Labs', position: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$110,000 - $150,000',  
      description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and fronted development expertise required', status: 'pending' },
    { id: 6, company: 'MegaCrop Solutions', position: 'Javascript Developer', location: 'New York, NY', type: 'Full-time', salary: '$130,000 - $170,000', 
      description: 'Build enterprise application with JavaScript and modern frameworks. We offer competitive compensation health, insurance and professional development opportunities. ', status: 'pending' },
    { id: 7, company: 'StartupXYZ', position: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$120,000 - $160,000', 
      description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equlty package Included. ', status: 'pending' },
    { id: 8, company: 'TechCrop Industries', position: 'Senior Fronted Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$130,000 - $175,000', 
      description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects. ', status: 'pending' }
];

let currentTab = 'all';  

function renderDashboard() {
    document.getElementById('total').textContent = jobs.length;
    document.getElementById('interview-count').textContent = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').textContent = jobs.filter(j => j.status === 'rejected').length;
}

function renderJobs() {
    // "all" shows everything — most important fix
    const filtered = currentTab === 'all' 
        ? jobs 
        : jobs.filter(job => job.status === currentTab);

    const count = filtered.length;
    document.getElementById('jobs-count').textContent = `${count} job${count === 1 ? '' : 's'}`;

    const container = document.getElementById('jobs-container');
    container.innerHTML = '';

    if (count === 0) {
        container.innerHTML = `
            <div class="text-center py-16 text-gray-500 ">
                <div class="text-6xl mb-4 flex justify-center items-center">
                    <img src="jobs.png" alt="" class="">
                 </div>
                <h3 class="text-xl font-semibold mb-2 text-[#002C5C]">No jobs available</h3>
                <p>Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    filtered.forEach(job => {
        const card = document.createElement('div');
        card.className = 'bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow';

        // Better status badge styling
        let statusClass = 'bg-blue-100 text-blue-800';
        if (job.status === 'interview') statusClass = 'bg-green-100 text-green-800';
        if (job.status === 'rejected')  statusClass = 'bg-red-100 text-red-800';

        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <h3 class="text-lg font-bold text-[#002C5C">${job.company}</h3>
                <button class="text-gray-400 hover:text-red-600 transition-colors" 
                        onclick="deleteJob(${job.id})" title="Delete job">
                    <i class="fa-regular fa-trash-can text-lg"></i>
                </button>
            </div>

            <p class="font-semibold text-[#323B49] mb-1">${job.position}</p>

            <p class="text-sm  mb-3 text-[#323B49]">
                ${job.location} • ${job.type} • ${job.salary}
            </p>

            <span class="inline-block text-[#002C5C] px-3 py-1 rounded-sm text-xs font-medium mb-4  ${statusClass}">
                ${job.status === 'pending' ? 'NOT APPLIED' : job.status.toUpperCase()}
            </span>

            <p class="text-sm text-[#323B49] mb-5 line-clamp-3">
                ${job.description}
            </p>

            <div class="flex flex-wrap gap-3">
                <button class="btn btn-sm border-2 font-semibold ${job.status === 'interview' ? 'btn-success' : 'btn-outline btn-success'}" 
                        onclick="setStatus(${job.id}, 'interview')">
                    Interview
                </button>
                <button class="btn btn-sm border-2 font-semibold ${job.status === 'rejected' ? 'btn-error' : 'btn-outline btn-error'}" 
                        onclick="setStatus(${job.id}, 'rejected')">
                    Rejected
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

function setTab(tab) {
    currentTab = tab;

    // Update active tab style
    document.querySelectorAll('.tab').forEach(el => {
        el.classList.toggle('tab-active', el.dataset.tab === tab);
        // Optional: also toggle bg/text color if using tabs-boxed
        // el.classList.toggle('bg-primary text-white', el.dataset.tab === tab);
    });

    renderJobs();
}

function setStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (!job || job.status === newStatus) return;

    job.status = newStatus;

    renderDashboard();
    renderJobs();
}

function deleteJob(id) {
     //if (!confirm("Delete this job?")) return;
    jobs = jobs.filter(j => j.id !== id);
    renderDashboard();
    renderJobs();
}

// Initial render
renderDashboard();
renderJobs();