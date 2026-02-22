function renderDashboard() {
            document.getElementById('total').textContent = jobs.length;
            document.getElementById('interview-count').textContent = jobs.filter(j => j.status === 'interview').length;
            document.getElementById('rejected-count').textContent = jobs.filter(j => j.status === 'rejected').length;
        }

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

    let currentTab = 'pending';

    function renderJobs() {
            const filtered = jobs.filter(j => j.status === currentTab);
             const count = filtered.length;
             document.getElementById('jobs-count').textContent = `${count} jobs`;
            const container = document.getElementById('jobs-container');
            container.innerHTML = '';
            if (count === 0) {
                container.innerHTML = `
                    <div class="text-center py-10">
                        <div class="text-6xl mb-4">
                        <div class="flex justify-center items-center">
                            <img src="jobs.png" alt="" class="">
                        </div>
                        </div>
                        <h2 class="text-xl font-bold">No Jobs Available</h2>
                        <p class="text-gray-600">Check back soon for new job opportunities</p>
                    </div>
                `;
            } 
            else {
                filtered.forEach(job => {
                    const card = document.createElement('div');
                    card.classList.add('card', 'bg-base-200', 'shadow-none', 'bg-white-200', 'p-4');
                    card.innerHTML = `
                        <div class="flex justify-between items-start">
                            <h3 class="card-title">${job.company}</h3>
                            <button class="btn btn-ghost btn-sm" onclick="deleteJob(${job.id})">
                                  <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                        <p class="font-medium">${job.position}</p>
                        <p class="text-sm text-gray-600">${job.location}  .  ${job.type}  .  ${job.salary}</p>
                        <p class="text-sm mt-2 btn w-1/6  text-gray-700">${job.status === 'pending' ? 'NOT APPLIED' : job.status.toUpperCase()}</p>
                        <p class="text-sm mt-2  text-gray-600">${job.description}</p>
                        <div class="card-actions justify-start mt-4">
                            <button class="btn btn-success border-2 ${job.status === 'interview' ? '' : 'btn-outline'}" 
                                 onclick="setStatus(${job.id}, 'interview')">Interview</button>
                            <button class="btn btn-error border-2 ${job.status === 'rejected' ? '' : 'btn-outline'}" 
                                onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }
        }


            function setTab(tab) {
            currentTab = tab;
            updateTabs();
            renderJobs();
        }

        function updateTabs() {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
            document.querySelector(`.tab[data-tab="${currentTab}"]`).classList.add('tab-active');
        }

        function setStatus(id, newStatus) {
            const job = jobs.find(j => j.id === id);
            if (job.status === newStatus) return;
            job.status = newStatus;
            if (newStatus !== currentTab) {
                currentTab = newStatus;
                updateTabs();
            }
            renderJobs();
            renderDashboard();
        }

        function deleteJob(id) {
            jobs = jobs.filter(j => j.id !== id);
            renderJobs();
            renderDashboard();
        }

        // Initial render
        renderDashboard();
        renderJobs();
