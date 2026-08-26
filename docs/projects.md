---
id: projects
title: Portfolio Projects
sidebar_label: Portfolio Projects
---

# Portfolio Projects

The portfolio is the proof layer of the IDR. It should show architecture, security reasoning, automation quality, governance and communication—not just product screenshots.

## Standard project structure

```text
project-name/
├── README.md
├── architecture/
├── src-or-config/
├── tests/
├── evidence/
├── references.md
├── SECURITY.md
└── mentor-review.md
```

Every project must state the authorised scope, data boundary, assumptions, limitations and what was deliberately excluded for privacy/security reasons.

## Project 1 — SOC Detection Pack

**Purpose:** demonstrate detection engineering and SOC decision quality.

**Required content**
- at least three threat hypotheses;
- required data sources;
- MITRE ATT&CK mapping;
- KQL query, pseudo-query or analytics logic;
- severity and triage process;
- false-positive handling;
- escalation/containment guidance;
- test cases and expected outcomes;
- SOC metrics.

**Acceptance gate**
A reviewer can explain what threat is being detected, why the telemetry supports it, how the detection is tested and what happens after an alert.

## Project 2 — Zero Trust Reference Architecture

**Purpose:** demonstrate end-to-end access/security architecture.

**Required content**
- user, privileged, contractor and workload identity model;
- authentication/MFA intent;
- Conditional Access policy model;
- endpoint/device trust;
- applications/data/network considerations;
- privileged access and break-glass;
- logging/monitoring;
- exception and lifecycle process;
- architecture decisions and trade-offs.

**Acceptance gate**
The architecture is coherent across identity, endpoint, application, network and data boundaries and does not rely on one product feature as the entire Zero Trust strategy.

## Project 3 — Secure Endpoint Engineering Baseline

**Purpose:** convert endpoint-management experience into a governed engineering standard.

**Required content**
- enrolment/join model;
- compliance and configuration intent;
- Defender/attack-surface reduction controls;
- updates and servicing;
- local admin / privilege strategy;
- monitoring/reporting;
- exception/expiry model;
- operating KPIs;
- validation checklist.

**Acceptance gate**
Another engineer can understand how the endpoint baseline is applied, verified, supported and safely excepted.

## Project 4 — Infrastructure-as-Code Baseline

**Purpose:** demonstrate repeatable cloud infrastructure and governance.

**Required content**
- Bicep or Terraform source;
- modules/parameters/variables;
- naming/tagging;
- identity/network/security intent;
- logging/monitoring intent;
- validation pipeline;
- teardown/recovery guidance;
- cost boundary;
- architecture diagram.

**Acceptance gate**
The environment can be validated and reproduced in a safe non-production context, and teardown is documented.

## Project 5 — Automation & Compliance Toolkit

**Purpose:** demonstrate safe infrastructure automation and operational quality.

**Required content**
- two or more PowerShell utilities or one structured module;
- input validation;
- least required permissions;
- logging;
- tests;
- safe preview/dry-run where appropriate;
- failure handling;
- rollback/recovery;
- documentation and sample safe outputs.

**Acceptance gate**
Automation is testable, supportable and safe by default rather than a collection of ad-hoc scripts.

## Project 6 — Strategic Security Modernisation Brief

**Purpose:** demonstrate senior technical leadership and business communication.

**Required content**
- synthetic/current-state problem statement;
- priority risks and assumptions;
- target architecture;
- 90/180/365-day roadmap;
- dependencies and decision points;
- budget/effort assumptions;
- KPIs and governance;
- stakeholder/RACI view;
- decision request;
- 10-minute presentation.

**Acceptance gate**
An executive reviewer can understand the problem, trade-offs, roadmap, value, risk and decision required without reading the entire technical appendix.

## Portfolio quality gate

Each project must contain:

- clear README and objective;
- architecture or workflow diagram;
- authorised scope and privacy boundary;
- tests or validation evidence;
- security/risk notes;
- references with access dates;
- limitations and lessons learned;
- mentor review and response;
- link to the relevant IDR KPI(s).

## Portfolio scoring

Use the [Curriculum rubric](/idr/curriculum/). A project should normally reach **4/5** in its primary capability dimensions before it is treated as interview-ready.
