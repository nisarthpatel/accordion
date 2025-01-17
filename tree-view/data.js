export const treeData = [
    {
        id: 1,
        label: "Services",
        to: "/services",
        children: [
            {
                id: 2,
                label: "Web Development",
                to: "/services/web-development",
                children: [
                    {
                        id: 3,
                        label: "Frontend",
                        to: "/services/web-development/frontend",
                        children: [
                            {
                                id: 4,
                                label: "HTML/CSS",
                                to: "/services/web-development/frontend/html-css",
                                children: []
                            },
                            {
                                id: 5,
                                label: "JavaScript",
                                to: "/services/web-development/frontend/javascript",
                                children: []
                            }
                        ]
                    },
                    {
                        id: 6,
                        label: "Backend",
                        to: "/services/web-development/backend",
                        children: [
                            {
                                id: 7,
                                label: "Node.js",
                                to: "/services/web-development/backend/nodejs",
                                children: []
                            },
                            {
                                id: 8,
                                label: "PHP",
                                to: "/services/web-development/backend/php",
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 9,
                label: "App Development",
                to: "/services/app-development",
                children: [
                    {
                        id: 10,
                        label: "Android",
                        to: "/services/app-development/android",
                        children: []
                    },
                    {
                        id: 11,
                        label: "iOS",
                        to: "/services/app-development/ios",
                        children: []
                    }
                ]
            },
            {
                id: 12,
                label: "SEO",
                to: "/services/seo",
                children: []
            },
            {
                id: 13,
                label: "Digital Marketing",
                to: "/services/digital-marketing",
                children: [
                    {
                        id: 14,
                        label: "PPC Advertising",
                        to: "/services/digital-marketing/ppc-advertising",
                        children: []
                    },
                    {
                        id: 15,
                        label: "Social Media Management",
                        to: "/services/digital-marketing/social-media-management",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 16,
        label: "Blog",
        to: "/blog",
        children: [
            {
                id: 17,
                label: "Web Design",
                to: "/blog/web-design",
                children: [
                    {
                        id: 18,
                        label: "UI/UX Design",
                        to: "/blog/web-design/ui-ux-design",
                        children: []
                    },
                    {
                        id: 19,
                        label: "Responsive Design",
                        to: "/blog/web-design/responsive-design",
                        children: []
                    }
                ]
            },
            {
                id: 20,
                label: "Development",
                to: "/blog/development",
                children: [
                    {
                        id: 21,
                        label: "JavaScript Frameworks",
                        to: "/blog/development/javascript-frameworks",
                        children: []
                    },
                    {
                        id: 22,
                        label: "API Development",
                        to: "/blog/development/api-development",
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 23,
        label: "Contact",
        to: "/contact",
        children: [
            {
                id: 24,
                label: "Customer Support",
                to: "/contact/customer-support",
                children: []
            },
            {
                id: 25,
                label: "Sales Inquiry",
                to: "/contact/sales-inquiry",
                children: []
            }
        ]
    }
];
