import type { MouseEvent, TouchEvent } from "react";
import type { Coordinate, ISetAnimationFrame } from "./types";

export class Controller {
  private top = 0;
  private left = 0;
  private width = 0;
  private height = 0;
  private setAnimationFrame: ISetAnimationFrame;
  constructor(setAnimationFrame: ISetAnimationFrame) {
    this.setAnimationFrame = setAnimationFrame;
  }

  private cacheTargetData(eventTarget: EventTarget) {
    const target = eventTarget as HTMLButtonElement;
    const { top, left, height, width } = target.getBoundingClientRect();
    this.top = top;
    this.height = height;
    const offset = width * 0.2;
    this.left = left - offset / 2;
    this.width = width + width * 0.2;
  }

  private getRotations(x: number, y: number): [x: number, y: number] {
    const mouseY = y - this.top;
    const mouseX = x - this.left;
    const offsetX = 0.5 - mouseX / this.width;
    const offsetY = 0.5 - mouseY / this.height;
    return [offsetY * 50, offsetX * 20];
  }

  private setFrame([x, y]: Coordinate, duration: number) {
    this.setAnimationFrame({
      rotX: x,
      rotY: y,
      transition: `${duration}s`,
      scale: 1.1,
      boxShadow: `0 ${x}px ${
        this.height / 5
      }px rgba(0,0,0,0.5), ${x}px ${y}px ${this.width / 5}px rgba(0,0,0,0.45)`,
    });
  }

  private mouseEnter = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => {
    this.cacheTargetData(e.currentTarget);
    this.setFrame(this.getRotations(...this.getCoordinates(e)), 0.5);
  };

  private mouseMove = (
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ) => {
    this.setFrame(this.getRotations(...this.getCoordinates(e)), 0);
  };

  private mouseLeave = () => {
    this.setAnimationFrame({
      rotX: 0,
      rotY: 0,
      scale: 1,
      transition: "0.5s",
      boxShadow: "none",
    });
  };

  private getCoordinates(
    e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>,
  ): [clientX: number, clientY: number] {
    if ("touches" in e) {
      return [e.touches[0].clientX, e.touches[0].clientY];
    }
    return [e.clientX, e.clientY];
  }

  public readonly events = {
    onMouseMove: this.mouseMove,
    onTouchEnd: this.mouseLeave,
    onTouchMove: this.mouseMove,
    onTouchStart: this.mouseEnter,
    onMouseEnter: this.mouseEnter,
    onMouseLeave: this.mouseLeave,
  };
}
