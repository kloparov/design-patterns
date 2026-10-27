export interface CharacterStyle {
  readonly font: string;
  readonly size: number;
}

export class CharacterStyleFactory {
  private readonly styles = new Map<string, CharacterStyle>();

  getStyle(font: string, size: number): CharacterStyle {
    const key = `${font}:${size}`;
    let style = this.styles.get(key);
    if (!style) {
      style = Object.freeze({ font, size });
      this.styles.set(key, style);
    }
    return style;
  }

  get styleCount(): number {
    return this.styles.size;
  }
}
