import kanbanPreview from './components/images/KanBan-Preview.png';
import portfolioPreview from './components/images/Portfolio-Preview.png';
import podcastAppPreview from './components/images/PodcastApp-Preview.png';
import cartoonHero from './components/images/cartoon-hero.png';

/**
 * @typedef {Object} EducationEntry
 * @property {string} school
 * @property {string[]} points
 */

/**
 * @typedef {Object} AboutMeData
 * @property {string} image
 * @property {string} introTitle
 * @property {string} introHighlight
 * @property {string[]} paragraphs
 * @property {EducationEntry[]} education
 */

/**
 * @typedef {Object} ProjectData
 * @property {string} image
 * @property {string} viewLink
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 */

/**
 * @typedef {Object} ServiceData
 * @property {string} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * @typedef {[string, number]} SkillItem
 */

/**
 * @typedef {Object} TechnicalSkillGroup
 * @property {string} title
 * @property {SkillItem[]} items
 */

/** @type {AboutMeData} */
export const aboutMeData = {
    image: cartoonHero,
    introTitle: 'Passionate Soon to be',
    introHighlight: 'Full Stack Developer',
    paragraphs: [
        'I am a passionate web developer and UI/UX designer dedicated to crafting seamless digital experiences. With a strong foundation in modern web technologies, I specialize in creating intuitive user interfaces that solve real problems. My approach combines creativity with technical expertise to deliver solutions that are both visually appealing and highly functional.',
        "Whether it is building responsive websites, designing engaging user interfaces, or developing mobile-friendly applications, I am committed to delivering high-quality work that exceeds expectations. I thrive on collaboration and am always eager to take on new challenges that allow me to grow and innovate in the ever-evolving world of web development and design.",
    ],
    education: [
        {
            school: 'CodeSpace Academy (2025-2026)',
            points: [
                'Halfway through a comprehensive front-end development course.',
                'Learned HTML, CSS, and Tailwind CSS.',
                'Developed multiple projects to apply learned skills.',
            ],
        },
        {
            school: 'Kibler Park Secondary (2019-2023)',
            points: [
                'Graduated with a focus on computer science and mathematics.',
                'Participated in coding clubs and competitions.',
                'Developed foundational skills in programming and problem-solving.',
            ],
        },
    ],
};

/** @type {ProjectData[]} */
export const projectsData = [
    {
        image: kanbanPreview,
        viewLink: 'https://github.com/BrooklynTreasurer/BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_JSLPP',
        title: 'KanBan Task Manager',
        description: 'A full-featured e-commerce solution with payment integration and admin dashboard.',
        tags: ['HTML', 'JavaScript', 'CSS', 'Mobile', 'UI/UX'],
    },
    {
        image: portfolioPreview,
        viewLink: 'https://github.com/BrooklynTreasurer/BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_CDV05',
        title: 'Portfolio Website Design',
        description: 'Creative portfolio website with smooth animations and modern UI.',
        tags: ['React', 'CSS', 'UI/UX'],
    },
    {
        image: podcastAppPreview,
        viewLink: 'https://github.com/BrooklynTreasurer/BROTRE25500_pto2505_GroupA_Brooklyn-Treasurer_DJS03',
        title: 'Podcast App UI',
        description: 'Modern podcast application interface with intuitive navigation and rich media playback.',
        tags: ['React', 'JavaScript', 'UI/UX', 'Mobile', 'CSS'],
    },
];

/** @type {ServiceData[]} */
export const servicesData = [
    {
        icon: '💻',
        title: 'Website Development',
        description:
            'Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.',
    },
    {
        icon: '🎨',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces designed with users in mind. Creating seamless experiences that drive engagement.',
    },
    {
        icon: '📱',
        title: 'Mobile App UI',
        description: 'Responsive mobile interfaces that work flawlessly across all devices and screen sizes.',
    },
    {
        icon: '🔧',
        title: 'Web Maintenance',
        description: 'Ongoing support, updates, and maintenance to keep your website running smoothly and securely.',
    },
];

/** @type {TechnicalSkillGroup[]} */
export const technicalSkillsData = [
    {
        title: 'Frontend',
        items: [
            ['HTML5', 95],
            ['CSS3/Sass', 90],
            ['JavaScript', 92],
            ['React', 88],
            ['Next.js', 85],
            ['TypeScript', 82],
            ['Tailwind CSS', 90],
        ],
    },
    {
        title: 'Backend',
        items: [
            ['Node.js', 67],
            ['Express.js', 35],
            ['PostgreSQL', 42],
            ['REST APIs', 90],
        ],
    },
    {
        title: 'Tools & Others',
        items: [
            ['Figma', 62],
            ['Git/GitHub', 88],
        ],
    },
];
