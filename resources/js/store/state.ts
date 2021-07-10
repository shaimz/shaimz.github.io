export type Item = {
    id: number,
    name: string,
    description: string,
    price: number,
    images: string[],
    features: object[],
    createdBy: string,
    createdAt: string,
    updatedAt: string
};

export type State = {
    loading: boolean,
    items: Item[]
};

export const state: State = {
    loading: false,
    items:[],
}
