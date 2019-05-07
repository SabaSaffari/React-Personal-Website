const navLinks = [
    { id: 1, text: 'Main page', link: '#', icon: 'fa fa-home feather' },
    {
        id: 2,
        text: 'Courses',
        link: '#',
        count: 5,
        icon: 'fa fa-graduation-cap feather'
    },
    { id: 3, text: 'Education', link: '#',  icon: 'fa fa-university feather' },
    { id: 4, text: 'Skill', link: '#', icon: 'fa fa-briefcase feather' },
    { id: 5, text: 'About', link: '#', icon: 'fa fa-user feather' },
    { id: 6, text: 'Contact', link: '#', icon: 'fa fa-envelope feather' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
