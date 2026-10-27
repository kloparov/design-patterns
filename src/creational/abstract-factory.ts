export interface Button {
  render(): string;
}

export interface Checkbox {
  render(): string;
}

export interface WidgetFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export class LightThemeFactory implements WidgetFactory {
  createButton(): Button {
    return { render: () => "Light button" };
  }

  createCheckbox(): Checkbox {
    return { render: () => "Light checkbox" };
  }
}

export class DarkThemeFactory implements WidgetFactory {
  createButton(): Button {
    return { render: () => "Dark button" };
  }

  createCheckbox(): Checkbox {
    return { render: () => "Dark checkbox" };
  }
}
