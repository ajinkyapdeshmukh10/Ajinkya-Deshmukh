const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment processing capabilities.",
    longDescription: "This comprehensive e-commerce solution provides businesses with everything they need to sell products online. The platform includes a responsive product catalog with filtering and search capabilities, a secure shopping cart system, user account management, and integration with popular payment gateways. The admin dashboard allows for easy product management, order tracking, and customer insights.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    features: [
      "Responsive product catalog with advanced filtering",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process with Stripe integration",
      "Admin dashboard for inventory and order management"
    ],
    challenges: "Implementing a secure and seamless payment process while ensuring data consistency across the shopping experience was the biggest challenge. I solved this by creating a robust state management system and implementing proper error handling throughout the checkout flow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile Development",
    description: "A cross-platform mobile application for task management with features like task creation, due dates, reminders, and collaboration.",
    longDescription: "This task management application helps users organize their work and personal tasks efficiently. Built with React Native for cross-platform compatibility, the app features an intuitive interface for creating, organizing, and tracking tasks. Users can set due dates, create recurring tasks, add reminders, and collaborate with team members. The app also includes data visualization to help users understand their productivity patterns.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    features: [
      "Intuitive task creation and organization",
      "Calendar integration and due date reminders",
      "Team collaboration with shared task lists",
      "Offline functionality with data synchronization",
      "Productivity analytics and reporting"
    ],
    challenges: "Ensuring a consistent user experience across different mobile platforms while maintaining offline functionality was challenging. I implemented a robust state management system with Redux and created a sophisticated synchronization mechanism to handle offline-to-online transitions seamlessly.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80"
    ],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/task-management-app"
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    category: "Data Science",
    description: "An interactive dashboard for visualizing complex datasets with customizable charts, filters, and real-time updates.",
    longDescription: "This data visualization dashboard transforms complex datasets into actionable insights through interactive and customizable visualizations. Built with React and D3.js, the dashboard offers a variety of chart types and visualization options that users can configure to explore their data from different angles. The application supports real-time data updates, advanced filtering capabilities, and export options for reports and presentations.",
    technologies: ["React", "D3.js", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Interactive and responsive visualizations",
      "Real-time data updates and streaming",
      "Advanced filtering and data manipulation",
      "Customizable dashboard layouts",
      "Export capabilities for reports and presentations"
    ],
    challenges: "Creating performant visualizations that could handle large datasets while maintaining smooth interactivity was the main challenge. I implemented data sampling techniques, efficient rendering strategies, and lazy loading to ensure the dashboard remained responsive even with millions of data points.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
    ],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/data-visualization-dashboard"
  },
  {
    id: 4,
    title: "AI-Powered Content Generator",
    category: "Artificial Intelligence",
    description: "A machine learning application that generates high-quality content for blogs, social media, and marketing materials based on user inputs.",
    longDescription: "This AI-powered content generator leverages natural language processing and machine learning to create high-quality written content for various purposes. Users can specify the type of content they need (blog posts, social media updates, marketing copy), provide key points or topics, and the application generates coherent, engaging text that matches their requirements. The system continuously improves through user feedback and rating mechanisms.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
    features: [
      "Customizable content generation for different formats",
      "Topic and keyword-based content creation",
      "Style and tone adjustment options",
      "Content editing and refinement tools",
      "Learning system that improves with user feedback"
    ],
    challenges: "Balancing the creative aspects of content generation with maintaining relevance and accuracy was particularly challenging. I implemented a sophisticated prompt engineering system and fine-tuned language models to ensure the generated content was both creative and aligned with user requirements.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1673297001830-e7b06f675160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/yourusername/ai-content-generator"
  }
];

export default projects;