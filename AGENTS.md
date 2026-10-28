# Synthetic AI Engineering Lab — Agent Rules

This repository is public and synthetic-only. All examples, source code, fixtures and tests are invented solely for development evaluation.

- Do not copy in private repositories, CPB AI governance files, credentials, personal information, military data, CUI, tenant data or external production code.
- Stay within the exact issue and its target files. Do not modify unrelated modules.
- Write tests that fail before the fix and pass after it. Record the command and exact Git commit.
- Work on a topic branch; open a draft pull request. Do not push directly to main, enable auto-merge, or deploy.
- Treat any provider-generated explanation as evidence, not independent acceptance.
- If blocked by authorization, account sign-in, tooling or tests, report the blocker and stop. No unbounded retries.

All PRs require separately verified acceptance.

## Synthetic minimal-complete rule-consumption canary

This section is original, public, synthetic-lab guidance. It contains no private policy text and grants no execution authority.

- **Reuse first:** inspect the exercise's existing implementation and tests before editing. Prefer the existing code and JavaScript standard library over new helpers, packages, frameworks, or unrelated abstractions.
- **Smallest complete change:** keep existing exports and contracts intact; address the requested edge case and an adverse or negative case without deleting validation or failure handling.
- **Evidence receipt:** in the agent's native activity response and draft PR summary, report the exact `AGENTS.md` blob SHA observed in the working tree (`git hash-object AGENTS.md`), the phrase `LAB-MINCOMPLETE-REUSE-FIRST-20261028-R1`, the reuse-versus-add decision, a targeted failing-before/passing-after test, and any checks not run. Never invent commands or results.
- **Independent acceptance:** the self-reported receipt is a test signal, not proof by itself. An independent read must match the claimed blob to the intended commit, inspect provider-native activities and the actual diff, and verify exact-head tests. A session created against an earlier commit is not evidence of this rule's consumption.
