document.addEventListener('DOMContentLoaded', () => {
    const defaultImage = '../image/defaultImage/noImage.png';
    const projectListContainer = document.getElementById('project-list');

    // Fetch data from project.json
    fetch('./project.json')
        .then(response => response.json())
        .then(projects => {
            if (Array.isArray(projects)) {
                projects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';

                    const projectImage = document.createElement('img');
                    projectImage.src = project.image || defaultImage;
                    projectImage.onerror = () => (projectImage.src = defaultImage);

                    const projectContent = document.createElement('div');
                    projectContent.className = 'project-content';

                    const projectTitle = document.createElement('h3');
                    projectTitle.textContent = project.name;

                    const projectLink = document.createElement('a');
                    projectLink.href = project.link;
                    projectLink.target = '_blank';
                    projectLink.textContent = 'View Project';

                    projectContent.appendChild(projectTitle);
                    projectContent.appendChild(projectLink);

                    projectCard.appendChild(projectImage);
                    projectCard.appendChild(projectContent);

                    projectListContainer.appendChild(projectCard);
                });
            } else {
                projectListContainer.innerHTML = '<p>No projects found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            projectListContainer.innerHTML = '<p>Failed to load projects.</p>';
        });
});
