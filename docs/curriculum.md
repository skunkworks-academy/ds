---
id: curriculum
title: Course Curriculum
sidebar_label: Curriculum
---

# Course Curriculum

The curriculum is organised around demonstrable senior capability. Each module combines primary references, a practical exercise and assessment evidence.

## Module map

| Module | Core outcomes | Practical assessment | Primary references |
|---|---|---|---|
| Cloud architecture | Design identity, network, compute, storage, governance, resilience and cost controls | Reference architecture + ADRs | Azure Architecture Center; Azure Well-Architected |
| Security operations | Build detection, triage, incident and metrics logic | Detection pack + incident report | Sentinel; Defender XDR; SC-200; MITRE ATT&CK |
| Zero Trust | Apply identity, endpoint, network, application and data controls | Zero Trust architecture | Microsoft Zero Trust; Entra; SC-300 |
| Endpoint engineering | Govern devices, compliance, hardening, updates and exceptions | Endpoint baseline | Intune; Defender for Endpoint; MD-102 |
| PowerShell automation | Build safe, logged, testable administration automation | Script/module + tests + runbook | PowerShell; Pester |
| GitHub & DevSecOps | Use branching, PR review, Actions, least privilege and secret hygiene | CI workflow + review evidence | GitHub Skills; GitHub Actions security |
| Infrastructure as Code | Build reusable and governed non-production infrastructure | Bicep/Terraform baseline | Bicep; Terraform |
| Risk & governance | Translate technical exposure into risks, controls and decisions | Risk register + control matrix | NIST CSF; CIS Controls; MCSB |
| Resilience | Design backup, recovery, dependencies and operational continuity | Recovery architecture + tabletop | Azure architecture/resilience guidance; NIST/CISA |
| Strategic leadership | Build business cases, roadmaps and stakeholder narratives | Executive brief + presentation | IDR rubric + evidence from prior modules |

## Module 1 — Cloud architecture

**Learning outcomes**
- produce context, logical and deployment-level architecture views;
- justify identity, network, compute, storage, monitoring and resilience decisions;
- document cost, operational ownership and failure assumptions;
- use ADRs to show alternatives and trade-offs.

**Required evidence**
- one hybrid/cloud reference architecture;
- at least three ADRs;
- resilience/failure-mode notes;
- governance and cost assumptions;
- mentor review response.

## Module 2 — Security operations

**Learning outcomes**
- define detection hypotheses and required telemetry;
- map detections to MITRE ATT&CK;
- define severity, triage, escalation and false-positive handling;
- use operational metrics to improve security outcomes rather than only count alerts.

**Required evidence**
- three or more synthetic detections;
- triage playbook;
- one simulated incident report;
- SOC scorecard with definitions and measurement method.

## Module 3 — Zero Trust

**Learning outcomes**
- model users, administrators, devices, applications, workloads and data;
- apply explicit verification, least privilege and assumed breach principles;
- define authentication, Conditional Access, privileged access, lifecycle and exceptions;
- connect identity and endpoint state to wider architecture decisions.

**Required evidence**
- Zero Trust reference architecture;
- policy/control matrix;
- break-glass and exception model;
- identity-lifecycle diagram.

## Module 4 — Endpoint engineering

**Learning outcomes**
- define managed endpoint states and measurable compliance;
- combine Intune, Defender, updates and identity controls coherently;
- design exception handling and operational ownership;
- validate hardening without making supportability invisible.

**Required evidence**
- secure endpoint baseline;
- validation checklist;
- exception process;
- compliance/operational KPIs.

## Module 5 — PowerShell automation

**Learning outcomes**
- design scripts/modules with clear inputs, outputs and permissions;
- use validation, safe defaults, logging and predictable failure handling;
- test critical behaviour;
- document rollback and operational use.

**Required evidence**
- one tested automation project;
- test suite;
- runbook;
- sample safe output;
- permissions and rollback notes.

## Module 6 — GitHub & DevSecOps

**Learning outcomes**
- use issues, branches, PRs and review as traceable engineering controls;
- set explicit workflow permissions;
- avoid hard-coded secrets and understand safer authentication approaches;
- make tests/validation block low-quality changes.

**Required evidence**
- CI workflow;
- passing and intentionally failing run evidence;
- permissions rationale;
- reviewed PR and remediation history.

## Module 7 — Infrastructure as Code

**Learning outcomes**
- use modules/parameters/variables and environment boundaries;
- understand Terraform state or Bicep deployment behaviour;
- design safe creation and teardown;
- include governance, tagging, logging and security intent.

**Required evidence**
- Bicep or Terraform baseline;
- README and architecture diagram;
- validation output;
- teardown guidance and proof.

## Module 8 — Risk & governance

**Learning outcomes**
- write risks in business-relevant language;
- distinguish inherent and residual risk;
- map risks to controls, evidence, owners and review dates;
- document exceptions and decision authority.

**Required evidence**
- risk register;
- control-to-evidence matrix;
- exception template;
- one executive decision memo.

## Module 9 — Resilience

**Learning outcomes**
- identify critical dependencies and failure modes;
- define recovery objectives and validation approach;
- integrate backup, monitoring, security and operational ownership;
- test recovery assumptions through tabletop or safe lab simulation.

**Required evidence**
- resilience/recovery architecture;
- dependency map;
- tabletop record;
- improvement backlog.

## Module 10 — Strategic leadership

**Learning outcomes**
- translate technology change into business value and risk reduction;
- write a staged roadmap with assumptions, dependencies and decision points;
- communicate uncertainty and trade-offs;
- facilitate evidence-based mentor/stakeholder decisions.

**Required evidence**
- executive modernisation brief;
- 90/180/365-day roadmap;
- stakeholder/RACI view;
- 10-minute presentation and review notes.

## Assessment model

| Dimension | Weight | What good looks like |
|---|---:|---|
| Technical and architectural quality | 25% | Coherent design, justified trade-offs, realistic operations |
| Security and risk reasoning | 20% | Threat/risk context, least privilege, evidence, residual risk |
| Automation / reproducibility | 15% | Repeatable, safe, documented, testable implementation |
| Testing and evidence quality | 15% | Clear validation, traceability and honest limitations |
| Business impact and communication | 15% | Decision-ready language, value/risk connection, concise narrative |
| Leadership, mentoring and reflection | 10% | Feedback response, ownership, knowledge sharing and improvement |

**Pass:** 75%  
**Distinction:** 90%

A submission containing unauthorised sensitive data cannot pass until corrected and the exposure is handled appropriately.

## Evidence quality scale

| Score | Interpretation |
|---:|---|
| 1 | Incomplete, mostly descriptive, weak evidence |
| 2 | Basic working evidence with important gaps |
| 3 | Competent, reproducible evidence with clear reasoning |
| 4 | Senior-quality evidence with strong trade-offs, controls and communication |
| 5 | Exemplary evidence that can be reused, taught and defended to technical and executive reviewers |
