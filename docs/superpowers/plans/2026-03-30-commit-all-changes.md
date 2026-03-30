# Commit All Changes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Commit all pending changes in the Bolus-Website repository with a descriptive message after ensuring the build and tests pass.

**Architecture:** Use git CLI to stage and commit changes.

**Tech Stack:** Git

---

### Task 1: Final Verification

**Files:**
- N/A

- [ ] **Step 1: Check git status**
Run: `git status`
Expected: See all modified and untracked files.

- [ ] **Step 2: Run astro check**
Run: `npm --prefix site run check`
Expected: Exit code 0 (no errors).

- [ ] **Step 3: Run vitest**
Run: `npm --prefix site test`
Expected: All tests pass.

### Task 2: Commit Changes

**Files:**
- Modify: All pending changes in `Bolus Website`

- [ ] **Step 1: Stage all changes**
Run: `git add .`

- [ ] **Step 2: Verify staged changes**
Run: `git status`
Expected: All relevant files are staged.

- [ ] **Step 3: Commit with descriptive message**
Run: `git commit -m "feat: implement section 4 pinned workflow and section 5 export sections"`

- [ ] **Step 4: Verify commit**
Run: `git log -n 1`
Expected: See the new commit.
