---
id: resources
title: Learning Resources
sidebar_label: Resources
---

# Learning Resources

This page is the practical learning launcher for Desh's IDR. Use primary vendor documentation and primary standards first; use third-party material only as supplementary explanation.

<div className="resource-grid">
<div className="resource-card"><h3>Microsoft Learn</h3><p>Azure, security, identity, endpoint, automation and architecture learning.</p><a href="https://learn.microsoft.com/training/">Open Microsoft Learn →</a></div>
<div className="resource-card"><h3>Azure Architecture Center</h3><p>Reference architectures, design patterns and workload guidance.</p><a href="https://learn.microsoft.com/azure/architecture/">Open Architecture Center →</a></div>
<div className="resource-card"><h3>Microsoft Zero Trust</h3><p>Identity, endpoint, application, network, data and infrastructure Zero Trust guidance.</p><a href="https://learn.microsoft.com/security/zero-trust/">Open Zero Trust guidance →</a></div>
<div className="resource-card"><h3>Microsoft Sentinel</h3><p>SIEM, analytics, incident, hunting and automation documentation.</p><a href="https://learn.microsoft.com/azure/sentinel/">Open Sentinel docs →</a></div>
<div className="resource-card"><h3>GitHub Skills</h3><p>Hands-on Git, pull request and Actions learning.</p><a href="https://skills.github.com/">Open GitHub Skills →</a></div>
<div className="resource-card"><h3>AWS Skill Builder</h3><p>Cross-cloud architecture and security learning.</p><a href="https://skillbuilder.aws/">Open AWS Skill Builder →</a></div>
<div className="resource-card"><h3>Cisco Networking Academy</h3><p>Networking and cybersecurity reinforcement.</p><a href="https://www.netacad.com/">Open Cisco learning →</a></div>
<div className="resource-card"><h3>MITRE ATT&CK</h3><p>Threat-technique mapping for SOC and detection engineering.</p><a href="https://attack.mitre.org/">Open ATT&CK →</a></div>
<div className="resource-card"><h3>NIST CSF 2.0</h3><p>Governance and cybersecurity risk-management framework.</p><a href="https://www.nist.gov/cyberframework">Open NIST CSF →</a></div>
<div className="resource-card"><h3>CIS Controls</h3><p>Prioritised cybersecurity safeguards and implementation guidance.</p><a href="https://www.cisecurity.org/controls">Open CIS Controls →</a></div>
<div className="resource-card"><h3>OWASP</h3><p>Application/API security references for broader architecture decisions.</p><a href="https://owasp.org/">Open OWASP →</a></div>
<div className="resource-card"><h3>Terraform</h3><p>Infrastructure-as-Code language, workflows, state and modules.</p><a href="https://developer.hashicorp.com/terraform">Open Terraform docs →</a></div>
</div>

## Resource map by IDR capability

| Capability | Primary sources | Use in IDR |
|---|---|---|
| Cloud architecture | Azure Architecture Center; Azure Well-Architected; AWS Well-Architected | Architecture decisions, resilience, cost, governance and comparison |
| Identity / Zero Trust | Microsoft Zero Trust; Microsoft Entra; SC-300 study guide | Identity reference design and access-governance evidence |
| Endpoint engineering | Microsoft Intune; Defender for Endpoint; MD-102 study guide | Endpoint baseline, compliance and exception model |
| SOC / SIEM | Microsoft Sentinel; Defender XDR; KQL; SC-200 study guide; MITRE ATT&CK | Detection engineering, triage, hunting and incident metrics |
| Incident response | NIST CSF; CISA incident-response resources | Tabletop runbook, decision sequence and lessons learned |
| Automation | Microsoft PowerShell; Pester | Safe administrative automation, testing and rollback |
| DevSecOps | GitHub Skills; GitHub Actions; GitHub Actions security | CI validation, least-privilege workflow design and review evidence |
| Infrastructure as Code | Azure Bicep; Terraform | Repeatable non-production infrastructure and governance |
| Governance / risk | NIST CSF; CIS Controls; Microsoft Cloud Security Benchmark | Risk register, control matrix, exceptions and evidence |
| Application/API security | OWASP Top 10; OWASP ASVS | Broader architecture/security-awareness references |
| Strategic leadership | IDR assignments + mentor rubric + architecture evidence | Business case, roadmap, executive communication and role conversion |

## Microsoft platform resources

### Architecture and cloud

- Azure Architecture Center — https://learn.microsoft.com/azure/architecture/
- Azure Well-Architected Framework — https://learn.microsoft.com/azure/well-architected/
- Azure landing zones — https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/
- Azure governance documentation — https://learn.microsoft.com/azure/governance/
- Azure Monitor — https://learn.microsoft.com/azure/azure-monitor/

### Identity and Zero Trust

- Microsoft Zero Trust — https://learn.microsoft.com/security/zero-trust/
- Microsoft Entra — https://learn.microsoft.com/entra/
- Conditional Access — https://learn.microsoft.com/entra/identity/conditional-access/
- Identity Governance — https://learn.microsoft.com/entra/id-governance/
- SC-300 study guide — https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-300

### Endpoint security

- Microsoft Intune — https://learn.microsoft.com/mem/intune/
- Microsoft Defender for Endpoint — https://learn.microsoft.com/defender-endpoint/
- Windows security — https://learn.microsoft.com/windows/security/
- MD-102 study guide — https://learn.microsoft.com/credentials/certifications/resources/study-guides/md-102

### SOC and security operations

- Microsoft Sentinel — https://learn.microsoft.com/azure/sentinel/
- Microsoft Defender XDR — https://learn.microsoft.com/defender-xdr/
- Microsoft Defender for Cloud — https://learn.microsoft.com/azure/defender-for-cloud/
- Kusto Query Language — https://learn.microsoft.com/kusto/query/
- SC-200 certification — https://learn.microsoft.com/credentials/certifications/security-operations-analyst/
- SC-200 study guide — https://learn.microsoft.com/credentials/certifications/resources/study-guides/sc-200

### Azure administration and infrastructure security

- Azure Administrator certification — https://learn.microsoft.com/credentials/certifications/azure-administrator/
- AZ-104 study guide — https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-104
- Azure Security Engineer / AZ-500 reference — https://learn.microsoft.com/credentials/certifications/azure-security-engineer/

:::warning AZ-500 retirement
Microsoft states that **Azure Security Engineer Associate / AZ-500 retires on 31 August 2026**. It may still be used as a short-term skills reference, but it should not be treated as a long-term exam target unless Desh and the mentor deliberately complete it before retirement. Use Microsoft's current credential catalogue to select a successor/applied-skills path after retirement.
:::

### Automation and IaC

- PowerShell — https://learn.microsoft.com/powershell/
- Azure Bicep — https://learn.microsoft.com/azure/azure-resource-manager/bicep/
- Azure CLI — https://learn.microsoft.com/cli/azure/
- Pester — https://pester.dev/

## GitHub and secure delivery resources

- GitHub Skills — https://skills.github.com/
- GitHub Actions — https://docs.github.com/actions
- Security for GitHub Actions — https://docs.github.com/actions/security-for-github-actions
- Managing workflow permissions — https://docs.github.com/actions/security-for-github-actions/security-guides/automatic-token-authentication
- OpenID Connect in Actions — https://docs.github.com/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect

## Cross-cloud and networking resources

- AWS Skill Builder — https://skillbuilder.aws/
- AWS Well-Architected — https://aws.amazon.com/architecture/well-architected/
- AWS Security — https://docs.aws.amazon.com/security/
- Cisco Networking Academy — https://www.netacad.com/

## Security frameworks and standards

- NIST Cybersecurity Framework 2.0 — https://www.nist.gov/cyberframework
- NIST Computer Security Resource Center — https://csrc.nist.gov/
- CIS Controls — https://www.cisecurity.org/controls
- MITRE ATT&CK — https://attack.mitre.org/
- CISA Secure by Design — https://www.cisa.gov/securebydesign
- CISA Incident Response — https://www.cisa.gov/topics/cyber-threats-and-advisories/incident-response
- OWASP Top 10 — https://owasp.org/www-project-top-ten/
- OWASP ASVS — https://owasp.org/www-project-application-security-verification-standard/

## Resource-use rule

For every portfolio artefact, Desh should record:

1. source title and URL;
2. access date;
3. which decision or control the source informed;
4. what was implemented or demonstrated;
5. limitations, assumptions and anything deliberately not implemented.

External sources support the IDR; they do not replace evidence. A course, article or certification objective counts only when it results in a working lab, reviewed architecture, tested automation, documented decision or other accepted evidence.
