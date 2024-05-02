// change navebar style when scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// Navbar show in small device
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//Navbar close in small device
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)


// =================== COURSES ================================
const courses = [
    {
        id: 1,
        courseImg: `../assets/ct1.png`,
        courseName: `Web Dev: Craft Your Digital Presence`,
        courseDescription: `Learn HTML, CSS, JavaScript, and frameworks. Build responsive, dynamic websites. Dive into backend with Node.js, databases, and APIs.`,
        link: `#`
    },
    {
        id: 2,
        courseImg: `../assets/ct2.png`,
        courseName: `DAS Course: Unleash Data Analytics Skills`,
        courseDescription: `Master data analytics techniques, including data mining, visualization, and interpretation for informed decision-making in various industries.`,
        link: `#`
    },
    {
        id: 3,
        courseImg: `../assets/ct3.png`,
        courseName: `Python Mastery: Unlock Programming Potential`,
        courseDescription: `Comprehensive Python programming course covering fundamentals to advanced topics, equipping learners with versatile skills for software development and data analysis.`,
        link: `#`
    },
    {
        id: 4,
        courseImg: `../assets/ct4.png`,
        courseName: `Data Science Essentials: Unlocking Insights Powerfully`,
        courseDescription: `Explore data science fundamentals, including statistics, machine learning, and data visualization, empowering you to extract valuable insights from complex datasets.`,
        link: `#`
    },
    {
        id: 5,
        courseImg: `../assets/ct5.png`,
        courseName: `Blockchain Essentials: Transforming Digital Transactions`,
        courseDescription: `Delve into blockchain technology fundamentals, understanding decentralized systems, smart contracts, and cryptocurrencies, enabling innovation in digital transactions and beyond.`,
        link: `#`
    },
    {
        id: 6,
        courseImg: `../assets/ct6.png`,
        courseName: `Java Essentials: Building Dynamic Software Solutions`,
        courseDescription: `Comprehensive Java programming course covering core concepts and advanced techniques for developing robust and scalable software applications across various platforms.`,
        link: `#`
    },
    {
        id: 7,
        courseImg: `../assets/ct7.png`,
        courseName: `Photoshop Proficiency: Mastering Creative Digital Design`,
        courseDescription: `Learn Photoshop tools and techniques for graphic design, photo editing, and digital art creation, unleashing your creativity and professional potential.`,
        link: `#`
    },
    {
        id: 8,
        courseImg: `../assets/ct8.png`,
        courseName: `MS Office Mastery: Streamlining Workplace Productivity`,
        courseDescription: `Comprehensive MS Office course covering Word, Excel, PowerPoint, and Outlook, equipping you with essential skills for efficient workplace communication and organization.`,
        link: `#`
    },
];

// coursse function
function generateCourseHTML(course) {
    return `
        <article class="course">
            <div class="course-image">
                <img src="${course.courseImg}">
            </div>
            <div class="course-info">
                <h4>${course.courseName}</h4>
                <p>${course.courseDescription}</p>
                <a href="${course.link}" class="btn btn-primary">BUY NOW</a>
            </div>
        </article>
    `;
}

// function for dynamic code generation
function displayCourses(numCourses = courses.length) {
    const container = document.querySelector('.courses-container');
    for (let i = 0; i < numCourses && i < courses.length; i++) {
        const courseHTML = generateCourseHTML(courses[i]);
        container.innerHTML += courseHTML;
    }
}

if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    displayCourses(0);
} else {
    // Display all courses on course page
    displayCourses();
}

// ============================ FAQS ============================
const faqs = [
    {
        question: 'How can I contact support if I encounter issues with the website?',
        answer: 'If you encounter any issues with the website or have any questions, you can contact our support team via email at support@eduspot.com or by filling out the contact form on the website.'
    },
    {
        question: 'How do I place an order on the website?',
        answer: 'To place an order, simply browse our products, select the items you want to purchase, and proceed to checkout. Follow the prompts to complete your order.'
    },
    {
        question: 'Is there a return policy for products purchased on the website?',
        answer: 'Yes, we have a hassle-free return policy. If youre not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.'
    },
    {
        question: 'Are there any discounts or promotions available?',
        answer: 'Yes, we frequently offer discounts and promotions on our products. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest deals.'
    }
];

// Function to generate HTML for each FAQ
function generateFAQHTML(faq) {
    return `
        <article class="faq faq_question">
            <div class="faq-icon"><i class="fa-solid fa-plus"></i></div>
            <div class="qna">
                <h4>${faq.question}</h4>
                <p>${faq.answer}</p>
            </div>
        </article>
    `;
}

// Function to dynamically generate FAQs
function displayFAQs() {
    const container = document.querySelector('.faqs-container');
    faqs.forEach(faq => {
        const faqHTML = generateFAQHTML(faq);
        container.innerHTML += faqHTML;
    });
}
displayFAQs();

const faqQuestions = document.querySelectorAll('.faq_question');
faqQuestions.forEach(faq_question => {
    faq_question.addEventListener('click', () => {
        faq_question.classList.toggle('open');

        //change icon
        const icon = faq_question.querySelector('.faq-icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
        }
        else {
            icon.className = 'fa-solid fa-plus';
        }
    })
})


//======================= Testimonials ======================
const testimonials = [
    {
        name: 'Sayan Das',
        role: 'Developer',
        avatar: './website/site 1/assets/user1.png',
        content: 'Edu Spot has been a game-changer for me. The courses are comprehensive, the instructors are knowledgeable and supportive, and the platform is incredibly user-friendly. It has truly transformed my learning journey.'
    },
    {
        name: 'Emma Johnson',
        role: 'Student',
        avatar: './website/site 1/assets/user2.png',
        content: 'Edu Spot has truly transformed my learning experience. The interactive courses, knowledgeable instructors, and supportive community have helped me grasp complex concepts with ease. And the teachers are really helpful.'
    },
    {
        name: 'Michael Brown',
        role: 'Teacher',
        avatar: './website/site 1/assets/user3.png',
        content: 'Edu Spot provides a seamless platform for educators to create and share engaging content with their students. The intuitive interface and robust features make it easy to deliver high-quality instruction and facilitate student learning.'
    },
    {
        name: 'Sophia Lee',
        role: 'Student',
        avatar: './website/site 1/assets/user4.png',
        content: 'I am incredibly grateful for the opportunity to learn on Edu Spot. The courses are well-structured, the instructors are knowledgeable and supportive, and the platform is user-friendly. It has truly exceeded my expectations.'
    },
    {
        name: 'David Miller',
        role: 'Student',
        avatar: './website/site 1/assets/user5.png',
        content: 'Edu Spot has revolutionized the way I teach. The platforms interactive features, comprehensive resources, and collaborative tools have allowed me to create dynamic and engaging lessons that resonate with my students.'
    }
];

// Function to generate HTML for each testimonial
function generateTestimonialHTML(testimonial) {
    return `
        <article class="testimonial swiper-slide">
            <div class="testimonial-person">
                <div class="avatar">
                    <img src="${testimonial.avatar}" alt="">
                </div>
                <div class="testimonial-info">
                    <h5>${testimonial.name}</h5>
                    <small>${testimonial.role}</small>
                </div>
            </div>
            <div class="testimonial-body">
                <p>${testimonial.content}</p>
            </div>
        </article>
    `;
}

// Function to dynamically generate testimonial HTML and append to container
function displayTestimonials() {
    const container = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const testimonialHTML = generateTestimonialHTML(testimonial);
        container.innerHTML += testimonialHTML;
    });
}
displayTestimonials();


// ============== PROBLEM 1: THE BELOW CODE NOT GENERATE ANYTHING ==========================
const teamMembers = [
    {
        name: 'Sayan Das',
        role: 'Expert Tutor',
        image: '/website/site 1/assets/user1.png'
    }, 
    {
        name: 'Sayan Das',
        role: 'Expert Tutor',
        image: '/website/site 1/assets/user1.png'
    },
    // Add more team members as needed
];

// Function to generate HTML for each team member
function generateTeamMemberHTML(teamMember) {
    return `
    <article class="team-member">
        <div class="team-member-image">
            <img src="${teamMember.image}">
        </div>
        <div class="team-member-info">
            <h4>${teamMember.name}</h4>
            <p>${teamMember.role}</p>
        </div>
    </article>
    `;
}

// Function to dynamically generate team members HTML and append to container
function displayTeamMembers() {
    const container = document.querySelector('.team-container');
    teamMembers.forEach(member => {
        const memberHTML = generateTeamMemberHTML(member);
        container.innerHTML += memberHTML;
    });
}

// Call the function to display team members
displayTeamMembers();




// faq answer opening
