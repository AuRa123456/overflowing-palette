export class ValueSelector<T> {
  container;
  value: T;
  options: string[];
  isCycle: boolean;

  leftBtn: HTMLButtonElement;
  rightBtn: HTMLButtonElement;
  text: HTMLSpanElement;

  constructor(
    text: string,
    defaultValue: T,
    onLeftClick: () => T,
    onRightClick: () => T
  ) {
    this.container = document.createElement("div");
    this.container.classList.add("value-selector");
    this.value = defaultValue;

    const label = document.createElement("span");
    label.classList.add("value-selector__label");
    label.textContent = text;

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("value-selector__input-wrapper");

    const leftBtn = this.createButton();
    leftBtn.classList.add("value-selector__button--left");

    leftBtn.addEventListener("click", () => {
      this.update(onLeftClick());
    });

    const value = document.createElement("span");
    value.classList.add("value-selector__value");
    value.textContent = String(defaultValue);

    const rightBtn = this.createButton();
    rightBtn.addEventListener("click", () => {
      this.update(onRightClick());
    });

    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.text = value;

    inputWrapper.appendChild(leftBtn);
    inputWrapper.appendChild(value);
    inputWrapper.appendChild(rightBtn);

    this.container.appendChild(label);
    this.container.appendChild(inputWrapper);
  }
  private createButton() {
    const btn = document.createElement("button");
    btn.classList.add("value-selector__button");
    const icon = document.createElement("div");
    icon.classList.add("icon");
    btn.appendChild(icon);
    return btn;
  }

  update(newValue: T) {
    this.text.textContent = String(newValue);
  }
}
