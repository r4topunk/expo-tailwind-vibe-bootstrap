# Project Context and Learnings

## Environment Context
```json
{
  "lastUpdate": "2025-03-25",
  "projectType": "expo-react-native",
  "nodeVersion": ">=18.0.0",
  "strictMode": true,
  "packageManager": "pnpm"
}
```

## Dependencies Analysis
```json
{
  "core": {
    "expo": {
      "version": "52.0.16",
      "reason": "Latest stable version with TypeScript support",
      "constraints": ["React Native 0.76.7", "React 18.3.1"]
    },
    "typescript": {
      "version": "5.3.3",
      "configuration": "strict",
      "noImplicitAny": true
    }
  },
  "ui": {
    "twrnc": {
      "version": "4.6.1",
      "selected": true,
      "reason": "Native Tailwind support, runtime optimized",
      "alternatives": ["nativewind"]
    },
    "shadcn": {
      "status": "research_required",
      "challenges": [
        "React Native compatibility",
        "Component adaptation needed",
        "Theme integration with twrnc"
      ]
    }
  },
  "forms": {
    "react-hook-form": {
      "version": "7.54.2",
      "integration": "zod",
      "benefits": [
        "Type-safe validation",
        "Runtime performance",
        "Native compatibility"
      ]
    }
  }
}
```

## Technical Decisions

### [DECISION:package-manager]
- CHOICE: pnpm
- STATUS: implemented
- RATIONALE: Better dependency management, disk space efficiency
- IMPACT: Development workflow, CI/CD setup
- ALTERNATIVES_CONSIDERED: ["npm", "yarn"]

### [DECISION:ui-framework]
- CHOICE: twrnc
- STATUS: implemented
- RATIONALE: Native support, performance optimizations
- CONSTRAINTS: Must work with shadcn-ui adaptation
- RISKS: Integration complexity with shadcn

### [DECISION:form-validation]
- CHOICE: react-hook-form + zod
- STATUS: implemented
- RATIONALE: Type safety, runtime validation
- BENEFITS: ["Performance", "Type inference", "Schema reuse"]

## Research Findings

### ShadCN UI Integration
```json
{
  "status": "in_progress",
  "challenges": {
    "technical": [
      "React Native component adaptation",
      "Style system integration",
      "Theme configuration"
    ],
    "workflow": [
      "Component development process",
      "Documentation standards",
      "Testing approach"
    ]
  },
  "next_steps": [
    "Create proof of concept",
    "Document adaptation patterns",
    "Establish component guidelines"
  ]
}
```

### Performance Considerations
```json
{
  "critical_areas": [
    "Component re-renders",
    "Form validation",
    "Animation performance"
  ],
  "monitoring_needs": [
    "Bundle size tracking",
    "Runtime performance metrics",
    "Memory usage patterns"
  ]
}
```

## Development Guidelines

### Component Structure
```json
{
  "patterns": {
    "organization": "feature-based",
    "naming": "PascalCase",
    "exports": "index.ts pattern"
  },
  "documentation": {
    "required": [
      "Purpose",
      "Props interface",
      "Usage examples"
    ]
  }
}
```

### Code Quality Standards
```json
{
  "typescript": {
    "strictness": "maximum",
    "banned": ["any", "{}"],
    "required": ["explicit return types"]
  },
  "testing": {
    "coverage": "80%",
    "types": ["unit", "integration", "e2e"]
  }
}
```

## Future Considerations
```json
{
  "scalability": {
    "monitoring": ["Bundle size", "Performance metrics"],
    "optimization": ["Code splitting", "Lazy loading"]
  },
  "maintenance": {
    "documentation": "Continuous updates required",
    "dependencies": "Regular audit schedule"
  }
}
```

## AI Agent Notes
- PARSE_FORMAT: JSON for structured data
- DECISION_TRACKING: Use [DECISION:name] format
- STATUS_UPDATES: Update lastUpdate in Environment Context
- DEPENDENCIES: Track in Dependencies Analysis section
- ACTION_ITEMS: Parse from Research Findings next_steps