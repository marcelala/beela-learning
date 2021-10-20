export default interface iInputField {
    key:string,
    state: [getter: any, setter: any];
    settings: {
        label: string;
        instructions: string;
        placeholder: string;
        type: string;
    };
}