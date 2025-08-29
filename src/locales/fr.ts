export default {
  // Header translations
  header: {
    navigation: {
      docs: "Docs",
      components: "Composants",
      blocks: "Blocs",
      charts: "Graphiques",
      themes: "Thèmes",
      colors: "Couleurs"
    },
    search: {
      placeholder: "Rechercher dans la documentation...",
      shortPlaceholder: "Rechercher..."
    },
    aria: {
      openMenu: "Ouvrir le menu",
      searchDocumentation: "Rechercher dans la documentation",
      searchInput: "Champ de recherche",
      github: "GitHub",
      toggleContrast: "Basculer le contraste"
    }
  },

  // Hero translations
  hero: {
    badge: {
      text: "Nouveau composant calendrier"
    },
    title: "Construisez votre bibliothèque de composants",
    description: "Un ensemble de composants magnifiquement conçus et accessibles et une plateforme de distribution de code. Fonctionne avec vos frameworks préférés. Open Source. Code ouvert",
    buttons: {
      getStarted: "Commencer",
      browseBlocks: "Parcourir les blocs"
    }
  },

  // Dashboard translations
  dashboard: {
    navigation: {
      example: "Exemple",
      dashboard: "Tableau de bord",
      tasks: "Tâches",
      playground: "Terrain de jeu",
      authentication: "Authentification"
    },
    theme: {
      label: "Thème:",
      default: "Par défaut",
      scaled: "Mis à l'échelle",
      mono: "Mono",
      colors: "Couleurs",
      blue: "Bleu",
      green: "Vert",
      amber: "Ambre",
      rose: "Rose",
      purple: "Violet",
      orange: "Orange",
      teal: "Sarcelle"
    },
    documents: {
      title: "Documents",
      quickCreate: "Création rapide"
    },
    metrics: {
      totalRevenue: {
        title: "Chiffre d'affaires total",
        description1: "En hausse ce mois-ci",
        description2: "Visiteurs des 6 derniers mois"
      },
      newCustomers: {
        title: "Nouveaux clients",
        description1: "En baisse de 20% cette période",
        description2: "L'acquisition nécessite de l'attention"
      },
      activeAccounts: {
        title: "Comptes actifs",
        description1: "Forte rétention des utilisateurs",
        description2: "L'engagement dépasse les objectifs"
      },
      growthRate: {
        title: "Taux de croissance",
        description1: "Augmentation constante des performances",
        description2: "Répond aux projections de croissance"
      }
    },
    chart: {
      title: "Visiteurs totaux",
      description: "Total des 3 derniers mois",
      periods: {
        last3Months: "3 derniers mois",
        last30Days: "30 derniers jours",
        last7Days: "7 derniers jours"
      },
      placeholder: "Visualisations graphiques"
    }
  },

  // Sections Table translations
  sectionsTable: {
    columns: {
      sectionType: "Type de section",
      status: "Statut",
      target: "Cible",
      limit: "Limite",
      reviewer: "Réviseur",
      header: "En-tête"
    },
    status: {
      done: "Terminé",
      inProcess: "En cours"
    },
    actions: {
      assignReviewer: "Assigner un réviseur"
    },
    pagination: {
      rowsSelected: "ligne(s) sélectionnée(s)",
      rowsPerPage: "Lignes par page",
      pageOf: "Page",
      of: "de"
    },
    sampleData: {
      sectionTypes: {
        narrative: "Narratif",
        coverPage: "Page de couverture",
        tableOfContents: "Table des matières",
        technicalContent: "Contenu technique"
      },
      headers: {
        coverPage: "Page de couverture",
        tableOfContents: "Table des matières",
        executiveSummary: "Résumé exécutif",
        technicalApproach: "Approche technique"
      }
    }
  },

  // Sidebar translations
  sidebar: {
    company: {
      name: "Acme Inc."
    },
    sections: {
      home: "Accueil",
      documents: "Documents"
    },
    navigation: {
      dashboard: "Tableau de bord",
      lifecycle: "Cycle de vie",
      analytics: "Analytique",
      projects: "Projets",
      team: "Équipe",
      dataLibrary: "Bibliothèque de données",
      reports: "Rapports",
      wordAssistant: "Assistant Word",
      more: "Plus",
      settings: "Paramètres",
      getHelp: "Obtenir de l'aide",
      search: "Rechercher"
    },
    user: {
      name: "shadcn",
      email: "m@example.com"
    },
    accessibility: {
      more: "Plus"
    }
  },

  // Table translations
  table: {
    tabs: {
      outline: "Plan",
      pastPerformance: "Performance passée",
      keyPersonnel: "Personnel clé",
      focusDocuments: "Documents de focus"
    },
    customizableColumns: "Colonnes personnalisables",
    addSection: "Ajouter une section"
  },

  // Footer translations
  footer: {
    copyright: "Tableau de bord Clone. Tous droits réservés."
  }
} as const;