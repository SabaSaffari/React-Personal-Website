const navLinks = [
    { id: 1, text: 'Home', link: '/', icon: 'fa fa-home feather' },
    {
        id: 2,
        text: 'Courses',
        link: '/courses',
        icon: 'fa fa-graduation-cap feather'
    },
    { id: 3, text: 'Education', link: '/education',  icon: 'fa fa-university feather' },
    { id: 4, text: 'Skill', link: '/skill', icon: 'fa fa-briefcase feather' },
    { id: 5, text: 'About', link: '/about', icon: 'fa fa-user feather' },
    { id: 6, text: 'Contact', link: '/contact', icon: 'fa fa-envelope feather' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
