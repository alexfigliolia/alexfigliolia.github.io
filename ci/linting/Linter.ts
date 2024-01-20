import { ChildProcess } from "@figliolia/child-process";

export class Linter extends ChildProcess {
  public static async run() {
    await this.typeCheck();
    await this.runEslint();
    return this.runStyleLint();
  }

  private static typeCheck() {
    return this.wrapCommand("yarn tsc --noemit");
  }

  private static runEslint() {
    return this.wrapCommand("yarn eslint ./ --fix");
  }

  private static runStyleLint() {
    return this.wrapCommand("yarn stylelint src/**/*.scss --fix");
  }
}
