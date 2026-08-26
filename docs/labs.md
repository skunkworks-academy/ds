---
id: labs
title: Hands-On Labs
sidebar_label: Labs
---

# Hands-On Labs

All labs must use **authorised lab tenants, local virtual machines, sandbox services or synthetic datasets**. The purpose is to demonstrate safe engineering judgement, not to reproduce an employer or customer environment.

## Standard lab evidence template

Every lab repository/document should contain:

1. objective and learning outcome;
2. authorised scope and data boundary;
3. architecture/flow diagram;
4. prerequisites and assumptions;
5. implementation steps;
6. test plan and test results;
7. sanitised screenshots where they add evidence;
8. risks, failure modes and rollback;
9. lessons learned and next improvement;
10. source/reference list with access dates.

## Lab 1 — Zero Trust identity design

**Goal:** convert identity experience into an explicit Zero Trust architecture.

**Build**
- create a synthetic organisation and role/persona model;
- define standard, privileged, contractor and workload identities;
- design MFA/authentication-method intent;
- define Conditional Access policy intent and exclusions;
- document break-glass access, privileged role lifecycle and external collaboration;
- create an exception/expiry process.

**Evidence**
Identity architecture diagram, control matrix, break-glass design, exception register and two ADRs.

**Primary references**
- https://learn.microsoft.com/security/zero-trust/
- https://learn.microsoft.com/entra/
- https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-300

**Acceptance criteria**
A reviewer can identify who gets access, under which conditions, how elevated access is controlled, how exceptions expire and how failures are recovered.

## Lab 2 — Secure endpoint baseline

**Goal:** design a governed Windows endpoint baseline rather than a list of settings.

**Build**
- model enrolment/join state;
- define compliance and configuration policy intent;
- define Defender for Endpoint and attack-surface reduction controls;
- specify update rings, local-admin approach and device health;
- create an exception and rollback workflow;
- define reporting/KPIs.

**Evidence**
Endpoint baseline, validation checklist, exception workflow, sample synthetic device records and compliance scorecard.

**Primary references**
- https://learn.microsoft.com/mem/intune/
- https://learn.microsoft.com/defender-endpoint/
- https://learn.microsoft.com/credentials/certifications/resources/study-guides/md-102

## Lab 3 — SOC detection engineering

**Goal:** show how detections are designed, tested and operated.

**Build**
- define three threat hypotheses;
- identify required synthetic telemetry;
- map each to MITRE ATT&CK;
- write a KQL query, pseudo-query or analytics rule concept;
- define severity, triage, escalation and false-positive handling;
- test expected and benign cases.

**Evidence**
Detection pack, ATT&CK mapping, query/pseudocode, test cases, triage worksheet and SOC scorecard.

**Primary references**
- https://learn.microsoft.com/azure/sentinel/
- https://learn.microsoft.com/defender-xdr/
- https://learn.microsoft.com/kusto/query/
- https://attack.mitre.org/

## Lab 4 — Incident-response tabletop

**Goal:** demonstrate decision quality during a simulated endpoint compromise.

**Scenario**
A synthetic privileged endpoint generates suspicious sign-in and execution events. No real production data is used.

**Run**
- classify the incident and state assumptions;
- build a timeline;
- identify evidence sources;
- compare containment options;
- record business/operational impact;
- define communications and recovery criteria;
- conduct a lessons-learned review.

**Evidence**
Incident runbook, timeline, decision log, stakeholder update and post-incident backlog.

**Primary references**
- https://www.nist.gov/cyberframework
- https://www.cisa.gov/topics/cyber-threats-and-advisories/incident-response

## Lab 5 — PowerShell automation

**Goal:** turn scripting into safe, supportable automation.

**Build**
- automate a local/synthetic administrative or reporting task;
- validate inputs;
- implement structured logging;
- use safe preview/`-WhatIf` behaviour where appropriate;
- handle failure explicitly;
- add Pester tests or equivalent deterministic tests;
- document permissions and rollback.

**Evidence**
Script/module, test suite, sample output, runbook, rollback and known limitations.

**Primary references**
- https://learn.microsoft.com/powershell/
- https://pester.dev/

## Lab 6 — Secure GitHub Actions

**Goal:** demonstrate CI/CD as a security and quality control.

**Build**
- create a workflow for the Week-6 automation or IaC project;
- define explicit minimum permissions;
- run lint/test/validation before merge;
- avoid hard-coded credentials;
- document secret/OIDC strategy even if the lab needs no external cloud access;
- intentionally trigger one safe failure and capture the result.

**Evidence**
Workflow file, permissions rationale, successful and failed run evidence, reviewed PR and remediation note.

**Primary references**
- https://docs.github.com/actions
- https://docs.github.com/actions/security-for-github-actions
- https://skills.github.com/

## Lab 7 — Infrastructure as Code

**Goal:** build a small reproducible non-production baseline.

**Build**
- choose Bicep or Terraform;
- define variables/parameters and naming/tagging;
- use modules where they improve clarity;
- include least-privilege/network/logging intent;
- validate the deployment plan/template;
- document teardown and cost boundaries.

**Evidence**
IaC code, README, architecture diagram, validation output and teardown proof.

**Primary references**
- https://learn.microsoft.com/azure/azure-resource-manager/bicep/
- https://developer.hashicorp.com/terraform

## Lab 8 — Hybrid-cloud governance

**Goal:** show that architecture decisions can be governed across cloud boundaries.

**Build**
Compare Azure-first and AWS-equivalent controls for:

- identity and privileged access;
- account/subscription organisation;
- network segmentation;
- logging/monitoring;
- policy/guardrails;
- backup and resilience;
- tagging and cost;
- incident ownership;
- change and exception management.

**Evidence**
Governance blueprint, comparison matrix, RACI, risk notes and three ADRs.

**Primary references**
- https://learn.microsoft.com/azure/well-architected/
- https://learn.microsoft.com/azure/architecture/
- https://aws.amazon.com/architecture/well-architected/

## Lab scoring gate

A lab is accepted only when it is safe, reproducible enough for another reviewer to follow, documents failure/rollback and can be connected to one or more IDR KPIs.
