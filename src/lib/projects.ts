export interface Project {
    title: string;
    desc: string;
    tech: string[];
    image: string;
    links: { label: string; url: string }[];
}

export const projects: Project[] = [
    {
        title: "Office Workflow Optimization",
        desc: "Digitized physical records and implemented a cloud-based filing system, reducing document retrieval time by 40% and improving departmental collaboration.",
        tech: [
            "Process Improvement",
            "Cloud Records",
            "Stakeholder Management",
        ],
        image: "/assets/images/admin-workflow.png",
        links: [],
    },
    {
        title: "Executive Calendar & Travel Management",
        desc: "Coordinated complex international travel itineraries and managed high-priority executive calendars for C-suite leadership, ensuring seamless meeting transitions.",
        tech: [
            "Strategic Scheduling",
            "Travel Logistics",
            "Priority Management",
        ],
        image: "/assets/images/executive-support.png",
        links: [],
    },
    {
        title: "Departmental Event Coordination",
        desc: "Led the planning and execution of large-scale corporate events and internal workshops, managing budgets, vendor relations, and logistics.",
        tech: ["Event Planning", "Budgeting", "Vendor Relations"],
        image: "/assets/images/event-coordination.png",
        links: [],
    },
    {
        title: "Resource & Facility Oversight",
        desc: "Managed facility maintenance schedules and vendor contracts, ensuring a productive and compliant office environment for 50+ employees.",
        tech: [
            "Facilities Management",
            "Contract Negotiation",
            "Vendor Management",
        ],
        image: "/assets/images/facility-management.png",
        links: [],
    },
    {
        title: "Data Records & Compliance Audit",
        desc: "Conducted internal audits of sensitive data records to ensure compliance with organizational policies and data protection standards.",
        tech: ["Compliance", "Data Integrity", "Reporting"],
        image: "/assets/images/data-compliance.png",
        links: [],
    },
];
