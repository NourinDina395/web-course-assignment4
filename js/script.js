function renderDashboard() {
            document.getElementById('total').textContent = jobs.length;
            document.getElementById('interview-count').textContent = jobs.filter(j => j.status === 'interview').length;
            document.getElementById('rejected-count').textContent = jobs.filter(j => j.status === 'rejected').length;
        }

        