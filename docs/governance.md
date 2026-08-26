---
id: governance
title: Governance, Privacy and Safety
sidebar_label: Governance & Safety
---

# Governance, Privacy and Safety

This IDR is public-facing learning infrastructure. The quality of the work includes how safely Desh scopes labs, handles information and publishes evidence.

## Non-negotiable evidence boundary

Do **not** publish:

- passwords, access tokens, API keys, private keys or connection strings;
- production customer or employer data;
- personal contact, financial or confidential assessment information;
- production logs containing identifiers, secrets or sensitive business information;
- architecture diagrams/configurations not explicitly approved for public disclosure;
- screenshots of private admin portals that expose tenant IDs, account details or internal hostnames;
- vulnerability details about real systems when disclosure is not authorised.

Use synthetic data, local VMs, test tenants, vendor sandboxes or expressly authorised training environments.

## Lab safety checklist

Before every lab, record:

1. owner/authorisation;
2. environment name;
3. data classification;
4. expected actions;
5. whether any action is destructive;
6. cost boundary;
7. permissions required;
8. rollback/teardown;
9. evidence that is safe to publish;
10. stop condition.

## Public repository checklist

Before pushing evidence to GitHub:

- search for secrets and tokens;
- remove private identifiers and real customer/employer names unless explicitly authorised;
- use synthetic example data;
- remove unnecessary screenshots;
- verify repository visibility;
- check commit history, not only the latest file state;
- include `SECURITY.md`/privacy notes where relevant;
- state known limitations and assumptions;
- ensure references are attributable and not copied beyond permitted usage.

## Architecture and change governance

Senior-quality work should identify:

- decision owner;
- review date;
- architecture assumptions;
- security/risk impact;
- operational support owner;
- cost/effort assumptions;
- failure/rollback path;
- evidence required to validate the decision;
- exception authority and expiry.

Use ADRs for material technical choices and a risk register for material uncertainty/exposure.

## Responsible security practice

All security exercises must stay within authorised systems and defined lab scope. The IDR does not require scanning, testing, accessing or changing third-party systems without permission.

For external security research:

- follow the system owner's terms and security policy;
- prefer official labs, CTFs and training sandboxes;
- stop when scope is unclear;
- never use private or customer data to make a portfolio example more realistic.

## Incident / accidental exposure process

If sensitive information is accidentally committed or published:

1. stop further sharing;
2. notify the mentor/appropriate owner;
3. revoke/rotate any exposed secret immediately;
4. remove the content from the current repository state;
5. assess whether Git history, caches or published artefacts also require cleanup;
6. document what happened and the corrective control;
7. do not treat deletion alone as sufficient when a credential or secret was exposed.

## Reference and attribution rule

Each portfolio project should include a `references.md` file containing source title, URL, access date and how the source informed the work. Primary vendor/standards sources are preferred. See the [References and Source Register](/idr/references/).

## Acceptance rule

An otherwise strong submission cannot pass while it contains unauthorised sensitive data or unclear lab authorisation. Safety/privacy correction comes before scoring the technical content.
