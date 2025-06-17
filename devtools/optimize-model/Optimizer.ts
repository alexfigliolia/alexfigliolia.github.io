import { existsSync } from "node:fs";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { ChildProcess } from "@figliolia/child-process";

export class Optimizer {
  public static ROOT = process.cwd();
  public static run() {
    const [filePath, skipJoin] = this.parseOptions();
    const resultPath = `${filePath.split(".glb")[0]}-optimized.glb`;
    return new ChildProcess(
      `yarn gltf-transform optimize ${filePath} ${resultPath} --texture-compress ktx2${skipJoin ? " --no-flatten --no-join" : ""}`,
    ).handler;
  }

  private static parseOptions() {
    const { values } = parseArgs({
      options: {
        file: {
          short: "f",
          type: "string",
        },
        noJoin: {
          short: "n",
          default: false,
          type: "boolean",
        },
      },
      strict: true,
    });
    if (!values.file) {
      console.log("A --file argument is required");
      process.exit(0);
    }
    const filePath = join(this.ROOT, values.file);
    if (!existsSync(filePath)) {
      console.log("The specified file could not be found");
      process.exit(0);
    }
    return [filePath, values.noJoin] as const;
  }
}
