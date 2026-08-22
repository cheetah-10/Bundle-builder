export interface Variant {
    id: string;
    name: string;
    // price?: number;
    hex?: string;
    thumnail?: string;
    // compareAtPrice?: number;
    isSelected: boolean;
    onClick: () => void;
}

