#!/usr/bin/env node
import { existsSync, readdirSync, chmodSync, rmSync } from "node:fs";
import { resolve, join } from "node:path";
import { spawn, spawnSync } from "node:child_process";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const REPO = "lakpriya1s/devrig";

// Files that belong to the devrig template's own repo (branding, translated
// docs, license/citation), not to a scaffolded workspace. Removed after the
// clone; setup.sh removes them too for the GitHub "Use this template" path.
const TEMPLATE_ONLY_FILES = ["docs", "assets", "CITATION.cff", "CONTRIBUTING.md", "LICENSE"];

const HELP = `
create-devrig — scaffold a devrig multi-repo AI dev workspace

Usage:
  npx create-devrig [directory]

Fetches the devrig template (no git history), strips the template's own
branding/docs, makes the target directory its own git repo, and launches
its interactive setup wizard.

Options:
  -h, --help   Show this help
`;

function fail(msg) {
  console.error(`\x1b[31merror:\x1b[0m ${msg}`);
  process.exit(1);
}

function isEmptyDir(dir) {
  if (!existsSync(dir)) return true;
  const entries = readdirSync(dir).filter((e) => e !== ".git");
  return entries.length === 0;
}

async function promptTarget() {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(
    "Directory to create (. for current directory) [my-devrig-workspace]: "
  );
  rl.close();
  return answer.trim() || "my-devrig-workspace";
}

function commandExists(cmd) {
  const probe = process.platform === "win32" ? "where" : "command";
  const args = process.platform === "win32" ? [cmd] : ["-v", cmd];
  const res = spawnSync(probe, args, { stdio: "ignore", shell: process.platform === "win32" });
  return res.status === 0;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes("-h") || args.includes("--help")) {
    console.log(HELP);
    return;
  }

  let target = args.find((a) => !a.startsWith("-"));
  if (!target) target = await promptTarget();
  const dest = resolve(process.cwd(), target);

  if (!isEmptyDir(dest)) {
    fail(`'${target}' already exists and is not empty. Choose an empty or new directory.`);
  }

  if (!commandExists("git")) {
    fail("git is required. On macOS run: xcode-select --install");
  }

  console.log(`\x1b[34m==>\x1b[0m Fetching devrig template into ${target}...`);
  const { default: degit } = await import("degit");
  const emitter = degit(REPO, { cache: false, force: true, verbose: false });
  try {
    await emitter.clone(dest);
  } catch (err) {
    fail(`Failed to fetch the template: ${err.message}`);
  }

  for (const rel of TEMPLATE_ONLY_FILES) {
    rmSync(join(dest, rel), { recursive: true, force: true });
  }

  if (!existsSync(join(dest, ".git"))) {
    console.log("\x1b[34m==>\x1b[0m Initializing git repository...");
    const initRes = spawnSync("git", ["init", "-q"], { cwd: dest, stdio: "inherit" });
    if (initRes.status !== 0) fail("git init failed.");
  }

  for (const rel of ["setup.sh", "git-hooks/pre-commit", "git-hooks/pre-push"]) {
    const p = join(dest, rel);
    if (existsSync(p)) {
      try {
        chmodSync(p, 0o755);
      } catch {
        // non-fatal — setup.sh chmods the hooks itself; worst case the user
        // runs `chmod +x setup.sh` once by hand on an unusual filesystem.
      }
    }
  }

  console.log(`\x1b[34m==>\x1b[0m Launching setup — answer its prompts to configure your workspace.\n`);

  const runner = process.platform === "win32" && !commandExists("bash") ? null : "bash";
  if (!runner) {
    console.log(
      `${target} is ready, but no bash was found to run setup.sh automatically.\n` +
        `Open this folder in WSL or Git Bash and run:\n\n  ./setup.sh\n`
    );
    return;
  }

  const child = spawn(runner, ["setup.sh"], { cwd: dest, stdio: "inherit" });
  child.on("exit", (code) => process.exit(code ?? 0));
  child.on("error", (err) => fail(`Failed to launch setup.sh: ${err.message}`));
}

main().catch((err) => fail(err.message));
