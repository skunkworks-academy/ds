---
id: 12-week-sprint
title: 12-Week Applied Sprint
sidebar_label: 12-Week Sprint
---

# 12-Week Applied Sprint

<div className="idr-badges"><span className="idr-badge">3–4 hours weekly</span><span className="idr-badge">On-the-job aligned</span><span className="idr-badge">Evidence required</span><span className="idr-badge">Fortnightly mentor review</span></div>

This sprint is the execution layer of Desh's 12-month IDR. It is designed for a senior practitioner: theory is intentionally short, and each week ends with evidence that can be reviewed, improved and reused in the portfolio.

<div className="button-row"><a className="button button--primary" href="/#workspace">Track sprint progress</a><a className="button button--secondary" href="/downloads/desh-idr-12-week-calendar.ics">Download calendar</a><a className="button button--secondary" href="/idr/complete-idr/">Open complete IDR</a></div>

## How to use each week

1. **Learn** — read the listed primary vendor/standards material.
2. **Design** — write the architecture/security decision before touching a tool.
3. **Build** — use an authorised sandbox, lab tenant, local VM or synthetic dataset.
4. **Evidence** — capture a README, diagram, decision log, tests and safe screenshots where useful.
5. **Review** — answer mentor feedback and update the artefact rather than treating comments as final.

## Sprint map

| Week | Focus | Learning module | Practical output | Acceptance signal |
|---:|---|---|---|---|
| 1 | Baseline & architecture | Senior-role gap analysis, architecture principles, Git workflow | Capability matrix and ADR template | Mentor agrees priorities and evidence standard |
| 2 | Identity & Zero Trust | Entra, MFA, Conditional Access, identity lifecycle | Synthetic identity and access reference design | Clear personas, controls, exceptions and break-glass model |
| 3 | Endpoint security | Intune, Defender, compliance, attack-surface reduction | Secure endpoint baseline and exception model | Baseline is testable and exceptions have ownership/expiry |
| 4 | SOC & SIEM | Sentinel, Defender XDR, KQL, ATT&CK, incident lifecycle | Detection rules, triage worksheet and SOC scorecard | Detections map to threats and have false-positive handling |
| 5 | Incident response | Severity, evidence, containment, recovery, communications | Tabletop runbook for simulated endpoint compromise | Timeline, decisions, communications and lessons learned are complete |
| 6 | PowerShell automation | Idempotence, validation, logging, error handling | Tested administration automation using safe data | Safe defaults, test evidence and rollback guidance |
| 7 | GitHub & secure delivery | Git, PRs, Actions, least privilege, secret hygiene | CI validation workflow for automation/IaC | Workflow uses minimum permissions and no embedded secrets |
| 8 | Infrastructure as Code | Bicep/Terraform, state, modules, guardrails | Reproducible non-production baseline | Build and teardown are documented and repeatable |
| 9 | Cloud governance | Landing zones, policy, tagging, cost, resilience | Azure-first governance blueprint with AWS comparison | Governance decisions have owners, policy intent and metrics |
| 10 | Risk & compliance | Risk register, control mapping, exceptions, evidence | Risk register and control-to-evidence matrix | Risks translate into clear business decisions |
| 11 | Strategic leadership | Business case, roadmap, budget assumptions, stakeholders | Executive security-modernisation brief | Decision request, value, risk and roadmap are clear |
| 12 | Capstone & career conversion | Portfolio review, presentation, interview stories | 10-minute architecture presentation and 90-day next-step plan | Evidence supports a senior technical/management interview |

## Week 1 — Baseline, architecture and evidence discipline

**Objectives**
- translate existing enterprise experience into a current capability baseline;
- select one primary role target and one secondary pathway;
- define the evidence standard for all later work;
- establish GitHub issue, branch, pull-request and review discipline.

**Learning references**
- Azure Architecture Center: https://learn.microsoft.com/azure/architecture/
- Azure Well-Architected Framework: https://learn.microsoft.com/azure/well-architected/
- GitHub Skills: https://skills.github.com/

**Practical exercise**
Create a capability matrix with columns for current strength, evidence, target level, gap, 90-day action and mentor note. Add an Architecture Decision Record template containing context, decision, alternatives, consequences, security impact, operational impact and review date.

**Evidence required**
`capability-matrix.md`, `adr-template.md`, one completed ADR and the first mentor review note.

## Week 2 — Identity and Zero Trust

**Objectives**
- model identities, devices, applications and privileged roles;
- apply least privilege, MFA and Conditional Access concepts;
- define lifecycle, exception and emergency-access controls.

**Learning references**
- Microsoft Zero Trust guidance: https://learn.microsoft.com/security/zero-trust/
- Microsoft Entra documentation: https://learn.microsoft.com/entra/
- SC-300 study guide: https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-300

**Practical exercise**
Design a synthetic organisation with administrators, standard users, contractors and service/workload identities. Document authentication methods, Conditional Access intent, privileged role handling, external collaboration, break-glass controls and identity-governance lifecycle.

**Evidence required**
Architecture diagram, policy matrix, exception register, two ADRs and one threat/abuse-case note.

## Week 3 — Endpoint security engineering

**Objectives**
- convert endpoint experience into an explicit engineering baseline;
- link compliance, configuration, attack-surface reduction and monitoring;
- define controlled exception handling.

**Learning references**
- Microsoft Intune documentation: https://learn.microsoft.com/mem/intune/
- Microsoft Defender for Endpoint: https://learn.microsoft.com/defender-endpoint/
- MD-102 study guide: https://learn.microsoft.com/credentials/certifications/resources/study-guides/md-102

**Practical exercise**
Produce a secure Windows endpoint baseline covering enrolment, compliance, update rings, endpoint protection, attack-surface reduction, local admin strategy, device health, reporting and exception handling.

**Evidence required**
Baseline document, compliance matrix, exception workflow, validation checklist and safe lab screenshots.

## Week 4 — SOC, SIEM and detection engineering

**Objectives**
- understand security monitoring as an engineered service;
- map detection intent to MITRE ATT&CK;
- use KQL concepts for investigation and hunting;
- measure detection quality and operational effectiveness.

**Learning references**
- Microsoft Sentinel: https://learn.microsoft.com/azure/sentinel/
- Microsoft Defender XDR: https://learn.microsoft.com/defender-xdr/
- Kusto Query Language: https://learn.microsoft.com/kusto/query/
- MITRE ATT&CK: https://attack.mitre.org/
- SC-200 study guide: https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-200

**Practical exercise**
Using synthetic events, define at least three detections. For each: threat hypothesis, data source, ATT&CK mapping, query/pseudocode, severity, triage steps, false positives, escalation and test method.

**Evidence required**
Detection pack, triage worksheet, SOC scorecard and one investigation narrative.

## Week 5 — Incident response and operational resilience

**Objectives**
- structure incident handling from detection through lessons learned;
- separate containment decisions from recovery decisions;
- communicate clearly to technical and business stakeholders.

**Learning references**
- NIST Cybersecurity Framework 2.0: https://www.nist.gov/cyberframework
- CISA incident-response resources: https://www.cisa.gov/topics/cyber-threats-and-advisories/incident-response

**Practical exercise**
Run a tabletop for a simulated endpoint compromise. Record assumptions, timeline, evidence sources, containment options, business impact, communications, recovery criteria and post-incident actions.

**Evidence required**
Incident runbook, timeline, stakeholder update, decision log and lessons-learned report.

## Week 6 — PowerShell automation quality

**Objectives**
- move from scripting to maintainable automation;
- implement input validation, logging, idempotence and safe defaults;
- document permissions, failure modes and rollback.

**Learning references**
- PowerShell documentation: https://learn.microsoft.com/powershell/
- Pester: https://pester.dev/

**Practical exercise**
Automate one safe administrative or reporting task against local/synthetic data. Include `-WhatIf` or equivalent preview behaviour where appropriate, clear exit states and tests.

**Evidence required**
Script/module, tests, sample output, runbook and rollback note.

## Week 7 — GitHub and secure delivery

**Objectives**
- use source control as an engineering control;
- understand workflow permissions and secret hygiene;
- validate automation/IaC before merge.

**Learning references**
- GitHub Actions: https://docs.github.com/actions
- GitHub Actions security: https://docs.github.com/actions/security-for-github-actions
- GitHub Skills: https://skills.github.com/

**Practical exercise**
Build a workflow that lints/tests the Week 6 automation or validates an IaC project. Set explicit minimum permissions, avoid hard-coded secrets and document the failure/review path.

**Evidence required**
Workflow file, successful and failed test evidence, permissions rationale and PR review.

## Week 8 — Infrastructure as Code

**Objectives**
- express infrastructure decisions as repeatable code;
- understand modules, variables, state and environment separation;
- build teardown/recovery into the lab design.

**Learning references**
- Azure Bicep: https://learn.microsoft.com/azure/azure-resource-manager/bicep/
- Terraform documentation: https://developer.hashicorp.com/terraform

**Practical exercise**
Build a small non-production baseline using Bicep or Terraform. Include naming/tagging, least privilege, network considerations, logging intent and teardown instructions.

**Evidence required**
IaC source, README, validation output, architecture diagram and teardown proof.

## Week 9 — Cloud governance and hybrid architecture

**Objectives**
- connect architecture to policy, ownership, cost and resilience;
- compare Azure-first controls with AWS equivalents;
- define guardrails rather than one-off configurations.

**Learning references**
- Azure Well-Architected Framework: https://learn.microsoft.com/azure/well-architected/
- Azure Architecture Center: https://learn.microsoft.com/azure/architecture/
- AWS Well-Architected: https://aws.amazon.com/architecture/well-architected/
- AWS Skill Builder: https://skillbuilder.aws/

**Practical exercise**
Create a governance blueprint covering tenant/subscription/account structure, identity, network, logging, tagging, policy, backup/recovery, cost, change and incident ownership.

**Evidence required**
Governance blueprint, Azure/AWS comparison table, RACI and three architecture decisions.

## Week 10 — Risk, controls and evidence

**Objectives**
- translate technical exposure into risk language;
- map controls to evidence and owners;
- define exception and review processes.

**Learning references**
- NIST CSF 2.0: https://www.nist.gov/cyberframework
- CIS Controls: https://www.cisecurity.org/controls
- Microsoft Cloud Security Benchmark: https://learn.microsoft.com/security/benchmark/azure/

**Practical exercise**
Create a risk register with at least five risks. Map each to controls, owner, evidence, residual risk, treatment decision and review date.

**Evidence required**
Risk register, control-to-evidence matrix and one executive decision memo.

## Week 11 — Strategic IT and security leadership

**Objectives**
- communicate architecture as a business decision;
- build a staged roadmap with assumptions and dependencies;
- present cost/risk/value trade-offs without hiding uncertainty.

**Practical exercise**
Write an executive modernisation brief for a synthetic organisation: current state, priority risks, target state, 90/180/365-day roadmap, budget assumptions, dependencies, KPIs, governance and decision request.

**Evidence required**
Executive brief, one-page roadmap, stakeholder map and presentation deck/outline.

## Week 12 — Capstone and career conversion

**Objectives**
- consolidate evidence into a coherent senior-level story;
- demonstrate architecture, security, automation, governance and leadership;
- convert projects into interview-ready examples.

**Practical exercise**
Present a 10-minute architecture/security-modernisation walkthrough to the mentor. Build four STAR/architecture interview stories tied directly to portfolio evidence and create a 90-day continuation plan.

**Evidence required**
Presentation, portfolio index, mentor scorecard, four interview stories and next-90-day plan.

## Completion and scoring rule

A week is complete only when Desh can **explain the decision, demonstrate the evidence, document limitations, protect confidential information and respond to review feedback**.

Use the [Goals & KPIs](/idr/kpis/) and [Curriculum](/idr/curriculum/) pages for the formal scoring model. Use the [References](/idr/references/) page for the full source register.
