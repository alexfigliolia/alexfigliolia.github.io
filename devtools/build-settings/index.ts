import path from "path";
import TSConfig from "../../tsconfig.json";

export class BuildSettings {
  public static ROOT = process.cwd();
  public static SRC = path.join(this.ROOT, "src");
  public static PRODUCTION = process.env.NODE_ENV !== "development";

  public static alias(relative: string) {
    return path.join(this.SRC, relative);
  }

  public static get aliases() {
    const { paths: TSPaths } = TSConfig.compilerOptions;
    const paths = TSPaths as unknown as Record<string, [string]>;
    const aliases: Record<string, string> = {};
    for (const key in paths) {
      const alias = this.globToPathToken(key);
      const directory = this.globToPathToken(paths[key][0]);
      aliases[alias] = this.alias(directory);
    }
    return aliases;
  }

  private static globToPathToken(glob: string) {
    return glob.endsWith("/*") ? glob.slice(0, -2) : glob;
  }
}
