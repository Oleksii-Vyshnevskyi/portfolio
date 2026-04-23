export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  variant?: "wide" | "tall" | "full";
};

export type ProjectSection = {
  id: string;
  title: string;
  body?: string[];
  bullets?: string[];
  images?: ProjectImage[];
  layout?: "standard" | "feature" | "gallery";
};

export type TextBlock = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type CaseStudyContent = {
  top: {
    problem: TextBlock;
    goal: TextBlock;
    summary: TextBlock;
    bankLinking?: TextBlock;
    image?: ProjectImage;
  };
  solution: TextBlock & {
    images: ProjectImage[];
  };
  visuals: {
    title: string;
    intro?: string;
    images: ProjectImage[];
  };
  outcome: TextBlock & {
    image?: ProjectImage;
  };
  reflection: TextBlock;
  galleryImages?: ProjectImage[];
};

export type ProjectTheme = {
  baseBg?: string;
  baseText?: string;
  mutedText?: string;
  accentPrimary?: string;
  accentSecondary?: string;
  borderTint?: string;
  hoverTint?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  team: string;
  website?: string;
  websiteUrl?: string;
  problem: string;
  goal: string;
  process: string[];
  decisions: string[];
  solution: string;
  outcome: string;
  reflection: string;
  heroImage?: ProjectImage;
  previewImage?: ProjectImage;
  sections?: ProjectSection[];
  caseStudy?: CaseStudyContent;
  theme?: ProjectTheme;
};

export const projects: Project[] = [
  {
    slug: "shopmonkey-accounting",
    title: "Accounting",
    summary: "Accounting views for auto repair shops.",
    category: "Shopmonkey",
    year: "2025-2026",
    role: "Lead Product Designer",
    timeline: "~4-5 months",
    team: "Product Manager, 2 Engineers, Design (me)",
    website: "shopmonkey.io",
    websiteUrl: "https://shopmonkey.io",
    problem:
      "Auto repair shops tracked finances in tools built for accountants, not daily shop operations.",
    goal:
      "Bring core accounting visibility into Shopmonkey without forcing shops into external systems.",
    process: [
      "Reviewed support tickets and integration issues.",
      "Talked to shop owners and service writers.",
      "Identified the most-used accounting actions around revenue, expenses, and reports.",
      "Mapped workflows between Shopmonkey and external accounting tools.",
    ],
    decisions: [
      "Focus on core financial workflows instead of full accounting coverage.",
      "Keep the model narrow and readable.",
      "Avoid accounting jargon where possible.",
      "Integrate directly into existing product flows.",
      "Prioritize visibility over configuration.",
    ],
    solution:
      "We designed accounting inside Shopmonkey around bank linking, transactions, reports, and a daily financial overview.",
    outcome:
      "The work gave shops faster access to financial data and reduced dependence on brittle integrations.",
    reflection:
      "We did not rebuild accounting software. We placed the most important financial views where daily shop work already happened.",
    heroImage: {
      src: "/images/SMA-hero-01.png",
      alt: "Shopmonkey Accounting dashboard hero screen",
      caption: "A built-in accounting overview designed for daily shop visibility.",
      variant: "wide",
    },
    previewImage: {
      src: "/images/SMA-ui-02.png",
      alt: "Shopmonkey Accounting dashboard preview",
      variant: "wide",
    },
    theme: {
      baseBg: "#05070b",
      baseText: "#f5f7fb",
      mutedText: "#a6adba",
      accentPrimary: "#70a0ff",
      accentSecondary: "#5060ff",
      borderTint: "#25283C",
      hoverTint: "rgba(112, 160, 255, 0.11)",
    },
    caseStudy: {
      top: {
        problem: {
          title:
            "Shops needed financial visibility without leaving their operating system.",
          body: [
            "Most teams relied on QuickBooks or spreadsheets. That added setup, cost, integration risk, and daily context switching.",
            "Money movement was hard to see because the work lived outside Shopmonkey.",
          ],
        },
        goal: {
          title:
            "Give shops the accounting views they use most, directly inside Shopmonkey.",
          bullets: [
            "Connect accounts quickly.",
            "Track revenue and expenses.",
            "Review transactions with less setup.",
            "Keep financial context close to shop work.",
          ],
        },
        summary: {
          title: "The product needed to feel useful immediately.",
          body: [
            "Most shops did not need a full accounting suite. They needed a clear view of cash flow, transactions, and reports in the product they already used.",
          ],
        },
        bankLinking: {
          title: "We use PLAID to securely connect bank accounts in seconds.",
          body: [
            "Instead of manual setup, users link their accounts in a few clicks and instantly see their financial data. This removes onboarding friction and makes the product immediately useful.",
          ],
        },
        image: {
          src: "/images/SMA-solution-01.png",
          alt: "Add bank accounts flow in Shopmonkey Accounting",
          variant: "wide",
        },
      },
      solution: {
        title:
          "We built the core accounting layer around bank data, transactions, and reporting.",
        body: [
          "The experience starts with connected accounts, then turns financial activity into views the shop can act on.",
          "We kept the model narrow: show what changed, what needs review, and where money is moving.",
        ],
        bullets: [
          "Bank linking before configuration.",
          "Transactions as the system of record.",
          "Reports for daily decisions.",
          "Accounting terms only where needed.",
        ],
        images: [
          {
            src: "/images/SMA-ui-01.png",
            alt: "Transactions list in Shopmonkey Accounting",
            caption:
              "Transactions are organized for review and reconciliation.\n\nThis supports both self-serve workflows and collaboration with a bookkeeper.",
            variant: "wide",
          },
        ],
      },
      visuals: {
        title: "Designed for clarity, not accounting complexity.",
        intro:
          "Large UI surfaces help users focus on real data instead of system complexity.",
        images: [
          {
            src: "/images/SMA-ui-02.png",
            alt: "Shopmonkey Accounting dashboard overview",
            caption:
              "We start with sample data instead of an empty state.\n\nUsers land directly in a realistic financial view, so they immediately understand how the product works without setup.",
            variant: "full",
          },
          {
            src: "/images/SMA-ui-03.png",
            alt: "General ledger view in Shopmonkey Accounting",
            caption:
              "A simplified general ledger view that provides visibility into financial records without overwhelming non-accounting users.",
            variant: "full",
          },
          {
            src: "/images/SMA-ui-04.png",
            alt: "Shopmonkey Accounting feature announcement",
            caption: "In-product announcement for shops discovering Accounting.",
            variant: "full",
          },
        ],
      },
      outcome: {
        title:
          "Shops could see financial activity in the same place they managed work.",
        bullets: [
          "Less reliance on external accounting tools.",
          "Fewer integration failure points.",
          "More visibility into revenue, expenses, and profit.",
          "A clearer handoff between owners and bookkeepers.",
        ],
        image: {
          src: "/images/SMA-outcome-01.png",
          alt: "Bookkeeper dashboard in Shopmonkey Accounting",
          caption:
            "The bookkeeper view centers review status, exceptions, and the work that needs attention.",
          variant: "wide",
        },
      },
      reflection: {
        title: "Simplicity was the product strategy.",
        body: [
          "Instead of replicating complex accounting systems, we focused on what shops actually need day to day. By narrowing the scope, the product becomes useful immediately without training or setup.",
        ],
      },
    },
  },
  {
    slug: "inventory-costing",
    title: "Inventory Costing",
    summary: "Structured cost tracking for parts and inventory.",
    category: "Shopmonkey",
    year: "2025",
    role: "Lead Product Designer",
    timeline: "~4-6 months",
    team: "Product Manager, Engineers, Design (me)",
    website: "shopmonkey.io",
    websiteUrl: "https://shopmonkey.io",
    problem:
      "Shops relied on flat or last cost values to track inventory. This approach broke down as inventory scaled. Costs became inaccurate, margins were hard to trust, and adjustments created confusion. There was no clear way to track how cost changed over time.",
    goal:
      "Introduce reliable cost tracking directly into inventory workflows.",
    process: [
      "Support multiple costing methods.",
      "Improve margin accuracy.",
      "Reduce manual corrections.",
      "Keep workflows simple for daily use.",
    ],
    decisions: [
      "Support multiple costing methods.",
      "Improve margin accuracy.",
      "Reduce manual corrections and errors.",
      "Keep workflows simple for daily use.",
    ],
    solution:
      "We introduced structured inventory costing based on batches and cost methods. Instead of a single cost value, inventory is tracked as a sequence of cost entries over time. We support FIFO, LIFO, moving average, and standard cost.",
    outcome:
      "More accurate inventory valuation. Clearer margins on work orders. Reduced manual corrections and errors. Better alignment between inventory and accounting.",
    reflection:
      "Complex systems need simple entry points. By separating user actions from cost logic, we made advanced costing usable without training.",
    heroImage: {
      src: "/images/SMIC-hero-01.png",
      alt: "Inventory Costing dashboard hero screen",
      caption: "Structured cost tracking for parts and inventory.",
      variant: "wide",
    },
    previewImage: {
      src: "/images/SMIC-ui-02.png",
      alt: "Inventory Costing dashboard preview",
      variant: "wide",
    },
    theme: {
      baseBg: "#05070b",
      baseText: "#f5f7fb",
      mutedText: "#a6adba",
      accentPrimary: "#70a0ff",
      accentSecondary: "#5060ff",
      borderTint: "#25283C",
      hoverTint: "rgba(112, 160, 255, 0.11)",
    },
    caseStudy: {
      top: {
        problem: {
          title: "Shops relied on flat or last cost values to track inventory.",
          body: [
            "This approach broke down as inventory scaled. Costs became inaccurate, margins were hard to trust, and adjustments created confusion.",
            "There was no clear way to track how cost changed over time.",
          ],
        },
        goal: {
          title: "Introduce reliable cost tracking directly into inventory workflows.",
          bullets: [
            "Support multiple costing methods.",
            "Improve margin accuracy.",
            "Reduce manual corrections.",
            "Keep workflows simple for daily use.",
          ],
        },
        summary: {
          title: "Shops need accurate costs without thinking in accounting terms.",
          body: [
            "The system should handle complexity, while users interact with simple, predictable actions.",
          ],
        },
        bankLinking: {
          title:
            "Instead of a single cost value, inventory is tracked as a sequence of cost entries over time.",
          body: [
            "We support FIFO, LIFO, moving average, and standard cost.",
          ],
        },
        image: {
          src: "/images/SMIC-solution-01.png",
          alt: "Inventory costing setup flow",
          variant: "wide",
        },
      },
      solution: {
        title:
          "We introduced structured inventory costing based on batches and cost methods.",
        body: [
          "Instead of a single cost value, inventory is tracked as a sequence of cost entries over time.",
          "We support FIFO, LIFO, moving average, and standard cost.",
        ],
        images: [
          {
            src: "/images/SMIC-ui-01.png",
            alt: "Inventory costing entries list",
            caption:
              "Inventory costing entries are organized for review and reconciliation.",
            variant: "wide",
          },
        ],
      },
      visuals: {
        title: "Focused on clarity and control.",
        intro:
          "Users interact with quantity and inventory actions, while cost logic is handled in the background. The interface surfaces only what matters: current cost, changes, and impact.",
        images: [
          {
            src: "/images/SMIC-ui-02.png",
            alt: "Inventory costing dashboard overview",
            caption:
              "The interface surfaces only what matters: current cost, changes, and impact.",
            variant: "full",
          },
          {
            src: "/images/SMIC-ui-03.png",
            alt: "Inventory costing detail view",
            caption:
              "Users interact with quantity and inventory actions, while cost logic is handled in the background.",
            variant: "full",
          },
          {
            src: "/images/SMIC-ui-04.png",
            alt: "Inventory costing feature announcement",
            caption: "Structured cost tracking for parts and inventory.",
            variant: "full",
          },
        ],
      },
      outcome: {
        title: "More accurate inventory valuation.",
        bullets: [
          "Clearer margins on work orders.",
          "Reduced manual corrections and errors.",
          "Better alignment between inventory and accounting.",
        ],
        image: {
          src: "/images/SMIC-outcome-01.png",
          alt: "Inventory costing outcome dashboard",
          caption:
            "More accurate inventory valuation and clearer margins on work orders.",
          variant: "wide",
        },
      },
      reflection: {
        title: "Complex systems need simple entry points.",
        body: [
          "By separating user actions from cost logic, we made advanced costing usable without training.",
        ],
      },
      galleryImages: [
        {
          src: "/images/SMIC-ui-04.png",
          alt: "Inventory Costing feature announcement",
          caption: "Structured cost tracking for parts and inventory.",
          variant: "wide",
        },
      ],
    },
  },
  {
    slug: "message-center",
    title: "Mobile Message Center",
    summary: "Customer communication on mobile for auto repair shops.",
    category: "Shopmonkey",
    year: "2025-2026",
    role: "Lead Product Designer",
    timeline: "~3-4 months",
    team: "Product Manager, Engineers, Design (me)",
    website: "shopmonkey.io",
    websiteUrl: "https://shopmonkey.io",
    problem:
      "Message Center was one of the most requested features from shops. On desktop, shops could communicate with customers directly inside the product. On mobile, this capability was missing. Teams relied on personal phones or external tools, which led to lost context, inconsistent communication, and poor visibility across the team.",
    goal: "Bring Message Center to mobile.",
    process: [
      "Enable real-time communication with customers.",
      "Keep conversations tied to shop workflows.",
      "Support fast replies and notifications.",
      "Make the experience intuitive across phones and tablets.",
    ],
    decisions: [
      "Conversations are tied to customers and jobs.",
      "The interface prioritizes speed and clarity.",
      "Push notifications keep users informed in real time.",
      "Layouts are optimized for both phones and tablets.",
      "Interactions are simplified for quick replies and navigation.",
    ],
    solution:
      "We designed a mobile-first Message Center adapted from the web experience. Core messaging functionality was preserved, but redesigned for mobile behavior and constraints.",
    outcome:
      "Shops can communicate with customers directly from mobile. Faster response times and fewer missed messages. Improved visibility across the team. Reduced reliance on personal devices and external tools.",
    reflection:
      "Great mobile experiences remove steps. By bringing messaging into mobile, we kept communication close to the work and made it instantly accessible.",
    heroImage: {
      src: "/images/SMMMC-hero-01.png",
      alt: "Mobile Message Center hero screen",
      caption: "Customer communication on mobile for auto repair shops.",
      variant: "wide",
    },
    previewImage: {
      src: "/images/SMMMC-ui-02.png",
      alt: "Mobile Message Center preview",
      variant: "wide",
    },
    theme: {
      baseBg: "#05070b",
      baseText: "#f5f7fb",
      mutedText: "#a6adba",
      accentPrimary: "#70a0ff",
      accentSecondary: "#5060ff",
      borderTint: "#25283C",
      hoverTint: "rgba(112, 160, 255, 0.11)",
    },
    caseStudy: {
      top: {
        problem: {
          title: "Message Center was one of the most requested features from shops.",
          body: [
            "On desktop, shops could communicate with customers directly inside the product. On mobile, this capability was missing.",
            "Teams relied on personal phones or external tools, which led to lost context, inconsistent communication, and poor visibility across the team.",
          ],
        },
        goal: {
          title: "Bring Message Center to mobile.",
          bullets: [
            "Enable real-time communication with customers.",
            "Keep conversations tied to shop workflows.",
            "Support fast replies and notifications.",
            "Make the experience intuitive across phones and tablets.",
          ],
        },
        summary: {
          title: "Communication is part of the workflow, not a separate tool.",
          body: [
            "Users should not switch devices or apps to talk to customers. Messaging needs to live inside the same system where work happens.",
          ],
        },
        bankLinking: {
          title:
            "Core messaging functionality was preserved, but redesigned for mobile behavior and constraints.",
          body: [
            "Conversations are tied to customers and jobs.",
            "The interface prioritizes speed and clarity.",
          ],
        },
        image: {
          src: "/images/SMMMC-solution-01.png",
          alt: "Mobile Message Center conversation flow",
          variant: "wide",
        },
      },
      solution: {
        title:
          "We designed a mobile-first Message Center adapted from the web experience.",
        body: [
          "Core messaging functionality was preserved, but redesigned for mobile behavior and constraints.",
        ],
        bullets: [
          "Conversations are tied to customers and jobs.",
          "The interface prioritizes speed and clarity.",
          "Push notifications keep users informed in real time.",
          "Layouts are optimized for both phones and tablets.",
          "Interactions are simplified for quick replies and navigation.",
        ],
        images: [
          {
            src: "/images/SMMMC-ui-01.png",
            alt: "Mobile Message Center conversation list",
            caption:
              "Conversations are tied to customers and jobs.",
            variant: "wide",
          },
        ],
      },
      visuals: {
        title: "Designed for fast interaction and readability.",
        intro:
          "The UI reduces friction by focusing on conversation, context, and quick actions.",
        images: [
          {
            src: "/images/SMMMC-ui-02.png",
            alt: "Mobile Message Center overview",
            caption:
              "The UI reduces friction by focusing on conversation, context, and quick actions.",
            variant: "full",
          },
          {
            src: "/images/SMMMC-ui-03.png",
            alt: "Mobile Message Center tablet layout",
            caption:
              "Layouts are optimized for both phones and tablets.",
            variant: "full",
          },
          {
            src: "/images/SMMMC-ui-04.png",
            alt: "Mobile Message Center feature announcement",
            caption: "Customer communication on mobile for auto repair shops.",
            variant: "full",
          },
        ],
      },
      outcome: {
        title: "Shops can communicate with customers directly from mobile.",
        bullets: [
          "Faster response times and fewer missed messages.",
          "Improved visibility across the team.",
          "Reduced reliance on personal devices and external tools.",
        ],
        image: {
          src: "/images/SMMMC-outcome-01.png",
          alt: "Mobile Message Center outcome screen",
          caption:
            "Shops can communicate with customers directly from mobile.",
          variant: "wide",
        },
      },
      reflection: {
        title: "Great mobile experiences remove steps.",
        body: [
          "By bringing messaging into mobile, we kept communication close to the work and made it instantly accessible.",
        ],
      },
    },
  },
  {
    slug: "reports-pdf-export",
    title: "Reporting & Print",
    summary: "Exporting and printing reports for real-world usage.",
    category: "Shopmonkey",
    year: "2025",
    role: "Lead Product Designer",
    timeline: "~2-3 months",
    team: "Product Manager, Engineers, Design (me)",
    website: "shopmonkey.io",
    websiteUrl: "https://shopmonkey.io",
    problem:
      "Users had no reliable way to export or print reports. Reports contained large amounts of data, often with 20+ columns. When printed or exported, layouts broke, content was cut off, and results were hard to use. This created friction in daily workflows and required manual workarounds.",
    goal: "Enable reliable report export and printing.",
    process: [
      "Support large datasets without breaking layouts.",
      "Allow users to control how reports are formatted.",
      "Standardize reporting across the product.",
    ],
    decisions: [
      "Users can preview reports before exporting.",
      "They can control layout and formatting based on their needs.",
      "Column visibility can be adjusted.",
      "Text wrapping can be enabled or disabled.",
      "Headers and structure can be customized.",
      "All reports were aligned to a consistent format.",
    ],
    solution:
      "We introduced a unified reporting and print system. Users can preview reports before exporting. They can control layout and formatting based on their needs. Column visibility can be adjusted. Text wrapping can be enabled or disabled. Headers and structure can be customized. All reports were aligned to a consistent format.",
    outcome:
      "Reliable export and printing across all reports. Reduced manual formatting work. Faster workflows for shops and accountants. Consistent reporting experience.",
    reflection:
      "Flexibility improves usability. By giving users control over output, we made reports usable in real-world scenarios.",
    heroImage: {
      src: "/images/SMRP-hero-01.png",
      alt: "Reporting and Print hero screen",
      caption: "Exporting and printing reports for real-world usage.",
      variant: "wide",
    },
    previewImage: {
      src: "/images/SMRP-ui-02.png",
      alt: "Reporting and Print preview",
      variant: "wide",
    },
    theme: {
      baseBg: "#05070b",
      baseText: "#f5f7fb",
      mutedText: "#a6adba",
      accentPrimary: "#70a0ff",
      accentSecondary: "#5060ff",
      borderTint: "#25283C",
      hoverTint: "rgba(112, 160, 255, 0.11)",
    },
    caseStudy: {
      top: {
        problem: {
          title: "Users had no reliable way to export or print reports.",
          body: [
            "Reports contained large amounts of data, often with 20+ columns. When printed or exported, layouts broke, content was cut off, and results were hard to use.",
            "This created friction in daily workflows and required manual workarounds.",
          ],
        },
        goal: {
          title: "Enable reliable report export and printing.",
          bullets: [
            "Support large datasets without breaking layouts.",
            "Allow users to control how reports are formatted.",
            "Standardize reporting across the product.",
          ],
        },
        summary: {
          title: "Reports are used outside the product.",
          body: [
            "They need to be readable, flexible, and ready to share without additional formatting.",
          ],
        },
      },
      solution: {
        title: "We introduced a unified reporting and print system.",
        body: [
          "Users can preview reports before exporting.",
          "They can control layout and formatting based on their needs.",
        ],
        bullets: [
          "Column visibility can be adjusted.",
          "Text wrapping can be enabled or disabled.",
          "Headers and structure can be customized.",
          "All reports were aligned to a consistent format.",
        ],
        images: [
          {
            src: "/images/SMRP-solution-01.png",
            alt: "Reporting and Print preview settings",
            caption:
              "Users can preview reports before exporting.",
            variant: "wide",
          },
        ],
      },
      visuals: {
        title: "Focused on control and predictability.",
        intro:
          "The preview allows users to adjust output before exporting, reducing errors and rework.",
        images: [
          {
            src: "/images/SMRP-ui-01.png",
            alt: "Reporting and Print overview",
            caption:
              "The preview allows users to adjust output before exporting, reducing errors and rework.",
            variant: "full",
          },
          {
            src: "/images/SMRP-ui-02.png",
            alt: "Reporting and Print output layout",
            caption:
              "All reports were aligned to a consistent format.",
            variant: "full",
          },
          {
            src: "/images/SMRP-ui-03.png",
            alt: "Reporting and Print column settings",
            caption:
              "Column visibility can be adjusted.",
            variant: "full",
          },
          {
            src: "/images/SMRP-ui-04.png",
            alt: "Reporting and Print export preview",
            caption:
              "Text wrapping can be enabled or disabled.",
            variant: "full",
          },
        ],
      },
      outcome: {
        title: "Reliable export and printing across all reports.",
        bullets: [
          "Reduced manual formatting work.",
          "Faster workflows for shops and accountants.",
          "Consistent reporting experience.",
        ],
        image: {
          src: "/images/SMRP-outcome-01.png",
          alt: "Reporting and Print outcome screen",
          caption:
            "Reliable export and printing across all reports.",
          variant: "wide",
        },
      },
      reflection: {
        title: "Flexibility improves usability.",
        body: [
          "By giving users control over output, we made reports usable in real-world scenarios.",
        ],
      },
      galleryImages: [
        {
          src: "/images/SMRP-ui-04.png",
          alt: "Reporting and Print feature announcement",
          caption: "Exporting and printing reports for real-world usage.",
          variant: "wide",
        },
      ],
    },
  },
  {
    slug: "connections-pro",
    title: "Connections",
    summary: "Exploring relationships between companies and individuals.",
    category: "YouControl",
    year: "2016-2017",
    role: "Product Designer",
    timeline: "~9-10 months",
    team: "Product Manager, Engineers, Design",
    website: "youcontrol.com.ua",
    websiteUrl: "https://youcontrol.com.ua",
    problem:
      "Understanding relationships between companies and individuals was difficult and time-consuming. Users had to manually investigate data across multiple sources. Important connections between founders, relatives, addresses, and roles were hidden in large datasets. This slowed down investigations and increased the risk of missing critical insights.",
    goal: "Make relationship discovery fast and intuitive.",
    process: [
      "Help users identify hidden connections.",
      "Support investigative workflows for journalists, compliance teams, and financial monitoring.",
      "Turn complex data into clear insights.",
    ],
    decisions: [
      "Connections are built from open data sources, including company registries, ownership structures, and public records.",
      "Entities are represented as nodes, connected through shared attributes such as founders, directors, addresses, and affiliations.",
      "Users can explore connections step by step.",
      "Key relationships are surfaced visually.",
      "The system supports both quick checks and deep investigations.",
      "We worked closely with data sources and legal constraints to ensure accuracy and proper use of open data.",
    ],
    solution:
      "We designed a system for visualizing relationships between entities. Connections are built from open data sources, including company registries, ownership structures, and public records. Entities are represented as nodes, connected through shared attributes such as founders, directors, addresses, and affiliations. Users can explore connections step by step. Key relationships are surfaced visually. The system supports both quick checks and deep investigations. We worked closely with data sources and legal constraints to ensure accuracy and proper use of open data.",
    outcome:
      "Faster investigation workflows. Improved ability to detect hidden relationships and risks. Better support for journalists, compliance teams, and financial analysts. Contribution to a more transparent business environment in Ukraine.",
    reflection:
      "Complex data needs structure to become useful. By visualizing relationships, we turned scattered information into actionable insight.",
    heroImage: {
      src: "/images/YC-hero-01.png",
      alt: "Connections graph hero screen",
      caption: "Exploring relationships between companies and individuals.",
      variant: "wide",
    },
    previewImage: {
      src: "/images/YC-ui-01.png",
      alt: "Connections graph preview",
      variant: "wide",
    },
    theme: {
      baseBg: "#05070b",
      baseText: "#f5f7fb",
      mutedText: "#a6adba",
      accentPrimary: "#70a0ff",
      accentSecondary: "#5060ff",
      borderTint: "#25283C",
      hoverTint: "rgba(112, 160, 255, 0.11)",
    },
    caseStudy: {
      top: {
        problem: {
          title:
            "Understanding relationships between companies and individuals was difficult and time-consuming.",
          body: [
            "Users had to manually investigate data across multiple sources. Important connections between founders, relatives, addresses, and roles were hidden in large datasets.",
            "This slowed down investigations and increased the risk of missing critical insights.",
          ],
        },
        goal: {
          title: "Make relationship discovery fast and intuitive.",
          bullets: [
            "Help users identify hidden connections.",
            "Support investigative workflows for journalists, compliance teams, and financial monitoring.",
            "Turn complex data into clear insights.",
          ],
        },
        summary: {
          title: "Users are not looking for data. They are looking for meaning.",
          body: [
            "The value is not in showing information, but in helping users understand how entities are connected.",
          ],
        },
        bankLinking: {
          title: "Visual-first interface designed for exploration.",
          body: [
            "Graph-based interactions help users navigate complex relationships without reading large amounts of data.",
            "Supporting panels provide details and context for each entity.",
          ],
        },
        image: {
          src: "/images/YC-ui-01.png",
          alt: "Connections graph interface",
          caption:
            "Graph-based interactions help users navigate complex relationships without reading large amounts of data.",
          variant: "wide",
        },
      },
      solution: {
        title:
          "We designed a system for visualizing relationships between entities.",
        body: [
          "Connections are built from open data sources, including company registries, ownership structures, and public records.",
          "Entities are represented as nodes, connected through shared attributes such as founders, directors, addresses, and affiliations.",
        ],
        bullets: [
          "Users can explore connections step by step.",
          "Key relationships are surfaced visually.",
          "The system supports both quick checks and deep investigations.",
          "We worked closely with data sources and legal constraints to ensure accuracy and proper use of open data.",
        ],
        images: [],
      },
      visuals: {
        title: "Visual-first interface designed for exploration.",
        intro:
          "Graph-based interactions help users navigate complex relationships without reading large amounts of data. Supporting panels provide details and context for each entity.",
        images: [],
      },
      outcome: {
        title: "Faster investigation workflows.",
        bullets: [
          "Improved ability to detect hidden relationships and risks.",
          "Better support for journalists, compliance teams, and financial analysts.",
          "Contribution to a more transparent business environment in Ukraine.",
        ],
      },
      reflection: {
        title: "Complex data needs structure to become useful.",
        body: [
          "By visualizing relationships, we turned scattered information into actionable insight.",
        ],
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
