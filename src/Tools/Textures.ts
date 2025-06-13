import { NoColorSpace, RepeatWrapping, Texture } from "three";

export class Textures {
  public static readonly wrap = this.chainable((texture: Texture) => {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
  });

  public static readonly repeat = this.chainable(
    (texture: Texture, n: number) => {
      texture.repeat.set(n, n);
      texture.offset.set(0, 0);
    },
  );

  public static readonly colorless = this.chainable((texture: Texture) => {
    texture.colorSpace = NoColorSpace;
  });

  public static readonly rerender = this.chainable((texture: Texture) => {
    texture.needsUpdate = true;
  });

  private static chainable<F extends (...args: any[]) => void>(fn: F) {
    return (...args: Parameters<F>) => {
      fn(...args);
      return this;
    };
  }
}
