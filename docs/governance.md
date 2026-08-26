---
id: governance
title: Security, Privacy and Learning Governance
sidebar_label: Governance
---

# Security, Privacy and Learning Governance

## Public repository rules

- Use synthetic or expressly authorised data.
- Never commit secrets, passwords, tokens, private keys or production credentials.
- Do not publish employer architecture, customer information, internal hostnames, IP inventories or unredacted security logs.
- Use screenshots only when all identifying details have been removed.
- Test offensive or detection techniques only in authorised lab environments.
- Document assumptions, limitations, rollback and evidence sources.

## Responsible AI

AI may assist with explanation, drafting, code review or test generation, but Desh must validate technical claims and remain accountable for architecture and security decisions. Do not paste confidential enterprise content into unapproved AI services.

## Evidence classification

| Class | Example | Public repository? |
|---|---|---|
| Public | Synthetic lab architecture | Yes |
| Internal | Generic work-process learning notes | Only if expressly approved |
| Confidential | Enterprise logs, customer data, production diagrams | No |
| Secret | Credentials, keys, tokens | Never |
