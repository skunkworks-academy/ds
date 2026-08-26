---
id: assignments
title: Assignments
sidebar_label: Assignments
---

# Assignments

Assignments test reasoning, communication and evidence quality. They are intentionally shorter than the portfolio projects and should normally fit into one or two focused work sessions.

## Assignment 1 — Senior capability baseline

**Task**
Produce a one-page matrix with:

- capability area;
- current strength;
- evidence already available;
- target level;
- gap;
- 90-day action;
- mentor note.

**Required areas:** cloud architecture, identity, endpoint, SOC/IR, automation, IaC, governance/risk, resilience, strategic communication.

**Success criteria**
- gaps are specific rather than generic;
- the 90-day action produces evidence;
- at least one existing strength is deliberately reused in the plan;
- mentor agrees the primary role target and top three gaps.

## Assignment 2 — Architecture Decision Record set

**Task**
Write three ADRs covering:

1. identity/access;
2. endpoint/security baseline;
3. logging/detection/monitoring.

Each ADR must contain context, decision, alternatives, trade-offs, security impact, operational impact, cost/complexity notes and review date.

**Success criteria**
A reviewer can see why the decision was made and what would cause it to be revisited.

## Assignment 3 — Security operations scorecard

Define a concise scorecard with at least:

- detection coverage;
- mean time to acknowledge;
- mean time to contain;
- false-positive rate;
- telemetry/asset coverage;
- incident recurrence;
- lessons-learned completion;
- detection-test success rate.

For each metric specify formula, data source, owner, review cadence and what decision it informs.

## Assignment 4 — Automation quality review

Take one PowerShell automation and document:

- objective and scope;
- required permissions;
- inputs and validation;
- outputs and logging;
- test cases;
- failure modes;
- safe defaults / preview behaviour;
- rollback;
- security/privacy considerations;
- known limitations.

**Success criteria**
The automation is not accepted merely because it works once; it must be understandable, testable and safe to operate.

## Assignment 5 — Risk-to-business translation

Convert five technical risks into executive language. For each include:

- scenario and affected business capability;
- likelihood and impact rationale;
- current controls;
- residual risk;
- owner;
- treatment options;
- cost/effort assumption;
- decision required;
- evidence and review date.

Use NIST CSF / CIS Controls as organising references where useful, not as a substitute for context-specific reasoning.

## Assignment 6 — Leadership retrospective

Document one project or simulated capstone using:

- context;
- goal and constraints;
- stakeholder map;
- decision(s) made;
- implementation approach;
- outcome/evidence;
- communication approach;
- what changed because of the work;
- what you would do differently;
- one knowledge-sharing outcome.

Convert the same material into one interview-ready STAR/architecture story.

## Submission format

Each assignment should be stored as Markdown/PDF in the relevant project repository or evidence folder with:

```text
assignment-N-name/
├── README.md
├── evidence/
├── references.md
└── mentor-review.md
```

## Scoring

Assignments use the [Curriculum](/idr/curriculum/) rubric:

- technical/architectural quality — 25%;
- security/risk reasoning — 20%;
- automation/reproducibility — 15%;
- testing/evidence — 15%;
- business impact/communication — 15%;
- leadership/reflection — 10%.

**Pass:** 75%  
**Distinction:** 90%

Mentor feedback must be answered in the next revision rather than stored as passive comments.
