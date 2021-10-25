export default interface iInputField {
  state: [getter: string, setter: Function];
  settings: {
    label: string;
    instructions: string;
    placeholder: string;
    type: string;
  };
}
