const fs = require("fs");
const path = require("path");

/**
 * Consolidates all coding prompts with instructions into a single markdown file
 * Following the @prompts guidance for professional development standards
 */
class PromptConsolidator {
  constructor() {
    this.promptsDir = path.join(__dirname, "..", "prompts");
    this.outputFile = path.join(__dirname, "..", "CONSOLIDATED_PROMPTS.md");
    this.instructionsFile = path.join(__dirname, "..", "instructions.md");
  }

  readMarkdownFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const lines = content.split("\n");

      let frontmatter = {};
      let bodyStartIndex = 0;

      if (lines[0] === "---") {
        let endIndex = -1;
        for (let i = 1; i < lines.length; i++) {
          if (lines[i] === "---") {
            endIndex = i;
            break;
          }
          const [key, ...valueParts] = lines[i].split(":");
          if (key && valueParts.length > 0) {
            frontmatter[key.trim()] = valueParts.join(":").trim();
          }
        }
        bodyStartIndex = endIndex + 1;
      }

      const body = lines.slice(bodyStartIndex).join("\n").trim();
      return { frontmatter, body, fullContent: content };
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
      return null;
    }
  }

  getPromptFiles() {
    try {
      return fs
        .readdirSync(this.promptsDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => path.join(this.promptsDir, file))
        .sort();
    } catch (error) {
      console.error("Error reading prompts directory:", error.message);
      return [];
    }
  }

  createConsolidatedContent() {
    const consolidated = [];

    // Add header
    consolidated.push("# Awesome Coding Prompts - Consolidated Guide");
    consolidated.push("");
    consolidated.push(
      "> A comprehensive collection of professional development standards and architectural guidance"
    );
    consolidated.push("");
    consolidated.push("---");
    consolidated.push("");

    const instructions = this.readMarkdownFile(this.instructionsFile);
    if (instructions) {
      consolidated.push("## 📋 Core Instructions");
      consolidated.push("");
      consolidated.push(instructions.body);
      consolidated.push("");
      consolidated.push("---");
      consolidated.push("");
    }

    const promptOrder = [
      "clean-code-typescript.md",
      "clean-architecture.md",
      "typescript-wizard.md",
      "feature-development.md",
      "frontend-react-shadcn.md",
      "frontend-design.md",
      "nextjs-app-router.md",
    ];

    const promptFiles = this.getPromptFiles();

    promptOrder.forEach((promptFile) => {
      const fullPath = path.join(this.promptsDir, promptFile);
      if (promptFiles.includes(fullPath)) {
        const prompt = this.readMarkdownFile(fullPath);
        if (prompt) {
          const title =
            prompt.frontmatter.name || path.basename(promptFile, ".md");
          const description = prompt.frontmatter.description || "";

          consolidated.push(`## 📖 ${this.formatTitle(title)}`);
          if (description) {
            consolidated.push("");
            consolidated.push(`*${description}*`);
          }
          consolidated.push("");
          consolidated.push(prompt.body);
          consolidated.push("");
          consolidated.push("---");
          consolidated.push("");
        }
      }
    });

    promptFiles.forEach((filePath) => {
      const fileName = path.basename(filePath);
      if (!promptOrder.includes(fileName)) {
        const prompt = this.readMarkdownFile(filePath);
        if (prompt) {
          const title = prompt.frontmatter.name || fileName.replace(".md", "");
          const description = prompt.frontmatter.description || "";

          consolidated.push(`## 📖 ${this.formatTitle(title)}`);
          if (description) {
            consolidated.push("");
            consolidated.push(`*${description}*`);
          }
          consolidated.push("");
          consolidated.push(prompt.body);
          consolidated.push("");
          consolidated.push("---");
          consolidated.push("");
        }
      }
    });

    consolidated.push("## 🚀 Implementation Notes");
    consolidated.push("");
    consolidated.push(
      "This consolidated guide follows the architectural principles outlined in each individual prompt:"
    );
    consolidated.push("");
    consolidated.push(
      "- **Clean Architecture**: Strict separation of concerns with dependency inversion"
    );
    consolidated.push(
      "- **TypeScript Excellence**: Zero `any` types, strict typing, and type-driven development"
    );
    consolidated.push(
      "- **Professional Standards**: Production-ready code with comprehensive error handling"
    );
    consolidated.push(
      "- **Domain-Driven Design**: Business logic isolated from infrastructure concerns"
    );
    consolidated.push("");
    consolidated.push("---");
    consolidated.push("");
    consolidated.push(
      "*Generated from individual prompt files. Last updated: " +
        new Date().toISOString().split("T")[0] +
        "*"
    );

    return consolidated.join("\n");
  }

  formatTitle(title) {
    return title
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  writeConsolidatedFile() {
    const content = this.createConsolidatedContent();

    try {
      fs.writeFileSync(this.outputFile, content, "utf8");
      console.log(`✅ Consolidated prompts written to: ${this.outputFile}`);
      console.log(`📊 File size: ${(content.length / 1024).toFixed(2)} KB`);
      console.log(`📝 Lines: ${content.split("\n").length}`);
      return true;
    } catch (error) {
      console.error("❌ Error writing consolidated file:", error.message);
      return false;
    }
  }

  run() {
    console.log("🔄 Starting prompt consolidation...");

    if (!fs.existsSync(this.promptsDir)) {
      console.error(`❌ Prompts directory not found: ${this.promptsDir}`);
      return false;
    }

    if (!fs.existsSync(this.instructionsFile)) {
      console.error(`❌ Instructions file not found: ${this.instructionsFile}`);
      return false;
    }

    const promptFiles = this.getPromptFiles();
    console.log(`📂 Found ${promptFiles.length} prompt files`);
    console.log(`📋 Instructions file: ${this.instructionsFile}`);

    return this.writeConsolidatedFile();
  }
}

if (require.main === module) {
  const consolidator = new PromptConsolidator();
  const success = consolidator.run();

  if (success) {
    console.log("🎉 Consolidation completed successfully!");
  } else {
    console.error("💥 Consolidation failed!");
    process.exit(1);
  }
}

module.exports = PromptConsolidator;
