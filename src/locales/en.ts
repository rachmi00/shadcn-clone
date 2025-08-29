export default {
  // Header translations
  header: {
    navigation: {
      docs: "Docs",
      components: "Components", 
      blocks: "Blocks",
      charts: "Charts",
      themes: "Themes",
      colors: "Colors"
    },
    search: {
      placeholder: "Search documentation...",
      shortPlaceholder: "Search..."
    },
    aria: {
      openMenu: "Open menu",
      searchDocumentation: "Search documentation",
      searchInput: "Search input",
      github: "GitHub",
      toggleContrast: "Toggle contrast"
    }
  },

  // Hero translations
  hero: {
    badge: {
      text: "New Calendar Component"
    },
    title: "Build Your Component library",
    description: "A set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks. Open Source. Open Code",
    buttons: {
      getStarted: "Get Started",
      browseBlocks: "Browse Blocks"
    }
  },

  // Dashboard translations
  dashboard: {
    navigation: {
      example: "Example",
      dashboard: "Dashboard",
      tasks: "Tasks",
      playground: "Playground",
      authentication: "Authentication"
    },
    theme: {
      label: "Theme:",
      default: "Default",
      scaled: "Scaled",
      mono: "Mono",
      colors: "Colors",
      blue: "Blue",
      green: "Green",
      amber: "Amber",
      rose: "Rose",
      purple: "Purple",
      orange: "Orange",
      teal: "Teal"
    },
    documents: {
      title: "Documents",
      quickCreate: "Quick Create"
    },
    metrics: {
      totalRevenue: {
        title: "Total Revenue",
        description1: "Trending up this month",
        description2: "Visitors for the last 6 months"
      },
      newCustomers: {
        title: "New Customers",
        description1: "Down 20% this period",
        description2: "Acquisition needs attention"
      },
      activeAccounts: {
        title: "Active Accounts",
        description1: "Strong user retention",
        description2: "Engagement exceed targets"
      },
      growthRate: {
        title: "Growth Rate",
        description1: "Steady performance increase",
        description2: "Meets growth projections"
      }
    },
    chart: {
      title: "Total Visitors",
      description: "Total for the last 3 months",
      periods: {
        last3Months: "Last 3 months",
        last30Days: "Last 30 days",
        last7Days: "Last 7 days"
      },
      placeholder: "Chart visualizations"
    }
  },

  // Sections Table translations
  sectionsTable: {
    columns: {
      sectionType: "Section Type",
      status: "Status",
      target: "Target",
      limit: "Limit",
      reviewer: "Reviewer",
      header: "Header"
    },
    status: {
      done: "Done",
      inProcess: "In Process"
    },
    actions: {
      assignReviewer: "Assign reviewer"
    },
    pagination: {
      rowsSelected: "row(s) selected",
      rowsPerPage: "Rows per page",
      pageOf: "Page",
      of: "of"
    },
    sampleData: {
      sectionTypes: {
        narrative: "Narrative",
        coverPage: "Cover page",
        tableOfContents: "Table of contents",
        technicalContent: "Technical content"
      },
      headers: {
        coverPage: "Cover page",
        tableOfContents: "Table of contents",
        executiveSummary: "Executive summary",
        technicalApproach: "Technical approach"
      }
    }
  },

  // Sidebar translations
  sidebar: {
    company: {
      name: "Acme Inc."
    },
    sections: {
      home: "Home",
      documents: "Documents"
    },
    navigation: {
      dashboard: "Dashboard",
      lifecycle: "Lifecycle",
      analytics: "Analytics",
      projects: "Projects",
      team: "Team",
      dataLibrary: "Data Library",
      reports: "Reports",
      wordAssistant: "Word Assistant",
      more: "More",
      settings: "Settings",
      getHelp: "Get Help",
      search: "Search"
    },
    user: {
      name: "shadcn",
      email: "m@example.com"
    },
    accessibility: {
      more: "More"
    }
  },

  // Table translations
  table: {
    tabs: {
      outline: "Outline",
      pastPerformance: "Past Performance",
      keyPersonnel: "Key Personnel",
      focusDocuments: "Focus Documents"
    },
    customizableColumns: "Customizable Columns",
    addSection: "Add Section"
  },

  // Footer translations
  footer: {
    copyright: "Dashboard Clone. All rights reserved."
  }
} as const;