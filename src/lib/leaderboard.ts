export interface LeaderboardEntry {
  agent: string;
  organization: string;
  webVoyager: {
    score: string;
    source: string;
  };
  isNew?: boolean;
  github: string | null;
  homepage: string;
}

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    agent: "Surfer 2",
    organization: "H Company",
    webVoyager: {
      score: "97.1%",
      source: "https://hcompany.ai/surfer-2",
    },
    isNew: true,
    github: null,
    homepage: "https://hcompany.ai/surfer-2",
  },
  {
    agent: "Magnitude",
    organization: "Magnitude",
    webVoyager: {
      score: "93.9%",
      source: "https://github.com/magnitudedev/webvoyager",
    },
    isNew: false,
    github: "https://github.com/magnitudedev/browser-agent?tab=readme-ov-file",
    homepage: "https://magnitude.run",
  },
  {
    agent: "Aime Browser-USE",
    organization: "Aime",
    webVoyager: {
      score: "92.34%",
      source: "https://arxiv.org/pdf/2507.11988",
    },
    isNew: true,
    github: "https://github.com/Aime-Browser-USE/Aime-Browser-USE.github.io",
    homepage: "https://aime-browser-use.github.io/",
  },
  {
    agent: "Surfer-H + Holo1",
    organization: "H Company",
    webVoyager: {
      score: "92.2%",
      source: "https://arxiv.org/pdf/2506.02865",
    },
    isNew: true,
    github: null,
    homepage: "https://hcompany.ai",
  },
  {
    agent: "Browserable",
    organization: "Browserable",
    webVoyager: {
      score: "90.4%",
      source: "https://www.browserable.ai/blog/web-voyager-benchmark",
    },
    isNew: true,
    github: "https://github.com/browserable/browserable",
    homepage: "https://www.browserable.ai",
  },
  {
    agent: "Browser Use",
    organization: "Browser Use",
    webVoyager: {
      score: "89.1%",
      source: "https://browser-use.com/posts/sota-technical-report",
    },
    isNew: false,
    github: "https://github.com/browser-use/browser-use",
    homepage: "https://browser-use.com",
  },
  {
    agent: "Operator",
    organization: "OpenAI",
    webVoyager: {
      score: "87%",
      source: "https://openai.com/index/computer-using-agent/",
    },
    isNew: false,
    github: null,
    homepage: "https://operator.chatgpt.com/",
  },
  {
    agent: "Skyvern 2.0",
    organization: "Skyvern",
    webVoyager: {
      score: "85.85%",
      source:
        "https://blog.skyvern.com/skyvern-2-0-state-of-the-art-web-navigation-with-85-8-on-webvoyager-eval/",
    },
    isNew: false,
    github: "https://github.com/Skyvern-AI/Skyvern",
    homepage: "https://www.skyvern.com",
  },
  {
    agent: "Project Mariner",
    organization: "Google",
    webVoyager: {
      score: "83.5%",
      source: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/google-gemini-ai-update-december-2024/#project-mariner",
    },
    github: null,
    homepage: "https://deepmind.google/technologies/project-mariner/",
  },
  {
    agent: "Agent-E",
    organization: "Emergence AI",
    webVoyager: {
      score: "73.1%",
      source: "https://www.emergence.ai/blog/agent-e-sota",
    },
    github: null,
    homepage: "https://www.emergence.ai",
  },
    {
    agent: "Proxy Lite",
    organization: "Convergence AI",
    webVoyager: {
      score: "72.4%",
      source: "https://huggingface.co/datasets/convergence-ai/WebVoyager2025Valid",
    },
    github: null,
    homepage: "https://www.convergencelabs.uk/",
  },
  {
    agent: "WebSight",
    organization: "Academic Research",
    webVoyager: {
      score: "68%",
      source: "https://arxiv.org/pdf/2508.16987",
    },
    github: null,
    homepage: "https://arxiv.org/abs/2508.16987",
  },
  {
    agent: "Runner H 0.1",
    organization: "H Company",
    webVoyager: {
      score: "67%",
      source: "https://hcompany.ai/charting-a-new-route-the-tech-behind-runner-hs-state-of-the-art-results",
    },
    github: null,
    homepage: "https://hcompany.ai/put-ai-to-work-for-you-with-runner-h",
  },
  {
    agent: "WebVoyager",
    organization: "Academic Research",
    webVoyager: {
      score: "59.1%",
      source: "https://arxiv.org/abs/2401.13919",
    },
    github: "https://github.com/MinorJerry/WebVoyager",
    homepage: "https://github.com/MinorJerry/WebVoyager",
  },
   {
    agent: "WILBUR",
    organization: "Academic Research",
    webVoyager: {
      score: "53%",
      source: "https://arxiv.org/abs/2404.05902",
    },
    github: null,
    homepage: "https://arxiv.org/abs/2404.05902",
  },
];