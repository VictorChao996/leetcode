---
name: check-day
description: Check if a specific day of the 7-day sprint is fully completed
argument-hint: "[day-number, e.g. 1]"
---

# Check Day Completion

Check whether **Day $ARGUMENTS** of the 7-day sprint is complete.

## Steps

1. **Read the plan**: Read `7-day-sprint/day$ARGUMENTS/plan.md` to understand the day's requirements — extract the list of required problems and any learning tasks.

2. **List files**: List all files in the `7-day-sprint/day$ARGUMENTS/` directory.

3. **Cross-reference**: Compare the files against the plan. For each required problem, check if a corresponding solution file exists (match by problem number, e.g. `217.*.py`).

4. **Verify content**: Read each solution file and confirm it contains:
   - An actual solution (not just a template/stub)
   - The solution is inside `@lc code=start` / `@lc code=end` markers (this means it was submitted via the LeetCode plugin)

5. **Check learning tasks**: If the plan includes a learning section (e.g. `python_basics.py`), verify that file exists and has been filled in (not just TODO placeholders).

6. **Write report into plan.md**: Append a completion report section to `7-day-sprint/day$ARGUMENTS/plan.md` (do NOT create a new file). If a report section already exists, replace it with the updated version. The report format:

   ```
   ---

   ## Completion Report

   ### Learning
   - [file](path) — Done / Incomplete

   ### Problems (N/M completed)

   | # | Problem | File | Status | Solution Approach |
   |---|---------|------|--------|-------------------|
   | 1 | 217 Contains Duplicate | 217.contains-duplicate.py | Done | brief approach |
   | 2 | ... | ... | Missing / Done | ... |

   > Bonus: `268.missing-number-2.py` (alternative XOR approach), ...

   ### Verdict: Done / X items remaining
   ```

   - **Done**: file exists, has real solution code inside `@lc` markers
   - **Missing**: no matching file found
   - **Incomplete**: file exists but appears to be a stub or empty template
   - If there are extra solution files (e.g. alternative approaches like `268.missing-number-2.py`), list them in a "Bonus" line

7. **Update README.md progress**: Update the "進度追蹤" section in the project root `README.md`:
   - If this day is fully complete, change its line from `- [ ] Day X 完成（___/N 題）` to `- [x] Day X 完成（N/N 題）`
   - If partially complete, update the count but keep the checkbox unchecked: `- [ ] Day X 完成（M/N 題）`
   - Only modify the line for Day $ARGUMENTS — do not touch other days
